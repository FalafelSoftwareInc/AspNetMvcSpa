; (function () {
    //DETERMINE BASE URL FROM CURRENT SCRIPT PATH
    var scripts = document.getElementsByTagName('script');
    var src = scripts[scripts.length - 1].src;
    var currentPath = src.substring(src.indexOf(document.location.pathname), src.lastIndexOf('/'));

    define('basescriptsurl', [], function () { return currentPath + '/'; });
    define('baseservicesurl', [], function () { return '~/api'; });
    define('basemvcurl', [], function () { return '~/mvcroute'; });

    //HANDLE JQUERY IF LOADED ALREADY TO AVOID OVERWRITING EXISTING JQUERY PROPERTIES AND PLUGINS
    if (!window.jQuery) {
        //SPECIFY ALIAS TO PATH IN CONFIG
        require.config({
            paths: {
                jquery: 'libs/jquery/js/jquery.min'
            }
        });
    } else {
        //REGISTER THE CURRENT JQUERY
        define('jquery', [], function () { return window.jQuery; });
    }

    //CONFIFURE SHORTCUT ALIASES
    require.config({
        baseUrl: currentPath,
        paths: {
            blockui: 'libs/blockui/js/jquery.blockUI',
            bootstrap: 'libs/bootstrap/js/bootstrap.min',
            kendoui: 'http://cdn.kendostatic.com/2013.1.514/js', //FOR AMD USE
            moment: 'libs/moment/js/moment.min',
            toastr: 'libs/toastr/js/toastr.min',
            underscore: 'libs/underscore/js/underscore-min',
            'underscore.string': 'libs/underscore/js/underscore.string.min'
        },
        // The shim config allows us to configure dependencies for
        // scripts that do not call define() to register a module
        shim: {
            blockui: ['jquery'],
            bootstrap: ['jquery'],
            //kendoui: ['jquery'], //TODO: DOES NOT WORK FOR FOLDERS
            moment: {
                deps: ['jquery'],
                exports: 'moment'
            },
            toastr: {
                deps: ['jquery'],
                exports: 'toastr'
            },
            underscore: {
                deps: ['underscore.string'],
                exports: '_',
                init: function (_s) {
                    //MERGE STRING PLUGIN TO UNDERSCORE NAMESPACE
                    _.mixin(_s.exports());
                    return _;
                }
            }
        }
    });

    //INITIALIZE APP
    require([
        'jquery',
        'utils/helpers',
        'utils/alerts',
        'bootstrap',
        'kendoui/kendo.core.min',
        'kendoui/kendo.router.min'
    ], function ($, Helpers, Alerts) {

        //CONSTRUCTOR
        var init = function () {
            //INITIALIZE APP PARTS
            initElements();
            initEvents();
            initRouter();
        };

        //INITIALIZE DOM ELEMENTS
        var initElements = function () {
            //ON DOC READY
            $(function () {
                //PLACEHOLDER FOR DOM ELEMENTS UPDATES
            });
        };

        //INITIALIZE DOM EVENTS
        var initEvents = function () {
            $('header .signup').click(function (e) {
                e.preventDefault();
                Alerts.modal(Helpers.toViewsUrl('pages/signup.html'), {
                    title: 'Create an account',
                    submit: 'Sign up',
                    submitCss: 'submit-signup',
                    ajax: true,
                    fnSubmit: function () {
                        //TODO: NOT IMPLEMENTED
                        Alerts.hideModal();
                        Alerts.warning('Not implemented!');
                    }
                });
            });

            $('header .login').click(function (e) {
                e.preventDefault();
                Alerts.modal(Helpers.toViewsUrl('pages/login.html'), {
                    title: 'Log in to your account',
                    submit: 'Log in',
                    submitCss: 'submit-login',
                    ajax: true,
                    fnSubmit: function () {
                        //TODO: NOT IMPLEMENTED
                        Alerts.hideModal();
                        Alerts.warning('Not implemented!');
                    }
                });
            });
        };

        //INTIALIZE ROUTER
        var initRouter = function () {
            var router = new kendo.Router();

            router.route('/', function () {
                require(['controllers/pages'], function (data) {
                    data.index();
                });
            });

            router.route('/about', function () {
                require(['controllers/pages'], function (data) {
                    data.about();
                });
            });

            router.route('/contact', function () {
                require(['controllers/pages'], function (data) {
                    data.contact();
                });
            });

            router.route('/twitter', function () {
                require(['controllers/pages'], function (data) {
                    data.twitter();
                });
            });

            router.route('/:controller/:action/:id', function (controller, action, id) {
                require(['controllers/' + controller.toLowerCase()], function (data) {
                    //CALL CONTROLLER ACTION WITH PARAMETERS IF APPLICABLE
                    if (data && data[action]) data[action](id);
                });
            });

            router.route('/:controller/:action', function (controller, action) {
                require(['controllers/' + controller.toLowerCase()], function (data) {
                    if (data && data[action]) data[action]();
                });
            });

            router.route('/:controller', function (controller) {
                require(['controllers/' + controller.toLowerCase()], function (test) {
                    if (test && test['index']) test['index']();
                });
            });

            router.start();
        }

        //INITIALIZE APP
        init();
    });
})();