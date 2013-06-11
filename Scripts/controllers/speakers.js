/**
 * This is a sessions controller
 */
define([
    'jquery',
    'utils/helpers',
    'ui/gridspeakers'
], function ($, Helpers) {

    //CONSTRUCTOR
    var init = function () {

    };

    //ACTIONS
    var index = function () {
        $('#main_container')
            .load(Helpers.toViewsUrl('speakers/index.html'), function () {
                $('#speakers_list').kendoGridSpeakers();
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