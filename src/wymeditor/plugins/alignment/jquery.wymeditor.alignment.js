/*jslint evil: true */
/**
    WYMeditor.alignment
    ====================

    A plugin to add a class to a paragraph which can be used to set the alignment
	for it.
	
	Todo:
		- Allow selection of which Alignment buttons to show
		- Allow customisation of classes used for each alignment.
		
	by Patabugen ( patabugen.co.uk )
*/

WYMeditor.editor.prototype.alignment = function () {
    var wym = this,
		$box = jQuery(this._box);

	options = {

	}

	//construct the buttons' html
    var button_left = String() +
        "<li class='wym_tools_alignment_left'>" +
            "<a name='AlignLeft' href='#' title='Align left'" +
                "style='background-image: url(" +
                    wym._options.basePath +
                    "plugins/alignment/icons.png)'>" +
                "{left}" +
            "</a>" +
        "</li>";
    var button_center = String() +
        "<li class='wym_tools_alignment_center'>" +
            "<a name='AlignCenter' href='#'  title='Align center'" +
                "style='background-image: url(" +
                    wym._options.basePath +
                    "plugins/alignment/icons.png); background-position: 0px -24px'>" +
                "{Center}" +
            "</a>" +
        "</li>";
    var button_right = String() +
        "<li class='wym_tools_alignment_right'>" +
            "<a name='AlignRight' href='#'  title='Align right'" +
                "style='background-image: url(" +
                    wym._options.basePath +
                    "plugins/alignment/icons.png); background-position: 0px -48px'>" +
                "{right}" +
            "</a>" +
        "</li>";
    var button_justify = String() +
        "<li class='wym_tools_alignment_justify'>" +
            "<a name='AlignJustify' href='#'  title='Align justify'" +
                "style='background-image: url(" +
                    wym._options.basePath +
                    "plugins/alignment/icons.png); background-position: 0px -72px'>" +
                "{justify}" +
            "</a>" +
        "</li>";


	var html = button_left + button_center + button_right + button_justify;
    //add the button to the tools box
    $box.find(wym._options.toolsSelector + wym._options.toolsListSelector)
        .append(html);

    $box.find('li.wym_tools_alignment_left a').click(function() {
		var container = wym.container();
		$(container).removeClass('align_left align_right align_justify align_center');
		$(container).addClass('align_left');
		return false;
	});
    $box.find('li.wym_tools_alignment_center a').click(function() {
		var container = wym.container();
		$(container).removeClass('align_left align_right align_justify align_center');
		$(container).addClass('align_center');
		return false;
	});
    $box.find('li.wym_tools_alignment_right a').click(function() {
		var container = wym.container();
		$(container).removeClass('align_left align_right align_justify align_center');
		$(container).addClass('align_right');
		return false;
	});
    $box.find('li.wym_tools_alignment_justify a').click(function() {
		var container = wym.container();
		$(container).removeClass('align_left align_right align_justify align_center');
		$(container).addClass('align_justify');
		return false;
	});
};
