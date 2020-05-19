$(document).ready(function() {
    var example_target = {};
    var data = [];
    var alts = [];

    var set_target = function(index, target) {
        $('#action-target-img').attr('src', target.image_url);
        $('#action-target-text').text(alts[index]);
        $('#action-target-result').text(target.results[index]);
        $('.action-predict-result').each(function(index) {
            $(this).text(target.results[index]);
        });
        window.history.replaceState({}, "", target.hash_url);
        gtag('config', GTAG_ID, {'page_path': target.hash_url});
    };


    $.ajax({
        url: '../json/index',
        type: 'GET',
        cache: false,
        error: function(xhr) {
            gtag('event', 'ERROR', {
                'event_category': 'CNN_GET_DEFAULT_JSON_ERROR',
            });
        },
        success: function(response) {
            $.each(response, function(key, value) {
                var index = Math.floor(Math.random() * 3);
                data.push(value.items[index]);
                alts.push(value.alt);

                if ($('#pagetype').text() == 'examples') {
                    value.items.forEach(function(item_value) {
                        if (item_value.hash_url.endsWith($('#pageparam').text())) {
                            example_target = item_value;
                        }
                    });
                }
            });


            $('.action-example-img').each(function(index) {
                $(this).attr('index', index);
                $(this).attr('src', data[index].image_url);
            });

            var page_type = $('#pagetype').text();
            var page_param = $('#pageparam').text();

            if (page_type == 'home' && page_param == 'index') {
                var index = Math.floor(Math.random() * 10)
                var target = data[index];
                set_target(index, target);
            } else if (page_type == 'examples') {
                var index = example_target.results.indexOf(Math.max(...example_target.results));
                set_target(index, example_target);
            } else if (page_type == 'html') {
                $.ajax({
                    url: '../json/' + page_param,
                    type: 'GET',
                    cache: false,
                    error: function(xhr) {
                        gtag('event', 'ERROR', {
                            'event_category': 'CNN_GET_HASH_JSON_ERROR',
                        });
                    },
                    success: function(resp) {
                        var target = {
                            'results': resp.result,
                            'hash_url': resp.url,
                            'image_url': resp.img,
                        };
                        index = target.results.indexOf(Math.max(...target.results));
                        set_target(index, target);
                        // alert('TODO_GA_TRACKER');
                        gtag('event', 'ajax', {
                            'event_category': 'cnn/vgg19/cifar10/hash',
                            'event_label': 'hash_url',
                            'value': resp.url
                        });
                    }
                })
            }
        }
    });

    $('.action-example-img').click(function() {
        var index = $(this).attr('index');
        var target = data[index];
        set_target(index, target);
        gtag('event', 'ajax', {
            'event_category': 'cnn/vgg19/cifar10/example',
            'event_label': 'filename',
            'value': target.hash_url.split('/')[7]
        });
    });

    $('#action-upload').click(function(e) {
        $('input[type=file]').click();
    });


    $('input[type=file]').change(function(e) {
        var data = new FormData();
        data.append('image', e.target.files[0]);
        $.ajax({
            url: '../predict',
            type: 'POST',
            contentType: false,
            processData: false,
            data: data,
            error: function(xhr) {
                if (e.target.value.length)
                    alert("圖片太大囉!");
                gtag('event', 'ERROR', {
                    'event_category': 'CNN_FILE_TOO_LARGE',
                });
            },
            success: function(resp) {
                var target = {
                    'results': resp.result,
                    'hash_url': resp.url,
                    'image_url': resp.img,
                };
                index = target.results.indexOf(Math.max(...target.results));
                set_target(index, target);
                gtag('event', 'ajax', {
                    'event_category': 'cnn/vgg19/cifar10/predict',
                    'event_label': 'filename',
                    'value': e.target.files[0] 
                });
            }
        });
    });
});
