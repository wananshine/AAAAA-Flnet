$(document).ready(function() {
    var set_target = function(target) {
        $('#action-target-img').attr('src', target.result);
        window.history.replaceState({}, "", target.url);
        gtag('config', GTAG_ID, {
            'page_path': target.url
        });
        var parameters = JSON.parse(target.parameter)['parameters'];
        for (var i = 0; i < 5; i++) {
            $('#range' + (i + 1)).html(parameters[i]);
            $('input[name=range' + (i + 1) + ']').val(parameters[i]);
        }
    };

    var page_type = $('#pagetype').text();
    var page_param = $('#pageparam').text();

    if (page_type == 'html') {
        $.ajax({
            url: '../json/' + page_param,
            type: 'GET',
            cache: false,
            error: function(xhr) {
                gtag('event', 'ERROR', {
                    'event_category': 'GAN_GET_HASH_JSON_ERROR',
                });
            },
            success: function(resp) {
                set_target(resp);
                gtag('event', 'ajax', {
                    'event_category': 'gan/stylegan/ffhq/hash',
                    'event_label': 'hash_url',
                    'value': resp.url
                });
            }
        })
    }

    $('#action-generate').click(function(e) {
        var data = {
            'parameter1': $('#range1').html(),
            'parameter2': $('#range2').html(),
            'parameter3': $('#range3').html(),
            'parameter4': $('#range4').html(),
            'parameter5': $('#range5').html()
        };
        gtag('event', 'ajax', {
            'event_category': 'gan/stylegan/ffhq/predict',
            'event_label': 'points',
            'value': Object.values(data).join(',')
        });
        $.ajax({
            url: '../predict',
            type: 'POST',
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            data: data,

            error: function(xhr) {
                gtag('event', 'ERROR', {
                    'event_category': 'GAN_PREDICT_ERROR',
                });
            },
            success: function(resp) {
                set_target(resp);
            }
        });
    });
});
