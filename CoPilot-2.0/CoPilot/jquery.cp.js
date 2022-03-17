// ---------------------------------
// ---------- Plugin Name ----------
// ---------------------------------
// CoPilot application JavaScript plugin, provides all app functionality
// ------------------------

(function ($) {

    function log(message) {
        if (this.showHidden === false)
            console.log("showHidden: " + this.showHidden);
        if (this.debugMode)
            console.log("Log Message: " + message);
    }

    // Default tab settings
    function defaultOptions() {
        return {
            debugMode: true,
            showHidden: true
        };
    }

    this.StoreManager = function(options) {
        this._options = defaultOptions.call(this);
        this.setOptions(options);
        log.call(this, 'StoreManager constructor');
    };

    StoreManager.prototype.setOptions = function (options) {
        _.assign(this._options, options);
        this.debugMode = this._options.debugMode;
        this.showHidden = this._options.showHidden;
        log.call(this, 'StoreManager.prototype.setOptions()');
    };

    StoreManager.prototype.GetProducts = function (element) {
        var filter = element.data("filter");
        var id = element.data("id");
        var url = element.data("url");
        $.post(url, { searchTypeId: filter, searchId: id },
            function (data) {
                $("#productlist").empty();
                $("#productlist").html(data);
            });
    };

    StoreManager.prototype.AddProductToCart = function(element) {
        var id = element.data("id");
        var url = element.data("url");
        var count = $("select[id^='selectQty" + id + "']").val();
        if (typeof count === "undefined") {
            count = 1;
        }
        $.post(url, { id: id, count: count },
            function (data) {
                if (data.CartCount > 0) {
                    var result = "";
                    result += data.CartCount;
                    $("#CartLabel").text("Basket");
                    $("#CartCount").text(result);
                }
            });
    };

    StoreManager.prototype.RemoveProductFromCart = function(element) {
        var id = element.data("id");
        var value = element.data("value");
        var url = element.data("url");
        if (id !== "undefined") {
            $.post(url, { "productId": id },
                function (data) {
                    // Update the page elements
                    if (data.ItemCount === 0) {
                        $("#row-" + data.DeleteId).fadeOut("slow");
                    } else {
                        $("#item-count-" + data.DeleteId).text(data.ItemCount);
                        $("#item-total-" + data.DeleteId).text(currencyFormat(data.ItemCount * $("#item-price-" + data.DeleteId).attr("data-value")));
                    }
                    // price on weight at checkout
                    if (data.HasWeight) {
                        $("#cart-total").text("TBD");
                        $("#orderHasWeight").val("True");
                    } else {
                        $("#cart-total").text(currencyFormat(data.CartTotal));
                        $("#orderHasWeight").val("False");
                    }
                    $("#update-message").text(data.Message);
                    // Update the page elements
                    if (data.CartCount > 0) {
                        var result = "";
                        result += data.CartCount;
                        $("#CartLabel").text("Basket");
                        $("#CartCount").text(result);
                    } else {
                        $("#CartLabel").text("Basket");
                        $("#CartCount").text("Empty");
                    }
                });
        }
    };

    StoreManager.prototype.RemoveProductFromOrder = function (element) {
        var filter = element.data("filter");
        var id = element.data("id");
        var value = element.data("value");
        var url = element.data("url");
        if (id != '') {
            $.post(url, { "orderId": filter, "OrderDetailsId": id },
                function (data) {
                    if (data.ItemCount === 0) {
                        $('#row-' + data.DeleteId).fadeOut('slow');
                    } else {
                        $('#item-count-' + data.DeleteId).text(data.ItemCount);
                    }
                    if (data.HasWeight) {
                        $('#cart-total').text("TBD");
                    } else {
                        $('#cart-total').text(currencyFormat(data.OrderTotal));
                    }
                    $('#update-message').text(data.Message);
                    $('#cart-status').text('Order (' + data.CartCount + ')');
                });
        }
    };

    StoreManager.prototype.UpdateOrder = function(element) {
        var newModel = [];
        $("tr[id^='row']").each(function () {
            var odID = $(this).attr("data-id");
            newModel.push({
                OrderDetailId: odID,
                Quantity: $("#ItemOrderQty" + $(this).attr("data-id")).val()
            });
        });
        var url = element.data("url");
        if (url !== '') {
            $.post(url, { model: newModel },
                function (data) {
                    if (data) {
                        // $('#update-message').text(data.message);
                        window.location.href = "/Order/Complete?id=" + data.id;
                    }
                });
        }
    };

    StoreManager.prototype.UpdateOrderFromBasket = function (element) {
        var id = element.data("id");
        var url = element.data("url");
        if (url !== '') {
            $.post(url, { "orderId": id },
                function (data) {
                    // Update the page elements
                    if (data) {
                        $('#update-message').text(data.Message);
                        window.location.href = "/Order/Details?id=" + id;
                    }
                });
        }
    };

    StoreManager.prototype.ToggleHiddenObjects = function (element) {
        var url = element.data("url");
        var updateCookie = getCookie("UserSettings");
        var valueToReplace = "";
        if (updateCookie.indexOf("ShowHidden=False") > -1) {
            valueToReplace = "ShowHidden=False";
        } else {
            valueToReplace = "ShowHidden=True";
        }
        updateCookie = updateCookie.replace(valueToReplace, "ShowHidden=" + $("#ShowHiddenObjects").is(":checked"));
        setCookie("UserSettings", updateCookie, 30);
        if (url === "/Product/GetProducts") {
            ProductFilter();
        } else {
            window.location.reload();
        }
    };

    StoreManager.prototype.OrderQtyChange = function (element) {
        var odId = element.data("id");
        var itemHasWeight = $("#row-" + odId).attr("data-has-weight");
        if (itemHasWeight === "False") {
            var total = $("#spanPrice" + odId).text() * $("#ItemOrderQty" + odId).val();
            // Update row total price
            $("#spanTotal" + odId).text(currencyFormat(total));
        }
        var orderHasWeight = $("#hasWeight").val();
        if (orderHasWeight === "False") {
            // Update grand total price
            var grandTotal = 0;
            $("tr[id^='row']").each(function () {
                grandTotal += $("#spanPrice" + $(this).attr("data-id")).text() * $("#ItemOrderQty" + $(this).attr("data-id")).val();
            });
            $("#cart-total").text(currencyFormat(grandTotal));
        } else {
            $("#cart-total").text("TBD");
        }
    };

    StoreManager.prototype.GetStory = function (element) {
        var id = $("select[id^='SelectStory']").find(":selected").attr("data-id");
        var url = element.data("url");
        $.post(url, { searchTypeId: 0, storyId: id },
            function (data) {
                $("#story").empty();
                $("#story").html(data);
            });
    };

    StoreManager.prototype.SavePartner = function (element) {
        var partnerId = element.data("id");
        var partnerName = $("input[id^='Name']").val();
        var partnerContainerName = $("input[id^='ContainerName']").val();
        var partnerOwners = $("input[id^='Owners']").val();
        var partnerEmail = $("input[id^='Email']").val();
        var partnerLocation = $("input[id^='Location']").val();
        var partnerShortDescription = $("textarea[id^='ShortDescription']").val();
        var partnerLongDescription = $("textarea[id^='LongDescription']").val();
        var partnerPartnerType = $("select[id^='PartnerType']").val();
        var partnerStatus = $("select[id^='Status']").val();
        // and the rest of your code
        var model = {
            PartnerId: partnerId,
            Name: partnerName,
            ContainerName: partnerContainerName,
            Owners: partnerOwners,
            Email: partnerEmail,
            Location: partnerLocation,
            ShortDescription: partnerShortDescription,
            LongDescription: partnerLongDescription,
            PartnerType: partnerPartnerType,
            Status: partnerStatus
        };
        if (model.PartnerId > 0) {
            $.ajax({
                url: "/Partner/SaveForm",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({ "model": model }),
                traditional: true,
                success: function (data) {
                    $("#update-message").text(data.message);
                    console.log(data.message);
                }
            });
        }
        // start of new save image order
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
            $.ajax({
                url: "/Partner/SaveSettings",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({ "model": values, "partnerId": partnerId }),
                traditional: true,
                success: function (data) {
                    $("#update-message").text(data.message);
                    console.log(data.message);
                }
            });
        }
    };

    StoreManager.prototype.SelectAllPhotos = function (element) {
        var stateSwitch = element.data("value");
        if (stateSwitch !== "") {
            var listItems = $("#photos li");
            listItems.each(function (idx, li) {
                var photo = $(li).children();
                if (stateSwitch === true) {
                    photo.children("input[id^='item_PartnerPhoto']").prop("checked", true);
                    $("#update-message").text("All  photos selected.");
                } else {
                    photo.children("input[id^='item_PartnerPhoto']").prop("checked", false);
                    $("#update-message").text("All  photos cleared.");
                }
            });
        }
    };

    StoreManager.prototype.SaveProduct = function (element) {
        var productId = element.data("id");
        var productCategoryId = $("select[id^='Product_CategoryId']").val();
        var productPartnerId = $("select[id^='Product_PartnerId']").val();
        var productTitle = $("input[id^='Product_Title']").val();
        var productDescription = $("textarea[id^='Product_Description']").val();
        var productUnits = $("input[id^='Product_Units']").val();
        var productPrice = $("input[id^='Product_Price']").val();
        var productNotes = $("textarea[id^='Product_Notes']").val();
        var productHighlighted = $("[id^='Product_Highlighted']").prop("checked");
        var productArtUrl = ""; // $("input[id^='Product_ProductArtUrl']").val();
        var productStatus = $("select[id^='Product_Status']").val();
        console.log("ProductId:" + productId + " CategoryId: " + productCategoryId);
        // and the rest of your code
        var model = {
            ProductId: productId,
            CategoryId: productCategoryId,
            PartnerId: productPartnerId,
            Title: productTitle,
            Description: productDescription,
            Units: productUnits,
            Price: productPrice,
            Notes: productNotes,
            Highlighted: productHighlighted,
            ProductArtUrl: productArtUrl,
            Status: productStatus
        };
        if (model.ProductId > 0) {
            $.ajax({
                url: "/Product/SaveForm",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({ "model": model }),
                traditional: true,
                success: function (data) {
                    $("#update-message").text(data.message);
                    // console.log(data.message);
                }
            });
        }
        // start of new save image order
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
            if (photoChecked === true) {
                values.push({
                    photoId: photoId,
                    PartnerPhoto: photoChecked,
                });
            }
            // console.log("photoid: %d, %d, %s, %s, %s", photoId, photoChecked, photoContainerName, photoFilename, photoUri);
        });
        // console.log(status, JSON.stringify(values));
        $("input[name=imageSortOrder]").val(JSON.stringify(values));
        if (values.length > 0) {
            // Perform the ajax post
            $.ajax({
                url: "/Product/SavePhotoSettings",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({ "model": values, "productId": productId }),
                traditional: true,
                success: function (data) {
                    $("#update-message").text(data.message);
                    // console.log(data.message);
                }
            });
        }
    };

    StoreManager.prototype.AddPhoto = function (element) {
        var partnerId = element.data("id");
        if (partnerId !== "") {
            // go get a blank photo to add
            window.location.href = "/Partner/EditPhoto?photoId=0&partnerId=" + partnerId;
        }
    };

    StoreManager.prototype.CategoryFilter = function () {
        var categoryId = $("select[id^='CategoryFilter']").val();
        if (categoryId !== "") {
            $.post("/Product/GetProducts", { searchTypeId: 0, CategoryId: $("select#CategoryFilter").val(), partnerId: $("select#PartnerFilter").val() },
                function (data) {
                    $("#productList").empty();
                    $("#productList").html(data);
                });
        }
    };

    StoreManager.prototype.PartnerFilter = function () {
        var partnerId = $("select[id^='PartnerFilter']").val();
        if (partnerId !== "") {
            $.post("/Product/GetProducts", { searchTypeId: 1, CategoryId: $("select#CategoryFilter").val(), partnerId: $("select#PartnerFilter").val() },
                function (data) {
                    $("#productList").empty();
                    $("#productList").html(data);
                });
        }
    };

    StoreManager.prototype.ProductFilter = function () {
        $.post("/Product/GetProducts", { searchTypeId: 0, CategoryId: $("select#CategoryFilter").val(), partnerId: $("select#PartnerFilter").val() },
            function (data) {
                $("#productList").empty();
                $("#productList").html(data);
            });
    };

    StoreManager.prototype.HighlightProducts = function () {
        if ($("#HighlightProducts").text() === "Clear All") {
            $("input[id^='Highlighted']").each(function () {
                $(this).prop("checked", false);
            });
            $("#HighlightProducts").html("Select All");
        } else {
            $("input[id^='Highlighted']").each(function () {
                $(this).prop("checked", true);
            });
            $("#HighlightProducts").html("Clear All");
        }
    };

    StoreManager.prototype.ProductStatusActivate = function () {
        if ($("#ProductStatusActivate").text() === "Activate All") {
            $("select[id^='Status']").each(function () {
                $(this).val("Active");
            });
            $("#ProductStatusActivate").html("Inactivate All");
        } else {
            $("select[id^='Status']").each(function () {
                $(this).val("Inactive");
            });
            $("#ProductStatusActivate").html("Activate All");
        }
    };

    StoreManager.prototype.SaveProductSettings = function () {
        var values = [];
        $("input[id^='Highlighted']").each(function () {
            var id = $(this).attr("id").replace("Highlighted-", "");
            var status = $("select[id='Status-" + id + "'] option:selected").text();
            values.push({
                Id: id,
                Status: status,
                Highlighted: $(this).prop("checked")
            });
        });
        if (values.length > 0) {
            $.ajax({
                url: "/Product/SaveSettings",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({ model: values }),
                traditional: true,
                success: function () {
                    console.log("success!!");
                }
            });
        }
    };

    StoreManager.prototype.BuildNewsLetter = function () {
        // Get the id from the link
        var id = $(this).attr("data-id");
        var getUrl = $(this).attr("data-url");
        if (id !== "" && getUrl !== "") {
            jQuery.ajax({
                type: "POST",
                url: getUrl,
                dataType: "html",
                data: { "id": id },
                success: function (data) {
                    if (data) {
                        CKEDITOR.instances.Article.setData(data);
                    }
                },
                error: function (xhr, AJAXOptions, thrownError) {
                    console.log("btnBuildNewsLetter failed to retrieve html");
                },
                complete: function (xhr, status) {
                    console.log("btnBuildNewsLetter retrieved html");
                }
            });
        }
    };

    StoreManager.prototype.BuildUserProfiles = function () {
        $.post("/User/BuildUserProfiles", {},
            function (data) {
                $("#update-message").text(data.Message);
            });
    };

}(jQuery));
