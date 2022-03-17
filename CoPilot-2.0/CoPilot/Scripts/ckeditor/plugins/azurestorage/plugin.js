// Full sample plugin, which does not only register a dialog window but also adds an item to the context menu.
// To open the dialog window, choose "Open dialog" in the context menu.
CKEDITOR.plugins.add( 'azurestorage',
{
    // Register the icons. They must match command names.
    icons: 'azurestorage',

    init: function (editor)
    {
		editor.addCommand( 'azurestorage', new CKEDITOR.dialogCommand( 'azurestorage' ) );

		if ( editor.contextMenu )
		{
			editor.addMenuGroup( 'mygroup', 10 );
			editor.addMenuItem('Add Market Image Dialog',
			{
			    label: 'Add Market Image Dialog',
				command : 'azurestorage',
				group : 'mygroup'
			});
			editor.contextMenu.addListener( function( element )
			{
			    return { 'Add Market Image Dialog': CKEDITOR.TRISTATE_OFF };
			});
		}

		CKEDITOR.dialog.add( 'azurestorage', function( api )
		{
			// CKEDITOR.dialog.definition
			var dialogDefinition =
			{
				title : 'Add Market Image Dialog',
				minWidth : 390,
				minHeight : 130,
				contents : [
					{
						id : 'tab1',
						label : 'Label',
						title : 'Title',
						expand : true,
						padding : 0,
						elements :
						[
                            {
                                type: 'select',
                                id: 'partnerList',
                                size: '4',
                                inputStyle: 'width: auto; height: auto;',
                                items: [],
                                onLoad: function(element) {
                                    this.clear();
                                    var s = this;
                                    $.each(window.ViewBag.PartnerId, function (index, value) {
                                        s.add(value.Text, value.Value);
                                    });
                                },
                                setup: function (element) {
                                },
                                onShow: function () {
                                },
                                onChange: function () {
                                    var selValue = this.getValue();
                                    var dialog = this.getDialog();

                                    dialog.getContentElement('tab1', 'partnertext').setValue('modified Text');

                                    // var imagediv = new CKEDITOR.ui.dialog.html();
                                    var imagediv = dialog.getContentElement('tab1', 'partnerimages');
                                    if (imagediv instanceof CKEDITOR.ui.dialog.uiElement) {
                                        // alert('imagediv instanceof CKEDITOR.ui.dialog.uiElement');
                                    }
                                    if (imagediv instanceof CKEDITOR.ui.dialog.html) {
                                        // alert('imagediv instanceof CKEDITOR.ui.dialog.html');
                                    }
                                    if (typeof (imagediv) === 'undefined') {
                                        // alert('imagediv undefined');
                                    }
                                    var domId = imagediv.domId;
                                    imagediv.getInputElement().setValue('<div id="#imagelist"><p>This is some modified sample HTML content.</p></div>');

                                    /* var document = this.getElement().getDocument();
                                    var element = document.getById(domId);
                                    if (element) {
                                        element.setHtml('<div id="#imagelist"><p>This is some sample HTML content.</p></div>');
                                    } */
                                    // dialog.getContentElement('tab1', 'partnerimages').setValue( 'Sample Text' );
                                    // imagediv.setValue('<div id="#imagelist"><p>This is some modified HTML content.</p></div>');
                                    // '<div id="#imagelist"><p>This is some modified HTML content.</p></div>'
                                    // imagediv.setValue('<div id="#imagelist"><p>This is some modified HTML content.</p></div>');
                                    // dialog.getContentElement('tab1', 'partnerimages').setValue('<div id="#imagelist"><p>This is some modified HTML content.</p></div>');
                                    // dialog.setValueOf('tab1', 'partnerimages', '<div id="#imagelist"><p>This is some modified HTML content.</p></div>');
                                    // console.writeline(imagediv.getValue());
                                    }
                            },
                            {
                                type: 'text',
                                id: 'partnertext',
                                label: 'Partner Text',
                                'default': '',
                                validate: function() {
                                    if ( !this.getValue() ) {
                                        api.openMsgDialog( '', 'Name cannot be empty.' );
                                        return false;
                                    }
                                }
                            },
    						{
							    type: 'html',
							    id: 'partnerimages',
							    html: '<div id="#imagelist"><p>This is some sample HTML content.</p></div>'
							}
					    ],
					}
				],
				buttons : [ CKEDITOR.dialog.okButton, CKEDITOR.dialog.cancelButton ],
				onOk : function() {
					// "this" is now a CKEDITOR.dialog object.
					// Accessing dialog elements:
				    var partnerSelectList = this.getContentElement('tab1', 'partnerList');
					var now = new Date();
				    // Insert the timestamp into the document.
					editor.insertHtml('The current date and time is: <em>' + now.toString() + '-' + partnerSelectList.getValue() + '</em>');
				},
				onCancel : function() {
				},
				onLoad : function () {
				},
			    onShow : function () {
			    }
			};
			return dialogDefinition;
		} );
	}
} );
