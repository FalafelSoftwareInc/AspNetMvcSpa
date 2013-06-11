/**
 * This is a sessions controller
 */
define([
    'jquery',
    'utils/helpers',
    'utils/alerts',
    'kendoui/kendo.data.min',
    'kendoui/kendo.listview.min'
], function ($, Helpers, Alerts) {

    //CONSTRUCTOR
    var init = function () {

    };

    //ACTIONS
    var index = function () {
        $('#main_container')
            .hide()
            .load(Helpers.toViewsUrl('pages/index.html'))
            .fadeIn('slow');
    };

    var about = function () {
        $('#main_container')
            .hide()
            .load(Helpers.toViewsUrl('pages/about.html'))
            .fadeIn('slow');
    };

    var contact = function () {
        $('#main_container')
            .hide()
            .load(Helpers.toViewsUrl('pages/contact.html'), function () {
                //DECLARE VARIABLES
                var form = $('form', this);

                //HANDLE FORM SUBMISSION
                form.find('input[type=submit]').click(function (e) {
                    e.preventDefault();

                    Helpers.sendClientMail({
                        mailto: 'info@falafel.com',
                        cc: 'basem@falafel.com',
                        subject: 'Contact form: ' + form[0].interest.value,
                        body: form[0].comment.value
                            + '\n\nSincerely,\n' + form[0].name.value
                            + '\n' + form[0].email.value
                    });
                });
            })
            .fadeIn('slow');
    };

    var twitter = function () {
        $('#main_container')
            .load(Helpers.toViewsUrl('pages/twitter.html'), function () {
                var query = '#falafelcon';
                $('.twit-wrapper h2').html('Results for ' + query);

                var dataSource = new kendo.data.DataSource({
                    transport: {
                        read: {
                            url: 'http://search.twitter.com/search.json',
                            contentType: 'application/json; charset=utf-8',
                            type: 'GET',
                            dataType: 'jsonp',
                            data: {
                                q: query
                            }
                        }
                    },
                    schema: {
                        data: 'results',
                        total: 'results_per_page'
                    }
                });

                $('#twit_list').kendoListView({
                    dataSource: dataSource,
                    template: kendo.template($('#twit_template').html())
                });
            });
    };

    //CALL CONSTRUCTOR
    init();

    //PUBLIC PROPERTIES
    return {
        index: index,
        about: about,
        contact: contact,
        twitter: twitter
    };
});