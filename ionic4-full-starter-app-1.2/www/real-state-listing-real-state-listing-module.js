(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["real-state-listing-real-state-listing-module"],{

/***/ "./src/app/real-state/listing/real-state-listing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/real-state/listing/real-state-listing.module.ts ***!
  \*****************************************************************/
/*! exports provided: RealStateListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealStateListingPageModule", function() { return RealStateListingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _real_state_listing_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./real-state-listing.page */ "./src/app/real-state/listing/real-state-listing.page.ts");
/* harmony import */ var _real_state_listing_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./real-state-listing.resolver */ "./src/app/real-state/listing/real-state-listing.resolver.ts");
/* harmony import */ var _real_state_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../real-state.service */ "./src/app/real-state/real-state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _real_state_listing_page__WEBPACK_IMPORTED_MODULE_7__["RealStateListingPage"],
        resolve: {
            data: _real_state_listing_resolver__WEBPACK_IMPORTED_MODULE_8__["RealStateListingResolver"]
        }
    }
];
var RealStateListingPageModule = /** @class */ (function () {
    function RealStateListingPageModule() {
    }
    RealStateListingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            declarations: [
                _real_state_listing_page__WEBPACK_IMPORTED_MODULE_7__["RealStateListingPage"]
            ],
            providers: [
                _real_state_listing_resolver__WEBPACK_IMPORTED_MODULE_8__["RealStateListingResolver"],
                _real_state_service__WEBPACK_IMPORTED_MODULE_9__["RealStateService"]
            ]
        })
    ], RealStateListingPageModule);
    return RealStateListingPageModule;
}());



/***/ }),

/***/ "./src/app/real-state/listing/real-state-listing.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/real-state/listing/real-state-listing.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"app/categories\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Real State Listing</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"real-state-listing-content\">\r\n  <div class=\"listing-item\" *ngFor=\"let item of listing.items\">\r\n    <ion-row class=\"image-row\">\r\n      <ion-col size=\"12\">\r\n        <a class=\"image-anchor\" [routerLink]=\"['/app/categories/real-state/', item.slug]\">\r\n          <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"item-picture\" [src]=\"item.picture\">\r\n            <app-aspect-ratio [ratio]=\"{w:365, h:125}\">\r\n            </app-aspect-ratio>\r\n          </app-image-shell>\r\n        </a>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"description-row\">\r\n      <ion-col size=\"12\" class=\"details-col\">\r\n        <ion-row class=\"details-wrapper\">\r\n          <ion-col>\r\n            <h4 class=\"item-price\">\r\n              <span class=\"price-icon\">$</span>\r\n              <app-text-shell [data]=\"item.price\"></app-text-shell>\r\n            </h4>\r\n            <p class=\"item-address\">\r\n              <app-text-shell [data]=\"item.address\"></app-text-shell>\r\n            </p>\r\n          </ion-col>\r\n          <ion-col class=\"bookmark-col\" size=\"2\">\r\n            <ion-icon *ngIf=\"item.liked\" class=\"like-icon\" name=\"heart\"></ion-icon>\r\n            <ion-icon *ngIf=\"!item.liked\" class=\"like-icon\" name=\"heart-empty\"></ion-icon>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col class=\"accommodations-col\" size=\"12\">\r\n        <ion-row class=\"accommodations-wrapper\">\r\n          <ion-col class=\"item-accommodation\">\r\n            <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-state/guests.svg\"></ion-icon>\r\n            <span class=\"accommodation-property\">Guests</span>\r\n            <span class=\"accommodation-value\">\r\n              <app-text-shell [data]=\"item.accommodations?.guests\"></app-text-shell>\r\n            </span>\r\n          </ion-col>\r\n          <ion-col class=\"item-accommodation\">\r\n            <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-state/bedrooms.svg\"></ion-icon>\r\n            <span class=\"accommodation-property\">Bedrooms</span>\r\n            <span class=\"accommodation-value\">\r\n              <app-text-shell [data]=\"item.accommodations?.bedrooms\"></app-text-shell>\r\n            </span>\r\n          </ion-col>\r\n          <ion-col class=\"item-accommodation\">\r\n            <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-state/bathroom.svg\"></ion-icon>\r\n            <span class=\"accommodation-property\">Bathrooms</span>\r\n            <span class=\"accommodation-value\">\r\n              <app-text-shell [data]=\"item.accommodations?.bathrooms\"></app-text-shell>\r\n            </span>\r\n          </ion-col>\r\n          <ion-col class=\"item-accommodation\">\r\n            <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-state/patio.svg\"></ion-icon>\r\n            <span class=\"accommodation-property\">Patios</span>\r\n            <span class=\"accommodation-value\">\r\n              <app-text-shell [data]=\"item.accommodations?.patios\"></app-text-shell>\r\n            </span>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"amenities-col\" *ngIf=\"item.amenities\">\r\n        <h5 class=\"amenities-title\">Amenities</h5>\r\n        <ion-row class=\"amenities-wrapper\">\r\n          <ng-container>\r\n            <ion-col class=\"item-amenity\" size=\"4\" *ngFor=\"let amenity of item.amenities.slice(0, 4); let i = index\">\r\n              <ion-icon *ngIf=\"amenity.icon\" class=\"amenity-icon\" [src]=\"amenity.icon\"></ion-icon>\r\n              <span class=\"amenity-value\">\r\n                <app-text-shell [data]=\"amenity.name\"></app-text-shell>\r\n              </span>\r\n            </ion-col>\r\n            <ion-col class=\"has-more-amenities\" *ngIf=\"i == 3 && item.amenities.length > 4\">\r\n              <span class=\"amenities-count\">+{{ item.amenities.length - 4 }}</span>\r\n            </ion-col>\r\n          </ng-container>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/real-state/listing/real-state-listing.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/real-state/listing/real-state-listing.page.ts ***!
  \***************************************************************/
