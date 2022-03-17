// 

function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

// Partner/Details
$("#readMore").click(function () {
    $(".read").toggleClass("read-more");
    if ($(this).text() === "Read More") $(this).text("Read Less");
    else $(this).text("Read More");
});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
    //document.cookie = "UserSettings=" + cname + "=" + cvalue + "; " + expires;
};

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
};

function truncateString(input, length) {
    if (input == null) {
        return input;
    }
    else if (input.Length <= length) {
        return input;
    }
    else {
        return input.Substring(0, length);
    }
};

// Partner/EditPhoto

$("#photos").dragsort({
    dragSelector: "div",
    dragBetween: true,
    dragEnd: saveOrder,
    placeHolderTemplate: "<li class='placeHolder'><div></div></li>"
});

function saveOrder() {
    var values = [];
    var listItems = $("#photos li");
    listItems.each(function (idx, li) {
        var photo = $(li).children();
        var photoId = photo.children("input[id^='item_Id']").attr("value");
        var photoChecked = Boolean(photo.children("input[id^='item_PartnerPhoto']").prop("checked"));
        var photoFilename = photo.children("input[id^='item_FileName']").attr("value");
        var photoContainerName = photo.children("input[id^='item_ContainerName']").attr("value");
        var photoUri = photo.children("input[id^='item_Uri']").attr("value");
        var photoDesc = photo.children("input[id^='item_ShortDescription']").attr("value");
        // and the rest of your code
        values.push({
            photoId: photoId,
            PartnerPhoto: photoChecked,
        });
        // console.log("photoid: %d, %d, %s, %s, %s", photoId, photoChecked, photoContainerName, photoFilename, photoUri);
    });
    // console.log(status, JSON.stringify(values));
    $("input[name=imageSortOrder]").val(JSON.stringify(values));
    if (values.length > 0) {
        // Perform the ajax post
        /*
        $.ajax({
            url: '/Partner/SaveSettings',
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({ model: values }),
            traditional: true,
            success: function () {
                console.log('success!!');
            }
        });
        */
    }
};

$("button#btnSyncImage").click(function (evt) {
    // Perform the ajax post
    $.post("/Partner/GetPhotos", { partnerId: $("select#PartnerId").val() },
    function (data) {
        // Successful requests get here
        $("ul#photos").empty();
        $("ul#photos").html(data);
    });
});

// bootstrap confirmation dialog

function ShowConfirmYesNo() {
    AsyncConfirmYesNo(
        "Confirm Delete Photo",
        "Do you really want to delete this photo?",
        ConfirmDialogYes,
        ConfirmDialogNo
    );
}

function ConfirmDialogYes() {
    $("#update-message").html("Photo deleted.");
    // post delete
    var button = $("button[id^='btnDeletePhoto']");
    var partnerId = button.data("val");
    var photoId = button.data("id");
    $.post("/Partner/DeletePhoto", { photoId: photoId },
        function (data) {
            if (data) {
                $.get("/Partner/Edit", { "partnerId": partnerId });
            }
    });
}

function ConfirmDialogNo() {
    $("#update-message").html("Photo not deleted.");
}

function AsyncConfirmYesNo(title, msg, yesFn, noFn) {
    var $confirm = $("#modalConfirmYesNo");
    $confirm.modal('show');
    $("#lblTitleConfirmYesNo").html(title);
    $("#lblMsgConfirmYesNo").html(msg);
    $("#btnYesConfirmYesNo").off('click').click(function () {
        yesFn();
        $confirm.modal("hide");
    });
    $("#btnNoConfirmYesNo").off('click').click(function () {
        noFn();
        $confirm.modal("hide");
    });
}

// Event/Edit

$("button[id^='btnTestNewsLetter']").click(function () {
    sendNewsLetter(1); // send to test list
    $("#update-message").text("Message sent to test users.");
});

$("button[id^='btnSendNewsLetter']").click(function () {
    sendNewsLetter(0); // send to all
    $("#update-message").text("Message sent to all customers.");
});

function sendNewsLetter(testFlag) {
    if (testFlag !== undefined) {
        var results = $.post("/Events/SendNewsLetter", { "testFlag": testFlag });
        results.done(function (data, textStatus, jqXHR) {
            // Successful requests get here
            console.log("done(%s, %s, %s)", data.toString(), textStatus, jqXHR.toString());
        });
        results.fail(function (jqXHR, textStatus, errorThrown) {
            // failed requests get here
            console.log("fail(%s, %s, %s)", jqXHR.toString(), textStatus, errorThrown.toString());
        });
        results.always(function (data, textStatus, jqXHR) {
            // all requests get here
            console.log("always(%s, %s, %s)", data.toString(), textStatus, jqXHR.toString());
        });
    }
}
