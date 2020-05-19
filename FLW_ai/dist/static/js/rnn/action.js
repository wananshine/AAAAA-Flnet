$(document).ready(function() {
    var set_target = function(target) {

        var results = target.result.split("\n");
        var hash_url = target.url;
        $('.chinese-text-row span').each(function(index) {
            $(this).html(results[index]);
        });
        window.history.replaceState({}, "", hash_url);
        gtag('config', GTAG_ID, {
            'page_path': hash_url
        });
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
                    'event_category': 'RNN_GET_HASH_JSON_ERROR',
                });
            },
            success: function(resp) {
                set_target(resp);
                gtag('event', 'ajax', {
                    'event_category': 'rnn/lstm/5455945/hash',
                    'event_label': 'hash_url',
                    'value': resp.url
                });
            }
        })
    }

    $('#action-write').click(function(e) {
        var input_text = '';
        $('.chinese-text-input').each(function(index) {
            input_text = input_text + $(this).val();
        });
        $('.chinese-text-row span').each(function(index) {
            $(this).html("");
        });
        $.ajax({
            url: '../predict',
            type: 'POST',
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            data: {
                'word': input_text
            },
            error: function(xhr) {
                gtag('event', 'ERROR', {
                    'event_category': 'RNN_PREDICT_ERROR',
                });
            },
            success: function(resp) {
                if (resp.error) {
                    alert('抱歉，系統還不會用 "' + resp.error.join(',') + '" 寫詩喔!');
                    gtag('event', 'ERROR', {
                        'event_category': 'RNN_WORD_NOT_FOUND_ERROR',
                    });
                } else {
                    set_target(resp);
                    gtag('event', 'ajax', {
                        'event_category': 'rnn/lstm/5455945/predict',
                        'event_label': 'words',
                        'value': input_text
                    });
                }
            }
        });
    });

    $('.chinese-text-input').each(function(index) {
        $(this).on('change', function(e) {
            $(this).val($(this).val()[0]);
        });
    });
});