/*! exports provided: RealStateListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealStateListingPage", function() { return RealStateListingPage; });
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


var RealStateListingPage = /** @class */ (function () {
    function RealStateListingPage(route) {
        this.route = route;
    }
    Object.defineProperty(RealStateListingPage.prototype, "isShell", {
        // You can add a class to know when the shell has finish loading to the entire page or by using [ngClass] in the html
        //    <ion-content [ngClass]="{'is-shell': (listing.isShell)}">
        get: function () {
            return (this.listing && this.listing.isShell) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    RealStateListingPage.prototype.ngOnInit = function () {
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
    ], RealStateListingPage.prototype, "isShell", null);
    RealStateListingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-real-state-listing',
            template: __webpack_require__(/*! ./real-state-listing.page.html */ "./src/app/real-state/listing/real-state-listing.page.html"),
            styles: [__webpack_require__(/*! ./styles/real-state-listing.page.scss */ "./src/app/real-state/listing/styles/real-state-listing.page.scss"), __webpack_require__(/*! ./styles/real-state-listing.shell.scss */ "./src/app/real-state/listing/styles/real-state-listing.shell.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], RealStateListingPage);
    return RealStateListingPage;
}());



/***/ }),

/***/ "./src/app/real-state/listing/real-state-listing.resolver.ts":
/*!*******************************************************************!*\
  !*** ./src/app/real-state/listing/real-state-listing.resolver.ts ***!
  \*******************************************************************/
/*! exports provided: RealStateListingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealStateListingResolver", function() { return RealStateListingResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _real_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../real-state.service */ "./src/app/real-state/real-state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RealStateListingResolver = /** @class */ (function () {
    function RealStateListingResolver(realStateService) {
        this.realStateService = realStateService;
    }
    RealStateListingResolver.prototype.resolve = function () {
        // Get the Shell Provider from the service
        var shellProviderObservable = this.realStateService.getListingDataWithShell();
        // Resolve with Shell Provider
        var observablePromise = new Promise(function (resolve, reject) {
            resolve(shellProviderObservable);
        });
        return observablePromise;
    };
    RealStateListingResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_real_state_service__WEBPACK_IMPORTED_MODULE_1__["RealStateService"]])
    ], RealStateListingResolver);
    return RealStateListingResolver;
}());



/***/ }),

