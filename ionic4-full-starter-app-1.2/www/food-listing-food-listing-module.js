(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["food-listing-food-listing-module"],{

/***/ "./src/app/food/listing/food-listing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/food/listing/food-listing.module.ts ***!
  \*****************************************************/
/*! exports provided: FoodListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodListingPageModule", function() { return FoodListingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _food_listing_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./food-listing.page */ "./src/app/food/listing/food-listing.page.ts");
/* harmony import */ var _food_listing_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./food-listing.resolver */ "./src/app/food/listing/food-listing.resolver.ts");
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../food.service */ "./src/app/food/food.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: _food_listing_page__WEBPACK_IMPORTED_MODULE_8__["FoodListingPage"],
        resolve: {
            data: _food_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["FoodListingResolver"]
        }
    }
];
var FoodListingPageModule = /** @class */ (function () {
    function FoodListingPageModule() {
    }
    FoodListingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            declarations: [
                _food_listing_page__WEBPACK_IMPORTED_MODULE_8__["FoodListingPage"]
            ],
            providers: [
                _food_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["FoodListingResolver"],
                _food_service__WEBPACK_IMPORTED_MODULE_10__["FoodService"]
            ]
        })
    ], FoodListingPageModule);
    return FoodListingPageModule;
}());



/***/ }),

/***/ "./src/app/food/listing/food-listing.page.html":
/*!*****************************************************!*\
  !*** ./src/app/food/listing/food-listing.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"app/categories\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Food Listing</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"food-listing-content\">\r\n  <ng-container *ngIf=\"listing?.items\">\r\n    <div class=\"listing-item\" *ngFor=\"let item of listing.items\">\r\n      <div class=\"cover-wrapper\">\r\n        <a class=\"cover-anchor\" [routerLink]=\"['/app/categories/food/', item.slug]\">\r\n          <app-image-shell class=\"cover-image add-overlay\" animation=\"spinner\" [mode]=\"'cover'\" [src]=\"item.image\">\r\n            <app-aspect-ratio [ratio]=\"{w:35, h:15}\">\r\n              <div class=\"cover-icon-wrapper\">\r\n                <app-aspect-ratio [ratio]=\"{w: 20, h: 7}\">\r\n                  <app-image-shell class=\"item-icon\" [src]=\"item.icon\"></app-image-shell>\r\n                </app-aspect-ratio>\r\n              </div>\r\n            </app-aspect-ratio>\r\n          </app-image-shell>\r\n        </a>\r\n      </div>\r\n      <ion-row class=\"info-row\">\r\n        <ion-col class=\"description-col\">\r\n          <ion-row class=\"description-wrapper\">\r\n            <h3 class=\"item-name\">\r\n              <a class=\"name-anchor\" [routerLink]=\"['/app/categories/food/', item.slug]\">\r\n                <app-text-shell [data]=\"item.name\"></app-text-shell>\r\n              </a>\r\n            </h3>\r\n            <p class=\"item-address\">\r\n              <app-text-shell [data]=\"item.address\"></app-text-shell>\r\n            </p>\r\n            <ion-row class=\"item-tags\">\r\n              <ion-col class=\"tag-wrapper\" *ngFor=\"let tag of item.tags\">\r\n                <span class=\"item-tag\">\r\n                  <app-text-shell [data]=\"tag\"></app-text-shell>\r\n                </span>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-row>\r\n        </ion-col>\r\n        <ion-col class=\"stats-col\" size=\"2\">\r\n          <span class=\"item-rating\" [attr.ratingBase]=\"item.rating | floor\">\r\n            <app-text-shell [data]=\"item.rating\"></app-text-shell>\r\n          </span>\r\n          <div class=\"item-price-range\">\r\n            <span class=\"price\" *ngFor=\"let price of [].constructor(item.priceRange)\">$</span>\r\n            <span class=\"no-price\" *ngFor=\"let price of [].constructor(5 - (item.priceRange || 1))\">$</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"pictures-row\">\r\n        <ion-col class=\"picture-wrapper\" size=\"2\" *ngFor=\"let picture of item.pictures.slice(0, 5); let i = index\">\r\n          <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\r\n            <app-image-shell class=\"picture-image\" [src]=\"picture\" [alt]=\"'food image'\"></app-image-shell>\r\n          </app-aspect-ratio>\r\n          <a class=\"has-more-pictures\" [routerLink]=\"['/app/categories/food/', item.slug]\" *ngIf=\"i == 4 && item.pictures.length > 5\">\r\n            <span class=\"pictures-count\">{{ item.pictures.length - 5 }}</span>\r\n          </a>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ng-container>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/food/listing/food-listing.page.ts":
/*!***************************************************!*\
  !*** ./src/app/food/listing/food-listing.page.ts ***!
  \***************************************************/
