/**
 * Base class for Kendo currency text box
 */
define([
    'utils/helpers',
    'kendoui/kendo.data.min'
], function (Helpers) {

	//EXTEND KENDO CURRENCY TEXT BOX
    var DataSource = kendo.data.DataSource.extend({

		init: function(element, options) {
			//BASE CALL TO WIDGET INITIALIZATION
		    kendo.data.DataSource.fn.init.call(this, element, options);
		},

		options: {
			//THE NAME IS WHAT IT WILL APPEAR AS OFF THE KENDO NAMESPACE (i.e. kendo.ui.YouTube)
			//THE JQUERY PLUGIN WOULD BE jQuery.fn.kendoYouTube
			//http://www.kendoui.com/blogs/teamblog/posts/12-04-03/creating_custom_kendo_ui_plugins.aspx
			name: 'DataSourceSessions',
			transport: {
			    read: {
			        url: Helpers.toServicesUrl('sessions'),
			        contentType: 'application/json; charset=utf-8',
			        type: 'GET',
			        dataType: 'json'
			    }
			}
		}
	});

    kendo.ui.plugin(DataSource);

	return {}
});