/***/ "./src/app/real-state/listing/styles/real-state-listing.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/real-state/listing/styles/real-state-listing.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background);\n  --page-amenity-vertical-gutter: 6px;\n  --page-amenity-horizontal-gutter: 4px;\n  --page-color: #d9453a; }\n\n.real-state-listing-content {\n  --background: var(--page-background); }\n\n.listing-item .image-row {\n  --ion-grid-column-padding: 0px; }\n\n.listing-item .image-row .image-anchor {\n    display: block; }\n\n.listing-item .description-row {\n  --ion-grid-column-padding: 0px;\n  padding-bottom: var(--page-margin); }\n\n.listing-item .description-row .details-col {\n    padding: calc(var(--page-margin) / 2) var(--page-margin) 0px; }\n\n.listing-item .description-row .details-col .details-wrapper {\n      justify-content: space-between; }\n\n.listing-item .description-row .details-col .details-wrapper .item-price {\n        margin: 0px 0px 5px;\n        font-weight: 500;\n        color: var(--ion-color-dark-tint);\n        display: flex;\n        align-items: center; }\n\n.listing-item .description-row .details-col .details-wrapper .item-price .price-icon {\n          margin-right: 5px; }\n\n.listing-item .description-row .details-col .details-wrapper .item-address {\n        margin: 0px;\n        font-size: 14px;\n        color: var(--ion-color-medium-tint); }\n\n.listing-item .description-row .details-col .details-wrapper .bookmark-col {\n        display: flex;\n        justify-content: flex-end; }\n\n.listing-item .description-row .details-col .details-wrapper .bookmark-col .like-icon {\n          font-size: 32px;\n          color: var(--page-color); }\n\n.listing-item .description-row .accommodations-col {\n    padding: 0px var(--page-margin) var(--page-margin); }\n\n.listing-item .description-row .accommodations-col .accommodations-wrapper {\n      padding-top: calc(var(--page-margin)); }\n\n.listing-item .description-row .accommodations-col .item-accommodation {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      max-width: -webkit-fit-content;\n      max-width: -moz-fit-content;\n      max-width: fit-content; }\n\n.listing-item .description-row .accommodations-col .item-accommodation + .item-accommodation {\n        padding-left: calc((var(--page-margin) / 2) * 3); }\n\n.listing-item .description-row .accommodations-col .item-accommodation .accommodation-property {\n        font-size: 12px;\n        color: var(--ion-color-medium-tint); }\n\n.listing-item .description-row .accommodations-col .item-accommodation .accommodation-value {\n        display: inline-block;\n        font-weight: 400;\n        font-size: 14px;\n        color: var(--ion-color-medium-tint);\n        margin-top: 4px; }\n\n.listing-item .description-row .accommodations-col .item-accommodation .accommodation-name {\n        display: inline-block;\n        font-size: 12px;\n        color: var(--ion-color-medium-tint); }\n\n.listing-item .description-row .accommodations-col .item-accommodation .accommodation-icon {\n        color: var(--ion-color-medium-tint);\n        font-size: 30px; }\n\n.listing-item .description-row .amenities-col {\n    padding: 0px var(--page-margin) calc(var(--page-margin) / 2);\n    background: var(--app-background-shade); }\n\n.listing-item .description-row .amenities-col .amenities-title {\n      margin: var(--page-margin) 0px calc(var(--page-margin) / 2);\n      font-size: 12px;\n      text-transform: uppercase;\n      letter-spacing: 1px;\n      color: var(--ion-color-medium-shade); }\n\n.listing-item .description-row .amenities-col .amenities-wrapper {\n      margin: 0px calc(var(--page-amenity-horizontal-gutter) * -1); }\n\n.listing-item .description-row .amenities-col .amenities-wrapper .item-amenity {\n        padding: var(--page-amenity-vertical-gutter) var(--page-amenity-horizontal-gutter);\n        display: flex;\n        align-items: center;\n        justify-content: center; }\n\n.listing-item .description-row .amenities-col .amenities-wrapper .item-amenity .amenity-icon {\n          color: var(--ion-color-medium-tint);\n          font-size: 30px;\n          flex-shrink: 0; }\n\n.listing-item .description-row .amenities-col .amenities-wrapper .item-amenity .amenity-value {\n          display: block;\n          font-weight: 300;\n          font-size: 12px;\n          color: var(--ion-color-medium-tint);\n          margin-left: calc(var(--page-amenity-horizontal-gutter) * 2);\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhbC1zdGF0ZS9saXN0aW5nL3N0eWxlcy9DOlxcUHJvamVjdHNcXEFwcGxpY2F0aW9uc1xcaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyY1xcYXBwXFxyZWFsLXN0YXRlXFxsaXN0aW5nXFxzdHlsZXNcXHJlYWwtc3RhdGUtbGlzdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQ0FBYztFQUNkLHdDQUFrQjtFQUVsQixtQ0FBK0I7RUFDL0IscUNBQWlDO0VBRWpDLHFCQUFhLEVBQUE7O0FBSWY7RUFDRSxvQ0FBYSxFQUFBOztBQUdmO0VBRUksOEJBQTBCLEVBQUE7O0FBRjlCO0lBS00sY0FBYyxFQUFBOztBQUxwQjtFQVVJLDhCQUEwQjtFQUUxQixrQ0FBa0MsRUFBQTs7QUFadEM7SUFlTSw0REFBNEQsRUFBQTs7QUFmbEU7TUFrQlEsOEJBQThCLEVBQUE7O0FBbEJ0QztRQXFCVSxtQkFBbUI7UUFDdEIsZ0JBQWdCO1FBQ2IsaUNBQWlDO1FBQ2pDLGFBQWE7UUFDYixtQkFBbUIsRUFBQTs7QUF6QjdCO1VBNEJZLGlCQUFpQixFQUFBOztBQTVCN0I7UUFpQ1UsV0FBVztRQUNYLGVBQWU7UUFDZixtQ0FBbUMsRUFBQTs7QUFuQzdDO1FBdUNVLGFBQWE7UUFDYix5QkFBeUIsRUFBQTs7QUF4Q25DO1VBMkNZLGVBQWU7VUFDZix3QkFBd0IsRUFBQTs7QUE1Q3BDO0lBbURNLGtEQUFrRCxFQUFBOztBQW5EeEQ7TUFzRFEscUNBQXFDLEVBQUE7O0FBdEQ3QztNQTBEUSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLG1CQUFtQjtNQUNuQiw4QkFBc0I7TUFBdEIsMkJBQXNCO01BQXRCLHNCQUFzQixFQUFBOztBQTdEOUI7UUFnRVUsZ0RBQWdELEVBQUE7O0FBaEUxRDtRQW9FVSxlQUFlO1FBQ2YsbUNBQW1DLEVBQUE7O0FBckU3QztRQXlFVSxxQkFBcUI7UUFDckIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixtQ0FBbUM7UUFDbkMsZUFBZSxFQUFBOztBQTdFekI7UUFpRlUscUJBQXFCO1FBQ3JCLGVBQWU7UUFDZixtQ0FBbUMsRUFBQTs7QUFuRjdDO1FBdUZVLG1DQUFtQztRQUNuQyxlQUFlLEVBQUE7O0FBeEZ6QjtJQThGTSw0REFBNEQ7SUFDNUQsdUNBQXVDLEVBQUE7O0FBL0Y3QztNQWtHUSwyREFBMkQ7TUFDM0QsZUFBZTtNQUNmLHlCQUF5QjtNQUN6QixtQkFBbUI7TUFDbkIsb0NBQW9DLEVBQUE7O0FBdEc1QztNQTBHUSw0REFBNEQsRUFBQTs7QUExR3BFO1FBNkdVLGtGQUFrRjtRQUNsRixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHVCQUF1QixFQUFBOztBQWhIakM7VUFtSFksbUNBQW1DO1VBQ25DLGVBQWU7VUFDZixjQUFjLEVBQUE7O0FBckgxQjtVQXlIWSxjQUFjO1VBQ2QsZ0JBQWdCO1VBQ2hCLGVBQWU7VUFDZixtQ0FBbUM7VUFDbkMsNERBQTREO1VBQzVELG1CQUFtQjtVQUNuQixnQkFBZ0I7VUFDaEIsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWFsLXN0YXRlL2xpc3Rpbmcvc3R5bGVzL3JlYWwtc3RhdGUtbGlzdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXHJcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG46aG9zdCB7XHJcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XHJcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcclxuXHJcbiAgLS1wYWdlLWFtZW5pdHktdmVydGljYWwtZ3V0dGVyOiA2cHg7XHJcbiAgLS1wYWdlLWFtZW5pdHktaG9yaXpvbnRhbC1ndXR0ZXI6IDRweDtcclxuXHJcbiAgLS1wYWdlLWNvbG9yOiAjZDk0NTNhO1xyXG59XHJcblxyXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuLnJlYWwtc3RhdGUtbGlzdGluZy1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi5saXN0aW5nLWl0ZW0ge1xyXG4gIC5pbWFnZS1yb3cge1xyXG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xyXG5cclxuICAgIC5pbWFnZS1hbmNob3Ige1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbi1yb3cge1xyXG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xyXG5cclxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcblxyXG4gICAgLmRldGFpbHMtY29sIHtcclxuICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xyXG5cclxuICAgICAgLmRldGFpbHMtd3JhcHBlciB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAuaXRlbS1wcmljZSB7XHJcbiAgICAgICAgICBtYXJnaW46IDBweCAwcHggNXB4O1xyXG4gICAgXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgIC5wcmljZS1pY29uIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaXRlbS1hZGRyZXNzIHtcclxuICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYm9va21hcmstY29sIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgICAgIC5saWtlLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYWNjb21tb2RhdGlvbnMtY29sIHtcclxuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XHJcblxyXG4gICAgICAuYWNjb21tb2RhdGlvbnMtd3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLml0ZW0tYWNjb21tb2RhdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuXHJcbiAgICAgICAgJiArIC5pdGVtLWFjY29tbW9kYXRpb24ge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAqIDMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjY29tbW9kYXRpb24tcHJvcGVydHkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWNjb21tb2RhdGlvbi12YWx1ZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWNjb21tb2RhdGlvbi1uYW1lIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjY29tbW9kYXRpb24taWNvbiB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYW1lbml0aWVzLWNvbCB7XHJcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xyXG5cclxuICAgICAgLmFtZW5pdGllcy10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hbWVuaXRpZXMtd3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggY2FsYyh2YXIoLS1wYWdlLWFtZW5pdHktaG9yaXpvbnRhbC1ndXR0ZXIpICogLTEpO1xyXG5cclxuICAgICAgICAuaXRlbS1hbWVuaXR5IHtcclxuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcik7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgIC5hbWVuaXR5LWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYW1lbml0eS12YWx1ZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLWFtZW5pdHktaG9yaXpvbnRhbC1ndXR0ZXIpICogMik7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/real-state/listing/styles/real-state-listing.shell.scss":
/*!*************************************************************************!*\
  !*** ./src/app/real-state/listing/styles/real-state-listing.shell.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --shell-color: #d9453a;\n  --shell-color-rgb: 217,69,58; }\n\napp-image-shell.item-picture {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25); }\n\n.item-price app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .25);\n  min-width: 50px;\n  max-width: 100px; }\n\n.item-price app-text-shell.text-loaded {\n    max-width: inherit; }\n\n.item-address > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n  max-width: 60%; }\n\n.item-address > app-text-shell.text-loaded {\n    max-width: inherit; }\n\n.accommodation-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  min-width: 30px; }\n\n.accommodation-value > app-text-shell.text-loaded {\n    min-width: 0px; }\n\n.amenity-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .05);\n  --text-shell-line-height: 12px;\n  min-width: 50px; }\n\n.amenity-value > app-text-shell.text-loaded {\n    min-width: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhbC1zdGF0ZS9saXN0aW5nL3N0eWxlcy9DOlxcUHJvamVjdHNcXEFwcGxpY2F0aW9uc1xcaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyY1xcYXBwXFxyZWFsLXN0YXRlXFxsaXN0aW5nXFxzdHlsZXNcXHJlYWwtc3RhdGUtbGlzdGluZy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQWM7RUFDZCw0QkFBa0IsRUFBQTs7QUFVcEI7RUFDRSxtRUFBaUM7RUFDakMsOERBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsMERBQXdCO0VBQ3hCLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFIbEI7SUFNSSxrQkFBa0IsRUFBQTs7QUFJdEI7RUFDRSwwREFBd0I7RUFDeEIsOEJBQXlCO0VBQ3pCLGNBQWMsRUFBQTs7QUFIaEI7SUFNSSxrQkFBa0IsRUFBQTs7QUFJdEI7RUFDRSwwREFBd0I7RUFDeEIsOEJBQXlCO0VBQ3pCLGVBQWUsRUFBQTs7QUFIakI7SUFNSSxjQUFjLEVBQUE7O0FBSWxCO0VBQ0UsMERBQXdCO0VBQ3hCLDhCQUF5QjtFQUN6QixlQUFlLEVBQUE7O0FBSGpCO0lBTUksY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVhbC1zdGF0ZS9saXN0aW5nL3N0eWxlcy9yZWFsLXN0YXRlLWxpc3Rpbmcuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcclxuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbjpob3N0IHtcclxuICAtLXNoZWxsLWNvbG9yOiAjZDk0NTNhO1xyXG4gIC0tc2hlbGwtY29sb3ItcmdiOiAyMTcsNjksNTg7XHJcbn1cclxuXHJcbi8vIFlvdSBjYW4gYWxzbyBhcHBseSBzaGVlbCBzdHlsZXMgdG8gdGhlIGVudGlyZSBwYWdlXHJcbjpob3N0KC5pcy1zaGVsbCkge1xyXG4gIC8vIGlvbi1jb250ZW50IHtcclxuICAvLyAgIG9wYWNpdHk6IDAuODtcclxuICAvLyB9XHJcbn1cclxuXHJcbmFwcC1pbWFnZS1zaGVsbC5pdGVtLXBpY3R1cmUge1xyXG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XHJcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XHJcbn1cclxuXHJcbi5pdGVtLXByaWNlIGFwcC10ZXh0LXNoZWxsIHtcclxuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xyXG4gIG1pbi13aWR0aDogNTBweDtcclxuICBtYXgtd2lkdGg6IDEwMHB4O1xyXG5cclxuICAmLnRleHQtbG9hZGVkIHtcclxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuXHJcbi5pdGVtLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbCB7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcclxuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgbWF4LXdpZHRoOiA2MCU7XHJcblxyXG4gICYudGV4dC1sb2FkZWQge1xyXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xyXG4gIH1cclxufVxyXG5cclxuLmFjY29tbW9kYXRpb24tdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcclxuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgbWluLXdpZHRoOiAzMHB4O1xyXG5cclxuICAmLnRleHQtbG9hZGVkIHtcclxuICAgIG1pbi13aWR0aDogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmFtZW5pdHktdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjA1KTtcclxuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgbWluLXdpZHRoOiA1MHB4O1xyXG5cclxuICAmLnRleHQtbG9hZGVkIHtcclxuICAgIG1pbi13aWR0aDogMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/utils/shell-provider.ts":
/*!*****************************************!*\
  !*** ./src/app/utils/shell-provider.ts ***!
  \*****************************************/
