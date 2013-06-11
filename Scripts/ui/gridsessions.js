/**
 * Base class for Kendo currency text box
 */
define([
    'kendoui/kendo.grid.min',
    'data/datasourcesessions'
], function() {

	//EXTEND KENDO CURRENCY TEXT BOX
    var Grid = kendo.ui.Grid.extend({

		init: function(element, options) {
			//BASE CALL TO WIDGET INITIALIZATION
			kendo.ui.Grid.fn.init.call(this, element, options);
		},

		options: {
			//THE NAME IS WHAT IT WILL APPEAR AS OFF THE KENDO NAMESPACE (i.e. kendo.ui.YouTube)
			//THE JQUERY PLUGIN WOULD BE jQuery.fn.kendoYouTube
			//http://www.kendoui.com/blogs/teamblog/posts/12-04-03/creating_custom_kendo_ui_plugins.aspx
		    name: 'GridSessions',
		    dataSource: new kendo.ui.DataSourceSessions(),
		    sortable: true,
		    columns: [
                {
                    field: 'Title'
                },
                {
                    field: 'Speakers'
                },
                {
                    field: 'StartDate',
                    template: '#= kendo.toString(StartDate,"dd MMMM yyyy") #'
                },
                {
                    field: 'Location'
                }
		    ]
		}
	});

	kendo.ui.plugin(Grid);

	return {}
});