/*! exports provided: FoodListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodListingPage", function() { return FoodListingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FoodListingPage = /** @class */ (function () {
    function FoodListingPage(route) {
        this.route = route;
    }
    Object.defineProperty(FoodListingPage.prototype, "isShell", {
        get: function () {
            return (this.listing && this.listing.isShell) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    FoodListingPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route && this.route.data) {
            // We resolved a promise for the data Observable
            var promiseObservable = this.route.data;
            console.log('Route Resolve Observable => promiseObservable: ', promiseObservable);
            if (promiseObservable) {
                promiseObservable.subscribe(function (promiseValue) {
                    var dataObservable = promiseValue['data'];
                    console.log('Subscribe to promiseObservable => dataObservable: ', dataObservable);
                    if (dataObservable) {
                        dataObservable.subscribe(function (observableValue) {
                            var pageData = observableValue;
                            // tslint:disable-next-line:max-line-length
                            console.log('Subscribe to dataObservable (can emmit multiple values) => PageData (' + ((pageData && pageData.isShell) ? 'SHELL' : 'REAL') + '): ', pageData);
                            // As we are implementing an App Shell architecture, pageData will be firstly an empty shell model,
                            // and the real remote data once it gets fetched
                            if (pageData) {
                                _this.listing = pageData;
                            }
                        });
                    }
                    else {
                        console.warn('No dataObservable coming from Route Resolver promiseObservable');
                    }
                });
            }
            else {
                console.warn('No promiseObservable coming from Route Resolver data');
            }
        }
        else {
            console.warn('No data coming from Route Resolver');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.is-shell'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], FoodListingPage.prototype, "isShell", null);
    FoodListingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food-listing',
            template: __webpack_require__(/*! ./food-listing.page.html */ "./src/app/food/listing/food-listing.page.html"),
            styles: [__webpack_require__(/*! ./styles/food-listing.page.scss */ "./src/app/food/listing/styles/food-listing.page.scss"), __webpack_require__(/*! ./styles/food-listing.shell.scss */ "./src/app/food/listing/styles/food-listing.shell.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], FoodListingPage);
    return FoodListingPage;
}());



/***/ }),

/***/ "./src/app/food/listing/food-listing.resolver.ts":
/*!*******************************************************!*\
  !*** ./src/app/food/listing/food-listing.resolver.ts ***!
  \*******************************************************/
/*! exports provided: FoodListingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodListingResolver", function() { return FoodListingResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../food.service */ "./src/app/food/food.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FoodListingResolver = /** @class */ (function () {
    function FoodListingResolver(foodService) {
        this.foodService = foodService;
    }
    FoodListingResolver.prototype.resolve = function () {
        // Get the Shell Provider from the service
        var shellProviderObservable = this.foodService.getListingDataWithShell();
        // Resolve with Shell Provider
        var observablePromise = new Promise(function (resolve, reject) {
            resolve(shellProviderObservable);
        });
        return observablePromise;
    };
    FoodListingResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_food_service__WEBPACK_IMPORTED_MODULE_1__["FoodService"]])
    ], FoodListingResolver);
    return FoodListingResolver;
}());



/***/ }),