/*! exports provided: ShellProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellProvider", function() { return ShellProvider; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



var ShellProvider = /** @class */ (function () {
    function ShellProvider(shellModel, dataObservable) {
        var _this = this;
        // We wait on purpose 2 secs on local environment when fetching from json to simulate the backend roundtrip.
        // However, in production you should set this delay to 0 in the environment.ts file.
        this.networkDelay = (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"] && _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].shell && _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].shell.networkDelay) ? _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].shell.networkDelay : 0;
        // To debug shell styles, change configuration in the environment.ts file
        this.debugMode = (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"] && _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].shell && _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].shell.debug) ? _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].shell.debug : false;
        // tslint:disable-next-line:max-line-length
        var shellClassName = (shellModel && shellModel.constructor && shellModel.constructor.name) ? shellModel.constructor.name : 'No Class Name';
        // tslint:disable-next-line:no-console
        console.time('[' + shellClassName + '] ShellProvider roundtrip');
        // Set the shell model as the initial value
        this._subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](shellModel);
        var delayObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(this.networkDelay)
        // finalize(() => console.log('delayObservable COMPLETED'))
        );
        dataObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])() // Prevent the need to unsubscribe because .first() completes the observable
        // finalize(() => console.log('dataObservable COMPLETED'))
        );
        // Put both delay and data Observables in a forkJoin so they execute in parallel so that
        // the delay caused (on purpose) by the delayObservable doesn't get added to the time the dataObservable takes to complete
        var forkedObservables = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"])(delayObservable, dataObservable)
            .pipe(
        // finalize(() => console.log('forkedObservables COMPLETED'))
        )
            .subscribe(function (_a) {
            var delayValue = _a[0], dataValue = _a[1];
            if (!_this.debugMode) {
                _this._subject.next(dataValue);
                // tslint:disable-next-line:no-console
                console.timeEnd('[' + shellClassName + '] ShellProvider roundtrip');
            }
        });
        this._observable = this._subject.asObservable();
    }
    Object.defineProperty(ShellProvider.prototype, "observable", {
        get: function () {
            return this._observable;
        },
        enumerable: true,
        configurable: true
    });
    return ShellProvider;
}());



/***/ })

}]);
//# sourceMappingURL=real-state-listing-real-state-listing-module.js.map