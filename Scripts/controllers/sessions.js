/**
 * This is a sessions controller
 */
define([
    'jquery',
    'utils/helpers',
    'ui/gridsessions'
], function ($, Helpers) {

    //CONSTRUCTOR
    var init = function () {

    };

    //ACTIONS
    var index = function () {
        $('#main_container')
            .load(Helpers.toViewsUrl('sessions/index.html'), function () {
                $('#sessions_list').kendoGridSessions();
            });
    };

    var detail = function (id) {

    };

    //CALL CONSTRUCTOR
    init();

    //PUBLIC PROPERTIES
    return {
        index: index,
        detail: detail
    };
});