/***/ "./src/app/food/listing/styles/food-listing.page.scss":
/*!************************************************************!*\
  !*** ./src/app/food/listing/styles/food-listing.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-pictures-gutter: calc(var(--page-margin) / 4);\n  --page-tags-gutter: 4px;\n  --page-rating-5-color: #7ce198;\n  --page-rating-4-color: #a8e07c;\n  --page-rating-3-color: #cee07c;\n  --page-rating-2-color: #e0c77c;\n  --page-rating-1-color: #e07c7c;\n  --page-color: #ebbb00;\n  --page-color-rgb: 235,187,0; }\n\n.food-listing-content {\n  --background: var(--page-background);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin); }\n\n.listing-item {\n  border-bottom: 2px solid var(--ion-color-medium-tint);\n  margin-bottom: calc(var(--page-margin) * 2);\n  padding-bottom: var(--page-margin); }\n\n.listing-item:last-child {\n    border-bottom: none;\n    margin-bottom: 0px; }\n\n.listing-item .cover-wrapper {\n    margin-bottom: var(--page-margin); }\n\n.listing-item .cover-wrapper .cover-anchor {\n      display: block; }\n\n.listing-item .cover-wrapper .cover-icon-wrapper {\n      margin: 0px 20%;\n      display: flex;\n      height: 100%;\n      justify-content: center;\n      align-items: center; }\n\n.listing-item .info-row {\n    --ion-grid-columns: 10;\n    --ion-grid-column-padding: 0px;\n    margin: 0px calc(var(--page-pictures-gutter) * -1);\n    padding-bottom: var(--page-margin); }\n\n.listing-item .info-row::before, .listing-item .info-row::after {\n      content: '';\n      flex: 0 0 var(--page-pictures-gutter); }\n\n.listing-item .info-row .description-col .description-wrapper {\n      height: 100%;\n      justify-content: space-between;\n      flex-direction: column; }\n\n.listing-item .info-row .description-col .item-name {\n      margin: 0px;\n      color: var(--ion-color-dark-tint);\n      font-size: 20px; }\n\n.listing-item .info-row .description-col .item-name .name-anchor {\n        display: block;\n        text-decoration: none; }\n\n.listing-item .info-row .description-col .item-address {\n      margin: 0px;\n      margin-top: 5px;\n      color: var(--ion-color-medium-tint);\n      font-size: 12px; }\n\n.listing-item .info-row .description-col .item-tags {\n      margin-top: 5px; }\n\n.listing-item .info-row .description-col .item-tags .tag-wrapper {\n        padding-right: var(--page-tags-gutter);\n        flex-grow: 0;\n        min-width: -webkit-fit-content;\n        min-width: -moz-fit-content;\n        min-width: fit-content; }\n\n.listing-item .info-row .description-col .item-tags .tag-wrapper:last-child {\n          padding-right: 0px; }\n\n.listing-item .info-row .description-col .item-tags .item-tag {\n        display: block;\n        border-radius: var(--app-narrow-radius);\n        border: 1px solid var(--ion-color-light-shade);\n        padding: calc(var(--page-tags-gutter) / 2) var(--page-tags-gutter);\n        font-size: 10px;\n        color: var(--ion-color-medium-tint); }\n\n.listing-item .info-row .stats-col {\n      padding-left: calc(var(--page-margin) / 2); }\n\n.listing-item .info-row .stats-col .item-rating {\n        background-color: rgba(var(--page-color-rgb), 0.35);\n        color: var(--ion-color-lightest);\n        border-radius: var(--app-narrow-radius);\n        padding-top: calc(var(--page-margin) / 3);\n        padding-bottom: calc(var(--page-margin) / 3);\n        padding-left: calc(var(--page-margin) / 2);\n        padding-right: calc(var(--page-margin) / 2);\n        font-size: 12px;\n        font-weight: 600;\n        width: 100%;\n        display: block;\n        text-align: center; }\n\n.listing-item .info-row .stats-col .item-rating[ratingBase=\"1\"] {\n          background-color: var(--page-rating-1-color); }\n\n.listing-item .info-row .stats-col .item-rating[ratingBase=\"2\"] {\n          background-color: var(--page-rating-2-color); }\n\n.listing-item .info-row .stats-col .item-rating[ratingBase=\"3\"] {\n          background-color: var(--page-rating-3-color); }\n\n.listing-item .info-row .stats-col .item-rating[ratingBase=\"4\"] {\n          background-color: var(--page-rating-4-color); }\n\n.listing-item .info-row .stats-col .item-rating[ratingBase=\"5\"] {\n          background-color: var(--page-rating-5-color); }\n\n.listing-item .info-row .stats-col .item-price-range {\n        margin-top: 5px;\n        font-size: 12px;\n        letter-spacing: 1px;\n        font-weight: 500;\n        text-align: center; }\n\n.listing-item .info-row .stats-col .item-price-range .price {\n          color: var(--page-color); }\n\n.listing-item .info-row .stats-col .item-price-range .no-price {\n          color: rgba(var(--ion-color-light-shade-rgb), 0.4); }\n\n.listing-item .pictures-row {\n    --ion-grid-columns: 10;\n    --ion-grid-column-padding: 0px;\n    margin: 0px calc(var(--page-pictures-gutter) * -1); }\n\n.listing-item .pictures-row .picture-wrapper {\n      padding: 0px var(--page-pictures-gutter); }\n\n.listing-item .pictures-row .picture-wrapper .has-more-pictures {\n        position: absolute;\n        top: 0px;\n        bottom: 0px;\n        left: 0px;\n        right: 0px;\n        margin: 0px var(--page-pictures-gutter);\n        background-color: rgba(var(--page-color-rgb), 0.7);\n        border-radius: var(--app-narrow-radius);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        text-decoration: none;\n        z-index: 2; }\n\n.listing-item .pictures-row .picture-wrapper .has-more-pictures .pictures-count {\n          font-size: 22px;\n          color: var(--ion-color-lightest);\n          font-weight: 600; }\n\n.listing-item .pictures-row .picture-wrapper .has-more-pictures .pictures-count::before {\n            content: '+';\n            font-size: 26px;\n            color: var(--ion-color-lightest);\n            font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vZC9saXN0aW5nL3N0eWxlcy9DOlxcUHJvamVjdHNcXEFwcGxpY2F0aW9uc1xcaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyY1xcYXBwXFxmb29kXFxsaXN0aW5nXFxzdHlsZXNcXGZvb2QtbGlzdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQ0FBYztFQUNkLHdDQUFrQjtFQUVsQixvREFBdUI7RUFDdkIsdUJBQW1CO0VBRW5CLDhCQUFzQjtFQUN0Qiw4QkFBc0I7RUFDdEIsOEJBQXNCO0VBQ3RCLDhCQUFzQjtFQUN0Qiw4QkFBc0I7RUFFdEIscUJBQWE7RUFDYiwyQkFBaUIsRUFBQTs7QUFJbkI7RUFDRSxvQ0FBYTtFQUNiLG1DQUFnQjtFQUNoQixpQ0FBYztFQUNkLGlDQUFjO0VBQ2Qsb0NBQWlCLEVBQUE7O0FBR25CO0VBQ0UscURBQXFEO0VBQ3JELDJDQUEyQztFQUMzQyxrQ0FBa0MsRUFBQTs7QUFIcEM7SUFNRSxtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUE7O0FBUHBCO0lBV0ksaUNBQWlDLEVBQUE7O0FBWHJDO01BY00sY0FBYyxFQUFBOztBQWRwQjtNQWtCTSxlQUFlO01BQ2YsYUFBYTtNQUNiLFlBQVk7TUFDWix1QkFBdUI7TUFDdkIsbUJBQW1CLEVBQUE7O0FBdEJ6QjtJQTJCSSxzQkFBbUI7SUFDbkIsOEJBQTBCO0lBRTFCLGtEQUFrRDtJQUNwRCxrQ0FBa0MsRUFBQTs7QUEvQnBDO01Bb0NNLFdBQVc7TUFDWCxxQ0FBcUMsRUFBQTs7QUFyQzNDO01BMENRLFlBQVk7TUFDWiw4QkFBOEI7TUFDOUIsc0JBQXNCLEVBQUE7O0FBNUM5QjtNQWdEUSxXQUFXO01BQ1gsaUNBQWlDO01BQ2pDLGVBQWUsRUFBQTs7QUFsRHZCO1FBcURVLGNBQWM7UUFDZCxxQkFBcUIsRUFBQTs7QUF0RC9CO01BMkRRLFdBQVc7TUFDWCxlQUFlO01BQ2YsbUNBQW1DO01BQ25DLGVBQWUsRUFBQTs7QUE5RHZCO01Ba0VRLGVBQWUsRUFBQTs7QUFsRXZCO1FBcUVVLHNDQUFzQztRQUN0QyxZQUFZO1FBQ1osOEJBQXNCO1FBQXRCLDJCQUFzQjtRQUF0QixzQkFBc0IsRUFBQTs7QUF2RWhDO1VBMEVZLGtCQUFrQixFQUFBOztBQTFFOUI7UUErRVUsY0FBYztRQUNkLHVDQUF1QztRQUM1Qyw4Q0FBOEM7UUFDOUMsa0VBQWtFO1FBQ2xFLGVBQWU7UUFDZixtQ0FBbUMsRUFBQTs7QUFwRnhDO01BMEZNLDBDQUEwQyxFQUFBOztBQTFGaEQ7UUE4RlEsbURBQWtEO1FBQ3RELGdDQUFnQztRQUNoQyx1Q0FBdUM7UUFDdkMseUNBQXlDO1FBQ3pDLDRDQUE0QztRQUM1QywwQ0FBMEM7UUFDMUMsMkNBQTJDO1FBQzFDLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLGNBQWM7UUFDZCxrQkFBa0IsRUFBQTs7QUF6R3ZCO1VBNEdLLDRDQUE0QyxFQUFBOztBQTVHakQ7VUErR0ssNENBQTRDLEVBQUE7O0FBL0dqRDtVQWtISyw0Q0FBNEMsRUFBQTs7QUFsSGpEO1VBcUhLLDRDQUE0QyxFQUFBOztBQXJIakQ7VUF3SEssNENBQTRDLEVBQUE7O0FBeEhqRDtRQTZIUSxlQUFlO1FBQ2YsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsa0JBQWtCLEVBQUE7O0FBakkxQjtVQW9JVSx3QkFBd0IsRUFBQTs7QUFwSWxDO1VBd0lVLGtEQUFrRCxFQUFBOztBQXhJNUQ7SUErSUksc0JBQW1CO0lBQ25CLDhCQUEwQjtJQUUxQixrREFBa0QsRUFBQTs7QUFsSnREO01BcUpNLHdDQUF3QyxFQUFBOztBQXJKOUM7UUF3Skksa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixXQUFXO1FBQ1gsU0FBUztRQUNULFVBQVU7UUFFTix1Q0FBdUM7UUFDM0Msa0RBQWtEO1FBQzlDLHVDQUF1QztRQUMzQyxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUNuQixxQkFBcUI7UUFDckIsVUFBVSxFQUFBOztBQXJLbEI7VUF3S0ssZUFBZTtVQUNmLGdDQUFnQztVQUNoQyxnQkFBZ0IsRUFBQTs7QUExS3JCO1lBNktNLFlBQVk7WUFDWixlQUFlO1lBQ2YsZ0NBQWdDO1lBQ2hDLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9vZC9saXN0aW5nL3N0eWxlcy9mb29kLWxpc3RpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xyXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuOmhvc3Qge1xyXG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XHJcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcclxuXHJcbiAgLS1wYWdlLXBpY3R1cmVzLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcclxuICAtLXBhZ2UtdGFncy1ndXR0ZXI6IDRweDtcclxuXHJcbiAgLS1wYWdlLXJhdGluZy01LWNvbG9yOiAjN2NlMTk4O1xyXG4gIC0tcGFnZS1yYXRpbmctNC1jb2xvcjogI2E4ZTA3YztcclxuICAtLXBhZ2UtcmF0aW5nLTMtY29sb3I6ICNjZWUwN2M7XHJcbiAgLS1wYWdlLXJhdGluZy0yLWNvbG9yOiAjZTBjNzdjO1xyXG4gIC0tcGFnZS1yYXRpbmctMS1jb2xvcjogI2UwN2M3YztcclxuXHJcbiAgLS1wYWdlLWNvbG9yOiAjZWJiYjAwO1xyXG4gIC0tcGFnZS1jb2xvci1yZ2I6IDIzNSwxODcsMDtcclxufVxyXG5cclxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbi5mb29kLWxpc3RpbmctY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG59XHJcblxyXG4ubGlzdGluZy1pdGVtIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcclxuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xyXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcblxyXG4gICY6bGFzdC1jaGlsZCB7XHJcblx0XHRib3JkZXItYm90dG9tOiBub25lO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMHB4O1xyXG5cdH1cclxuXHJcbiAgLmNvdmVyLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG5cclxuICAgIC5jb3Zlci1hbmNob3Ige1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAuY292ZXItaWNvbi13cmFwcGVyIHtcclxuICAgICAgbWFyZ2luOiAwcHggMjAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmluZm8tcm93IHtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uczogMTA7XHJcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgbWFyZ2luOiAwcHggY2FsYyh2YXIoLS1wYWdlLXBpY3R1cmVzLWd1dHRlcikgKiAtMSk7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG5cclxuICAgIC8vIFRvIGNvbXBlbnNhdGUgbmVnYXRpdmUgc2lkZSBtYXJnaW5zIG9mIC5waWN0dXJlcy1yb3cgKHNpYmxpbmcgb2YgLmluZm8tcm93KVxyXG4gICAgJjo6YmVmb3JlLFxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgZmxleDogMCAwIHZhcigtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24tY29sIHtcclxuICAgICAgLmRlc2NyaXB0aW9uLXdyYXBwZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLml0ZW0tbmFtZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbiAgICAgICAgLm5hbWUtYW5jaG9yIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLml0ZW0tYWRkcmVzcyB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLml0ZW0tdGFncyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG5cclxuICAgICAgICAudGFnLXdyYXBwZXIge1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XHJcbiAgICAgICAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xyXG5cclxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pdGVtLXRhZyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcclxuXHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpIC8gMikgdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDEwcHg7XHJcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3RhdHMtY29sIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG5cclxuICAgICAgLml0ZW0tcmF0aW5nIHtcclxuICAgICAgICAvLyBEZWZhdWx0IGJhY2tncm91bmRcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgLjM1KTtcclxuXHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XHJcblx0XHRcdFx0cGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XHJcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XHJcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG5cdFx0XHRcdHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcblx0XHRcdCAgZm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHQgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdCAgd2lkdGg6IDEwMCU7XHJcblx0XHRcdCAgZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdCAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuXHRcdFx0XHQmW3JhdGluZ0Jhc2U9XCIxXCJdIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTEtY29sb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQmW3JhdGluZ0Jhc2U9XCIyXCJdIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTItY29sb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQmW3JhdGluZ0Jhc2U9XCIzXCJdIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTMtY29sb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQmW3JhdGluZ0Jhc2U9XCI0XCJdIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTQtY29sb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQmW3JhdGluZ0Jhc2U9XCI1XCJdIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTUtY29sb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuICAgICAgLml0ZW0tcHJpY2UtcmFuZ2Uge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLnByaWNlIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uby1wcmljZSB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUtcmdiKSwgLjQwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcblxyXG4gIC5waWN0dXJlcy1yb3cge1xyXG4gICAgLS1pb24tZ3JpZC1jb2x1bW5zOiAxMDtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuXHJcbiAgICBtYXJnaW46IDBweCBjYWxjKHZhcigtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyKSAqIC0xKTtcclxuXHJcbiAgICAucGljdHVyZS13cmFwcGVyIHtcclxuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyKTtcclxuXHJcbiAgICAgIC5oYXMtbW9yZS1waWN0dXJlcyB7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdHRvcDogMHB4O1xyXG5cdFx0XHRcdGJvdHRvbTogMHB4O1xyXG5cdFx0XHRcdGxlZnQ6IDBweDtcclxuXHRcdFx0XHRyaWdodDogMHB4O1xyXG4gICAgICAgIC8vIFRvIGNvbXBlbnNhdGUgdGhlIC5waWN0dXJlLXdyYXBwZXIgcGFkZGluZ1xyXG4gICAgICAgIG1hcmdpbjogMHB4IHZhcigtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyKTtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgLjcwKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG5cclxuXHRcdFx0XHQucGljdHVyZXMtY291bnQge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyMnB4O1xyXG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cclxuXHRcdFx0XHRcdCY6OmJlZm9yZSB7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcrJztcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyNnB4O1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/food/listing/styles/food-listing.shell.scss":
/*!*************************************************************!*\
  !*** ./src/app/food/listing/styles/food-listing.shell.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --shell-color: #ebbb00;\n  --shell-color-rgb: 235,187,0; }\n\napp-image-shell.cover-image {\n  --image-shell-border-radius: var(--app-fair-radius);\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-overlay-background: transparent;\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25); }\n\napp-image-shell.item-icon {\n  --image-shell-loading-background: transparent; }\n\n.item-name app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .25);\n  --text-shell-line-height: 20px;\n  max-width: 30%; }\n\n.item-name app-text-shell.text-loaded {\n    max-width: unset; }\n\n.item-address > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 12px;\n  max-width: 50%; }\n\n.item-address > app-text-shell.text-loaded {\n    max-width: unset; }\n\n.item-tag > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 10px;\n  min-width: 30px; }\n\n.item-tag > app-text-shell.text-loaded {\n    min-width: 0px; }\n\n.item-rating > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 12px; }\n\napp-image-shell.picture-image {\n  --image-shell-border-radius: var(--app-narrow-radius);\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .20); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vZC9saXN0aW5nL3N0eWxlcy9DOlxcUHJvamVjdHNcXEFwcGxpY2F0aW9uc1xcaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyY1xcYXBwXFxmb29kXFxsaXN0aW5nXFxzdHlsZXNcXGZvb2QtbGlzdGluZy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQWM7RUFDZCw0QkFBa0IsRUFBQTs7QUFVcEI7RUFDRSxtREFBNEI7RUFDNUIsbUVBQWlDO0VBQ2pDLDZDQUFpQztFQUNqQyw4REFBNEIsRUFBQTs7QUFHOUI7RUFDRSw2Q0FBaUMsRUFBQTs7QUFHbkM7RUFDRSwwREFBd0I7RUFDeEIsOEJBQXlCO0VBQ3pCLGNBQWMsRUFBQTs7QUFIaEI7SUFNSSxnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDRSwwREFBd0I7RUFDeEIsOEJBQXlCO0VBQ3pCLGNBQWMsRUFBQTs7QUFIaEI7SUFNSSxnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDRSwwREFBd0I7RUFDeEIsOEJBQXlCO0VBQ3pCLGVBQWUsRUFBQTs7QUFIakI7SUFNSSxjQUFjLEVBQUE7O0FBSWxCO0VBQ0UsMERBQXdCO0VBQ3hCLDhCQUF5QixFQUFBOztBQUczQjtFQUNFLHFEQUE0QjtFQUM1QixtRUFBaUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Zvb2QvbGlzdGluZy9zdHlsZXMvZm9vZC1saXN0aW5nLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXHJcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG46aG9zdCB7XHJcbiAgLS1zaGVsbC1jb2xvcjogI2ViYmIwMDtcclxuICAtLXNoZWxsLWNvbG9yLXJnYjogMjM1LDE4NywwO1xyXG59XHJcblxyXG4vLyBZb3UgY2FuIGFsc28gYXBwbHkgc2hlZWwgc3R5bGVzIHRvIHRoZSBlbnRpcmUgcGFnZVxyXG46aG9zdCguaXMtc2hlbGwpIHtcclxuICAvLyBpb24tY29udGVudCB7XHJcbiAgLy8gICBvcGFjaXR5OiAwLjg7XHJcbiAgLy8gfVxyXG59XHJcblxyXG5hcHAtaW1hZ2Utc2hlbGwuY292ZXItaW1hZ2Uge1xyXG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcclxuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xyXG4gIC0taW1hZ2Utc2hlbGwtb3ZlcmxheS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcclxufVxyXG5cclxuYXBwLWltYWdlLXNoZWxsLml0ZW0taWNvbiB7XHJcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaXRlbS1uYW1lIGFwcC10ZXh0LXNoZWxsIHtcclxuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMjBweDtcclxuICBtYXgtd2lkdGg6IDMwJTtcclxuXHJcbiAgJi50ZXh0LWxvYWRlZCB7XHJcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xyXG4gIH1cclxufVxyXG5cclxuLml0ZW0tYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsIHtcclxuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcclxuICBtYXgtd2lkdGg6IDUwJTtcclxuXHJcbiAgJi50ZXh0LWxvYWRlZCB7XHJcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xyXG4gIH1cclxufVxyXG5cclxuLml0ZW0tdGFnID4gYXBwLXRleHQtc2hlbGwge1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gIG1pbi13aWR0aDogMzBweDtcclxuXHJcbiAgJi50ZXh0LWxvYWRlZCB7XHJcbiAgICBtaW4td2lkdGg6IDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5pdGVtLXJhdGluZyA+IGFwcC10ZXh0LXNoZWxsIHtcclxuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcclxufVxyXG5cclxuYXBwLWltYWdlLXNoZWxsLnBpY3R1cmUtaW1hZ2Uge1xyXG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xyXG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XHJcbn1cclxuIl19 */"

/***/ })

}]);
//# sourceMappingURL=food-listing-food-listing-module.js.map