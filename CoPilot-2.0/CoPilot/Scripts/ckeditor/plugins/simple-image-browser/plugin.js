CKEDITOR.dialog.add("simple-image-browser-dialog", function() {
    return {
        title: "Simple Image Browser",
        minWidth: 800,
        minHeight: 400,
        maxWidth: 800,
        maxHeight: 400,
        contents: [{
            id: "tab-step1",
            label: "Browse for images",
            elements: [{
                type: "html",
                align: "left",
                id: "titleid",
                style: "font-size: 20px; font-weight: bold;",
                html: "Browse for pictures"
            }, {
                type: "html",
                align: "left",
                id: "msg",
                style: "",
                html: '<div id="imageBrowser"></div>'
            }]
        }, {
            id: "tab-step2",
            label: "About this plugin",
            elements: [{
                type: "html",
                align: "left",
                id: "framepreviewtitleid",
                style: "font-size: 20px; font-weight: bold;",
                html: "About this author"
            }, {
                type: "html",
                align: "left",
                id: "descriptionid",
                style: "position:relative;width:800px;",
                html: 'EpicSoftworks released this plugin for free under the MIT licence.<br />You are free to use this for personal, educational or commercial use.<br /><br />Free as in, the freedom to use.<br /><br /><a href="http://epicsoftworks.nl/" target="_blank">Visit my website >></a>'
            }]
        }]
    }
}), CKEDITOR.plugins.add("simple-image-browser", {
    init: function(a) {
        "undefined" == typeof CKEDITOR.config.simpleImageBrowserListType && (CKEDITOR.config.simpleImageBrowserListType = "thumbnails"), a.on("dialogShow", function(a) {
            var b;
            b = a.data, "simple-image-browser-dialog" === b.getName() && $.get(CKEDITOR.config.simpleImageBrowserURL, function(a) {
                var b;
                return console.log(a), b = $.parseJSON(a), a = "", $.each(b, function(b, c) {
                    a = "thumbnails" === CKEDITOR.config.simpleImageBrowserListType ? a + "<div onclick=\"CKEDITOR.tools.simpleimagebrowserinsertpicture('" + c.url + "');\" style=\"position:relative;width:75px;height:75px;margin:5px;background-image:url('" + c.url + "');background-repeat:no-repeat;background-size:125%;background-position:center center;float:left;\"></div>" : "link"
                }), $("#imageBrowser").html(a)
            })
        }), a.addCommand("simple-image-browser-start", new CKEDITOR.dialogCommand("simple-image-browser-dialog")), CKEDITOR.tools.simpleimagebrowserinsertpicture = function(b) {
            var c, d;
            console.log(b), a = CKEDITOR.currentInstance, c = CKEDITOR.dialog.getCurrent(), d = '<img src="' + b + '" data-cke-saved-src="' + b + '" alt="' + b + '" />', a.config.allowedContent = !0, a.insertHtml(d.trim()), c.hide()
        }, a.ui.addButton("Simple Image Browser", {
            label: "Simple Image Browser ",
            command: "simple-image-browser-start",
            icon: this.path + "images/icon.png"
        })
    }
});