(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["real-state-details-real-state-details-module"],{

/***/ "./src/app/real-state/details/real-state-details.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/real-state/details/real-state-details.module.ts ***!
  \*****************************************************************/
/*! exports provided: RealStateDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealStateDetailsPageModule", function() { return RealStateDetailsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _real_state_details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./real-state-details.page */ "./src/app/real-state/details/real-state-details.page.ts");
/* harmony import */ var _real_state_details_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./real-state-details.resolver */ "./src/app/real-state/details/real-state-details.resolver.ts");
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
        component: _real_state_details_page__WEBPACK_IMPORTED_MODULE_7__["RealStateDetailsPage"],
        resolve: {
            data: _real_state_details_resolver__WEBPACK_IMPORTED_MODULE_8__["RealStateDetailsResolver"]
        }
    }
];
var RealStateDetailsPageModule = /** @class */ (function () {
    function RealStateDetailsPageModule() {
    }
    RealStateDetailsPageModule = __decorate([
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
                _real_state_details_page__WEBPACK_IMPORTED_MODULE_7__["RealStateDetailsPage"]
            ],
            providers: [
                _real_state_details_resolver__WEBPACK_IMPORTED_MODULE_8__["RealStateDetailsResolver"],
                _real_state_service__WEBPACK_IMPORTED_MODULE_9__["RealStateService"]
            ]
        })
    ], RealStateDetailsPageModule);
    return RealStateDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/real-state/details/real-state-details.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/real-state/details/real-state-details.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"app/categories/real-state\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Real State Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"real-state-details-content\">\r\n  <ion-row class=\"image-row\">\r\n    <ion-col size=\"12\">\r\n      <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"details-picture\" [src]=\"details.picture\">\r\n        <app-aspect-ratio [ratio]=\"{w:64, h:40}\">\r\n          <ion-icon class=\"bookmark-icon\" name=\"heart\"></ion-icon>\r\n        </app-aspect-ratio>\r\n      </app-image-shell>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"description-row\">\r\n    <ion-col size=\"12\">\r\n      <h4 class=\"details-price\">\r\n        <span class=\"price-icon\">$</span>\r\n        <app-text-shell [data]=\"details.price\"></app-text-shell>\r\n      </h4>\r\n      <p class=\"details-address\">\r\n        <app-text-shell animation=\"bouncing\" [data]=\"details.location?.address\"></app-text-shell>\r\n      </p>\r\n      <p class=\"details-address\">\r\n        <app-text-shell animation=\"bouncing\" [data]=\"details.location?.city\"></app-text-shell>\r\n      </p>\r\n    </ion-col>\r\n    <ion-col size=\"12\">\r\n      <p class=\"details-description\">\r\n        <app-text-shell animation=\"bouncing\" lines=\"5\" [data]=\"details.description\"></app-text-shell>\r\n      </p>\r\n    </ion-col>\r\n  </ion-row>\r\n  <div class=\"accommodations-wrapper\">\r\n    <h3 class=\"detail-title\">About the space</h3>\r\n    <ion-row class=\"accommodation-row\">\r\n      <ion-col class=\"icon-wrapper\">\r\n        <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-state/guests.svg\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <span class=\"accommodation-name\">Guests</span>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <span class=\"accommodation-value\">\r\n          <app-text-shell [data]=\"details.accommodations?.guests\"></app-text-shell>\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"accommodation-row\">\r\n      <ion-col class=\"icon-wrapper\">\r\n        <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-state/bedrooms.svg\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <span class=\"accommodation-name\">Bedrooms</span>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <span class=\"accommodation-value\">\r\n          <app-text-shell [data]=\"details.accommodations?.bedrooms\"></app-text-shell>\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"accommodation-row\">\r\n      <ion-col class=\"icon-wrapper\">\r\n        <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-state/bathroom.svg\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <span class=\"accommodation-name\">Bathrooms</span>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <span class=\"accommodation-value\">\r\n          <app-text-shell [data]=\"details.accommodations?.bathrooms\"></app-text-shell>\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"accommodation-row\">\r\n      <ion-col class=\"icon-wrapper\">\r\n        <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-state/patio.svg\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <span class=\"accommodation-name\">Patio</span>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <span class=\"accommodation-value\">\r\n          <app-text-shell [data]=\"details.accommodations?.patios\"></app-text-shell>\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <div class=\"location-wrapper\">\r\n    <div class=\"location-header\">\r\n      <h3 class=\"detail-title\">Location</h3>\r\n      <span class=\"location-address\">\r\n        <app-text-shell [data]=\"details.location?.address\"></app-text-shell>\r\n      </span>\r\n    </div>\r\n    <!-- <app-aspect-ratio [ratio]=\"{w: 64, h: 30}\">\r\n      <app-image-shell [src]=\"'https://maps.googleapis.com/maps/api/staticmap?center=' + details.location?.latlng + '&zoom=15&size=640x300&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xd9453a%7C' + details.location?.latlng + '&key=YOUR_KEY_HERE'\">\r\n      </app-image-shell>\r\n    </app-aspect-ratio> -->\r\n    <app-aspect-ratio [ratio]=\"{w:64, h:30}\">\r\n      <app-image-shell class=\"location-image\" animation=\"spinner\" [src]=\"details.location?.mapImage\" [alt]=\"'location map'\"></app-image-shell>\r\n    </app-aspect-ratio>\r\n  </div>\r\n  <div class=\"amenities-wrapper\">\r\n    <h3 class=\"detail-title\">Amenities</h3>\r\n    <ion-row class=\"amenities-tags\">\r\n      <ion-col class=\"tag-wrapper\" *ngFor=\"let amenity of details.amenities\">\r\n        <span class=\"amenity-tag\">\r\n          <app-text-shell [data]=\"amenity.name\"></app-text-shell>\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <div class=\"safety-features-wrapper\">\r\n    <h3 class=\"detail-title\">Safety Features</h3>\r\n    <ul class=\"features-list\">\r\n      <li class=\"feature-item\">\r\n        <app-text-shell [data]=\"'Smoke Detector'\"></app-text-shell>\r\n      </li>\r\n      <li class=\"feature-item\">\r\n        <app-text-shell [data]=\"'Carbon Monoxide Detector'\"></app-text-shell>\r\n      </li>\r\n      <li class=\"feature-item\">\r\n        <app-text-shell [data]=\"'Security Alarm System'\"></app-text-shell>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"availability-wrapper\">\r\n    <h3 class=\"detail-title\">Availability</h3>\r\n    <ion-row class=\"availability-row\">\r\n      <span class=\"availability-description\">\r\n        <app-text-shell [data]=\"'1 month minimum'\"></app-text-shell>\r\n      </span>\r\n      <span class=\"availability-value\">\r\n        <app-text-shell [data]=\"'Available from June'\"></app-text-shell>\r\n      </span>\r\n    </ion-row>\r\n    <ion-button class=\"book-now-btn\" color=\"dark\" expand=\"block\" fill=\"outline\">BOOK NOW</ion-button>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/real-state/details/real-state-details.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/real-state/details/real-state-details.page.ts ***!
  \***************************************************************/
/*! exports provided: RealStateDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealStateDetailsPage", function() { return RealStateDetailsPage; });
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


var RealStateDetailsPage = /** @class */ (function () {
    function RealStateDetailsPage(route) {
        this.route = route;
    }
    Object.defineProperty(RealStateDetailsPage.prototype, "isShell", {
        get: function () {
            return (this.details && this.details.isShell) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    RealStateDetailsPage.prototype.ngOnInit = function () {
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
                                _this.details = pageData;
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
    ], RealStateDetailsPage.prototype, "isShell", null);
    RealStateDetailsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-real-state-details',
            template: __webpack_require__(/*! ./real-state-details.page.html */ "./src/app/real-state/details/real-state-details.page.html"),
            styles: [__webpack_require__(/*! ./styles/real-state-details.page.scss */ "./src/app/real-state/details/styles/real-state-details.page.scss"), __webpack_require__(/*! ./styles/real-state-details.shell.scss */ "./src/app/real-state/details/styles/real-state-details.shell.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], RealStateDetailsPage);
    return RealStateDetailsPage;
}());



/***/ }),

/***/ "./src/app/real-state/details/real-state-details.resolver.ts":
/*!*******************************************************************!*\
  !*** ./src/app/real-state/details/real-state-details.resolver.ts ***!
  \*******************************************************************/
/*! exports provided: RealStateDetailsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealStateDetailsResolver", function() { return RealStateDetailsResolver; });
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


var RealStateDetailsResolver = /** @class */ (function () {
    function RealStateDetailsResolver(realStateService) {
        this.realStateService = realStateService;
    }
    RealStateDetailsResolver.prototype.resolve = function () {
        // Get the Shell Provider from the service
        var shellProviderObservable = this.realStateService.getDetailsDataWithShell();
        // Resolve with Shell Provider
        var observablePromise = new Promise(function (resolve, reject) {
            resolve(shellProviderObservable);
        });
        return observablePromise;
    };
    RealStateDetailsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_real_state_service__WEBPACK_IMPORTED_MODULE_1__["RealStateService"]])
    ], RealStateDetailsResolver);
    return RealStateDetailsResolver;
}());



/***/ }),

/***/ "./src/app/real-state/details/styles/real-state-details.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/real-state/details/styles/real-state-details.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n  --page-amenity-vertical-gutter: 2px;\n  --page-amenity-horizontal-gutter: 4px;\n  --page-color: #d9453a; }\n\n.real-state-details-content {\n  --background: var(--page-background); }\n\n.real-state-details-content .image-row {\n    --ion-grid-column-padding: 0px; }\n\n.real-state-details-content .image-row .bookmark-icon {\n      position: absolute;\n      right: var(--page-margin);\n      top: var(--page-margin);\n      font-size: 32px;\n      color: var(--page-color); }\n\n.real-state-details-content .description-row {\n    --ion-grid-column-padding: 0px;\n    padding: var(--page-margin); }\n\n.real-state-details-content .description-row .details-price {\n      margin: 0px 0px calc(var(--page-margin) / 2);\n      font-size: 18px;\n      font-weight: 600;\n      color: var(--ion-color-dark-tint);\n      display: flex; }\n\n.real-state-details-content .description-row .details-price .price-icon {\n        margin-right: 5px; }\n\n.real-state-details-content .description-row .details-address {\n      margin: 0px;\n      font-size: 14px;\n      color: var(--ion-color-medium-tint); }\n\n.real-state-details-content .description-row .details-address + .details-address {\n        margin-top: 5px; }\n\n.real-state-details-content .description-row .details-description {\n      margin: var(--page-margin) 0px 0px;\n      font-size: 14px;\n      color: var(--ion-color-medium-shade); }\n\n.real-state-details-content .detail-title {\n    font-size: 16px;\n    font-weight: 500;\n    color: var(--ion-color-dark-tint);\n    margin: 0px 0px var(--page-margin); }\n\n.real-state-details-content .accommodations-wrapper {\n    padding: var(--page-margin);\n    padding-top: calc(var(--page-margin) / 2); }\n\n.real-state-details-content .accommodations-wrapper .accommodation-row {\n      --ion-grid-column-padding: 0px;\n      align-items: center; }\n\n.real-state-details-content .accommodations-wrapper .accommodation-row + .accommodation-row {\n        padding-top: calc(var(--page-margin) / 2); }\n\n.real-state-details-content .accommodations-wrapper .accommodation-row .icon-wrapper {\n        display: flex;\n        align-items: center;\n        flex-grow: 0;\n        padding-right: 20px; }\n\n.real-state-details-content .accommodations-wrapper .accommodation-row .accommodation-icon {\n        font-size: 30px;\n        color: var(--ion-color-medium-shade); }\n\n.real-state-details-content .accommodations-wrapper .accommodation-row .accommodation-name {\n        display: block;\n        font-size: 14px;\n        color: var(--ion-color-medium-tint); }\n\n.real-state-details-content .accommodations-wrapper .accommodation-row .accommodation-value {\n        display: block;\n        font-size: 16px;\n        color: var(--ion-color-medium-tint); }\n\n.real-state-details-content .location-wrapper {\n    padding: calc(var(--page-margin) / 2) 0px var(--page-margin); }\n\n.real-state-details-content .location-wrapper .location-header {\n      padding: 0px var(--page-margin) 0px;\n      margin-bottom: calc(var(--page-margin) / 2); }\n\n.real-state-details-content .location-wrapper .detail-title {\n      margin-bottom: 5px; }\n\n.real-state-details-content .location-wrapper .location-address {\n      display: block;\n      font-size: 14px;\n      color: var(--ion-color-medium-tint); }\n\n.real-state-details-content .amenities-wrapper {\n    padding: calc(var(--page-margin) / 2) var(--page-margin) var(--page-margin); }\n\n.real-state-details-content .amenities-wrapper .amenities-tags {\n      --ion-grid-column-padding: 0px;\n      justify-content: center;\n      margin-top: calc(var(--page-amenity-vertical-gutter) * -1); }\n\n.real-state-details-content .amenities-wrapper .amenities-tags .tag-wrapper {\n        padding: var(--page-amenity-vertical-gutter) var(--page-amenity-horizontal-gutter) var(--page-amenity-vertical-gutter) 0px;\n        flex-grow: 0;\n        min-width: -webkit-fit-content;\n        min-width: -moz-fit-content;\n        min-width: fit-content; }\n\n.real-state-details-content .amenities-wrapper .amenities-tags .tag-wrapper:last-child {\n          padding-right: 0px; }\n\n.real-state-details-content .amenities-wrapper .amenities-tags .amenity-tag {\n        display: block;\n        border-radius: var(--app-narrow-radius);\n        border: 1px solid var(--ion-color-light-shade);\n        padding: var(--page-amenity-vertical-gutter) var(--page-amenity-horizontal-gutter);\n        font-size: 14px;\n        color: var(--ion-color-medium-tint); }\n\n.real-state-details-content .safety-features-wrapper {\n    padding: calc(var(--page-margin) / 2) var(--page-margin) var(--page-margin); }\n\n.real-state-details-content .safety-features-wrapper .features-list {\n      list-style: none;\n      margin: 0px;\n      padding: 0px; }\n\n.real-state-details-content .safety-features-wrapper .features-list .feature-item {\n        font-size: 14px;\n        color: var(--ion-color-medium-tint); }\n\n.real-state-details-content .safety-features-wrapper .features-list .feature-item + .feature-item {\n          margin-top: calc(var(--page-margin) / 2); }\n\n.real-state-details-content .availability-wrapper {\n    padding: calc(var(--page-margin) / 2) var(--page-margin) var(--page-margin); }\n\n.real-state-details-content .availability-wrapper .availability-row {\n      --ion-grid-column-padding: 0px;\n      justify-content: space-between;\n      align-items: center; }\n\n.real-state-details-content .availability-wrapper .availability-row .availability-description,\n      .real-state-details-content .availability-wrapper .availability-row .availability-value {\n        font-size: 14px;\n        color: var(--ion-color-medium-tint);\n        display: block;\n        flex: 1;\n        display: flex; }\n\n.real-state-details-content .availability-wrapper .availability-row .availability-description {\n        color: var(--ion-color-medium-tint);\n        justify-content: flex-start; }\n\n.real-state-details-content .availability-wrapper .availability-row .availability-value {\n        color: var(--page-color);\n        justify-content: flex-end; }\n\n.real-state-details-content .availability-wrapper .book-now-btn {\n      margin: var(--page-margin) 0px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhbC1zdGF0ZS9kZXRhaWxzL3N0eWxlcy9DOlxcUHJvamVjdHNcXEFwcGxpY2F0aW9uc1xcaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyY1xcYXBwXFxyZWFsLXN0YXRlXFxkZXRhaWxzXFxzdHlsZXNcXHJlYWwtc3RhdGUtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQ0FBYztFQUNkLDhDQUFrQjtFQUVsQixtQ0FBK0I7RUFDL0IscUNBQWlDO0VBRWpDLHFCQUFhLEVBQUE7O0FBSWY7RUFDRSxvQ0FBYSxFQUFBOztBQURmO0lBSUksOEJBQTBCLEVBQUE7O0FBSjlCO01BT00sa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6Qix1QkFBdUI7TUFDdkIsZUFBZTtNQUNmLHdCQUF3QixFQUFBOztBQVg5QjtJQWdCSSw4QkFBMEI7SUFFMUIsMkJBQTJCLEVBQUE7O0FBbEIvQjtNQXFCTSw0Q0FBNEM7TUFDL0MsZUFBZTtNQUNmLGdCQUFnQjtNQUNiLGlDQUFpQztNQUNqQyxhQUFhLEVBQUE7O0FBekJuQjtRQTRCUSxpQkFBaUIsRUFBQTs7QUE1QnpCO01BaUNNLFdBQVc7TUFDWCxlQUFlO01BQ2YsbUNBQW1DLEVBQUE7O0FBbkN6QztRQXNDUSxlQUFlLEVBQUE7O0FBdEN2QjtNQTJDTSxrQ0FBa0M7TUFDbEMsZUFBZTtNQUNmLG9DQUFvQyxFQUFBOztBQTdDMUM7SUFrREksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsa0NBQWtDLEVBQUE7O0FBckR0QztJQXlESSwyQkFBMkI7SUFDM0IseUNBQXlDLEVBQUE7O0FBMUQ3QztNQTZETSw4QkFBMEI7TUFFMUIsbUJBQW1CLEVBQUE7O0FBL0R6QjtRQWtFUSx5Q0FBeUMsRUFBQTs7QUFsRWpEO1FBc0VRLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLG1CQUFtQixFQUFBOztBQXpFM0I7UUE2RVEsZUFBZTtRQUNmLG9DQUFvQyxFQUFBOztBQTlFNUM7UUFrRlEsY0FBYztRQUNkLGVBQWU7UUFDZixtQ0FBbUMsRUFBQTs7QUFwRjNDO1FBd0ZRLGNBQWM7UUFDZCxlQUFlO1FBQ2YsbUNBQW1DLEVBQUE7O0FBMUYzQztJQWdHSSw0REFBNEQsRUFBQTs7QUFoR2hFO01BbUdNLG1DQUFtQztNQUNuQywyQ0FBMkMsRUFBQTs7QUFwR2pEO01Bd0dNLGtCQUFrQixFQUFBOztBQXhHeEI7TUE0R00sY0FBYztNQUNkLGVBQWU7TUFDZixtQ0FBbUMsRUFBQTs7QUE5R3pDO0lBbUhJLDJFQUEyRSxFQUFBOztBQW5IL0U7TUFzSE0sOEJBQTBCO01BRTFCLHVCQUF1QjtNQUN2QiwwREFBMEQsRUFBQTs7QUF6SGhFO1FBNEhRLDBIQUEwSDtRQUMxSCxZQUFZO1FBQ1osOEJBQXNCO1FBQXRCLDJCQUFzQjtRQUF0QixzQkFBc0IsRUFBQTs7QUE5SDlCO1VBaUlVLGtCQUFrQixFQUFBOztBQWpJNUI7UUFzSVEsY0FBYztRQUNkLHVDQUF1QztRQUN2Qyw4Q0FBOEM7UUFDOUMsa0ZBQWtGO1FBQ2xGLGVBQWU7UUFDZixtQ0FBbUMsRUFBQTs7QUEzSTNDO0lBaUpJLDJFQUEyRSxFQUFBOztBQWpKL0U7TUFvSk0sZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCxZQUFZLEVBQUE7O0FBdEpsQjtRQXlKUSxlQUFlO1FBQ2YsbUNBQW1DLEVBQUE7O0FBMUozQztVQTZKVSx3Q0FBd0MsRUFBQTs7QUE3SmxEO0lBb0tJLDJFQUEyRSxFQUFBOztBQXBLL0U7TUF1S00sOEJBQTBCO01BRTFCLDhCQUE4QjtNQUM5QixtQkFBbUIsRUFBQTs7QUExS3pCOztRQThLUSxlQUFlO1FBQ2YsbUNBQW1DO1FBQ25DLGNBQWM7UUFDZCxPQUFPO1FBQ1AsYUFBYSxFQUFBOztBQWxMckI7UUFzTFEsbUNBQW1DO1FBQ25DLDJCQUEyQixFQUFBOztBQXZMbkM7UUEyTFEsd0JBQXdCO1FBQ3hCLHlCQUF5QixFQUFBOztBQTVMakM7TUFpTU0sa0NBQWtDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWFsLXN0YXRlL2RldGFpbHMvc3R5bGVzL3JlYWwtc3RhdGUtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXHJcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG46aG9zdCB7XHJcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XHJcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcclxuXHJcbiAgLS1wYWdlLWFtZW5pdHktdmVydGljYWwtZ3V0dGVyOiAycHg7XHJcbiAgLS1wYWdlLWFtZW5pdHktaG9yaXpvbnRhbC1ndXR0ZXI6IDRweDtcclxuXHJcbiAgLS1wYWdlLWNvbG9yOiAjZDk0NTNhO1xyXG59XHJcblxyXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuLnJlYWwtc3RhdGUtZGV0YWlscy1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcblxyXG4gIC5pbWFnZS1yb3cge1xyXG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xyXG5cclxuICAgIC5ib29rbWFyay1pY29uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICB0b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZGVzY3JpcHRpb24tcm93IHtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuXHJcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcblxyXG4gICAgLmRldGFpbHMtcHJpY2Uge1xyXG4gICAgICBtYXJnaW46IDBweCAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuXHRcdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAucHJpY2UtaWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGV0YWlscy1hZGRyZXNzIHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XHJcblxyXG4gICAgICAmICsgLmRldGFpbHMtYWRkcmVzcyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRldGFpbHMtZGVzY3JpcHRpb24ge1xyXG4gICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHggMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kZXRhaWwtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcclxuICAgIG1hcmdpbjogMHB4IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgfVxyXG5cclxuICAuYWNjb21tb2RhdGlvbnMtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuXHJcbiAgICAuYWNjb21tb2RhdGlvbi1yb3cge1xyXG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgJiArIC5hY2NvbW1vZGF0aW9uLXJvdyB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pY29uLXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFjY29tbW9kYXRpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFjY29tbW9kYXRpb24tbmFtZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWNjb21tb2RhdGlvbi12YWx1ZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubG9jYXRpb24td3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XHJcblxyXG4gICAgLmxvY2F0aW9uLWhlYWRlciB7XHJcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXRhaWwtdGl0bGUge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvY2F0aW9uLWFkZHJlc3Mge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hbWVuaXRpZXMtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XHJcblxyXG4gICAgLmFtZW5pdGllcy10YWdzIHtcclxuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xyXG5cclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1hbWVuaXR5LXZlcnRpY2FsLWd1dHRlcikgKiAtMSk7XHJcblxyXG4gICAgICAudGFnLXdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcikgdmFyKC0tcGFnZS1hbWVuaXR5LXZlcnRpY2FsLWd1dHRlcikgMHB4O1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMDtcclxuICAgICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xyXG5cclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmFtZW5pdHktdGFnIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLWFtZW5pdHktdmVydGljYWwtZ3V0dGVyKSB2YXIoLS1wYWdlLWFtZW5pdHktaG9yaXpvbnRhbC1ndXR0ZXIpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNhZmV0eS1mZWF0dXJlcy13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuXHJcbiAgICAuZmVhdHVyZXMtbGlzdCB7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgICAuZmVhdHVyZS1pdGVtIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XHJcblxyXG4gICAgICAgICYgKyAuZmVhdHVyZS1pdGVtIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYXZhaWxhYmlsaXR5LXdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG5cclxuICAgIC5hdmFpbGFiaWxpdHktcm93IHtcclxuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xyXG5cclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgLmF2YWlsYWJpbGl0eS1kZXNjcmlwdGlvbixcclxuICAgICAgLmF2YWlsYWJpbGl0eS12YWx1ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmF2YWlsYWJpbGl0eS1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYXZhaWxhYmlsaXR5LXZhbHVlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ib29rLW5vdy1idG4ge1xyXG4gICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHggMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/real-state/details/styles/real-state-details.shell.scss":
/*!*************************************************************************!*\
  !*** ./src/app/real-state/details/styles/real-state-details.shell.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --shell-color: #d9453a;\n  --shell-color-rgb: 217,69,58; }\n\napp-image-shell.details-picture {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25); }\n\n.details-price app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .25);\n  --text-shell-line-height: 18px;\n  max-width: 100px;\n  min-width: 50px; }\n\n.details-price app-text-shell.text-loaded {\n    max-width: inherit; }\n\n.details-address > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n  max-width: 60%; }\n\n.details-address > app-text-shell.text-loaded {\n    max-width: inherit; }\n\n.details-address + .details-address > app-text-shell {\n  max-width: 80%; }\n\n.details-address + .details-address > app-text-shell.text-loaded {\n    max-width: inherit; }\n\n.details-description > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px; }\n\n.accommodation-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  min-width: 30px; }\n\n.accommodation-value > app-text-shell.text-loaded {\n    min-width: 0px; }\n\n.location-address > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 60%; }\n\n.location-address > app-text-shell.text-loaded {\n    max-width: inherit; }\n\napp-image-shell.location-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25); }\n\n.amenity-tag > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 50px; }\n\n.amenity-tag > app-text-shell.text-loaded {\n    min-width: 0px; }\n\n.feature-item > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 40%; }\n\n.feature-item > app-text-shell.text-loaded {\n    max-width: inherit; }\n\n.availability-description > app-text-shell,\n.availability-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  min-width: 80%; }\n\n.availability-description > app-text-shell.text-loaded,\n  .availability-value > app-text-shell.text-loaded {\n    min-width: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhbC1zdGF0ZS9kZXRhaWxzL3N0eWxlcy9DOlxcUHJvamVjdHNcXEFwcGxpY2F0aW9uc1xcaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyY1xcYXBwXFxyZWFsLXN0YXRlXFxkZXRhaWxzXFxzdHlsZXNcXHJlYWwtc3RhdGUtZGV0YWlscy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQWM7RUFDZCw0QkFBa0IsRUFBQTs7QUFVcEI7RUFDRSxtRUFBaUM7RUFDakMsOERBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsMERBQXdCO0VBQ3hCLDhCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUpqQjtJQU9JLGtCQUFrQixFQUFBOztBQUl0QjtFQUVJLDBEQUF3QjtFQUN4Qiw4QkFBeUI7RUFDekIsY0FBYyxFQUFBOztBQUpsQjtJQU9NLGtCQUFrQixFQUFBOztBQVB4QjtFQVlJLGNBQWMsRUFBQTs7QUFabEI7SUFlTSxrQkFBa0IsRUFBQTs7QUFLeEI7RUFDRSwwREFBd0I7RUFDeEIsOEJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsMERBQXdCO0VBQ3hCLDhCQUF5QjtFQUN6QixlQUFlLEVBQUE7O0FBSGpCO0lBTUksY0FBYyxFQUFBOztBQUlsQjtFQUNFLDBEQUF3QjtFQUN4Qiw4QkFBeUI7RUFDekIsY0FBYyxFQUFBOztBQUhoQjtJQU1JLGtCQUFrQixFQUFBOztBQUl0QjtFQUNFLG1FQUFpQztFQUNqQyw4REFBNEIsRUFBQTs7QUFHOUI7RUFDRSwwREFBd0I7RUFDeEIsOEJBQXlCO0VBQ3pCLGVBQWUsRUFBQTs7QUFIakI7SUFNSSxjQUFjLEVBQUE7O0FBSWxCO0VBQ0UsMERBQXdCO0VBQ3hCLDhCQUF5QjtFQUN6QixjQUFjLEVBQUE7O0FBSGhCO0lBTUksa0JBQWtCLEVBQUE7O0FBSXRCOztFQUdJLDBEQUF3QjtFQUN4Qiw4QkFBeUI7RUFDekIsY0FBYyxFQUFBOztBQUxsQjs7SUFRTSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWFsLXN0YXRlL2RldGFpbHMvc3R5bGVzL3JlYWwtc3RhdGUtZGV0YWlscy5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xyXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuOmhvc3Qge1xyXG4gIC0tc2hlbGwtY29sb3I6ICNkOTQ1M2E7XHJcbiAgLS1zaGVsbC1jb2xvci1yZ2I6IDIxNyw2OSw1ODtcclxufVxyXG5cclxuLy8gWW91IGNhbiBhbHNvIGFwcGx5IHNoZWVsIHN0eWxlcyB0byB0aGUgZW50aXJlIHBhZ2VcclxuOmhvc3QoLmlzLXNoZWxsKSB7XHJcbiAgLy8gaW9uLWNvbnRlbnQge1xyXG4gIC8vICAgb3BhY2l0eTogMC44O1xyXG4gIC8vIH1cclxufVxyXG5cclxuYXBwLWltYWdlLXNoZWxsLmRldGFpbHMtcGljdHVyZSB7XHJcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcclxuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcclxufVxyXG5cclxuLmRldGFpbHMtcHJpY2UgYXBwLXRleHQtc2hlbGwge1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIG1heC13aWR0aDogMTAwcHg7XHJcbiAgbWluLXdpZHRoOiA1MHB4O1xyXG5cclxuICAmLnRleHQtbG9hZGVkIHtcclxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuXHJcbi5kZXRhaWxzLWFkZHJlc3Mge1xyXG4gICYgPiBhcHAtdGV4dC1zaGVsbCB7XHJcbiAgICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xyXG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgbWF4LXdpZHRoOiA2MCU7XHJcblxyXG4gICAgJi50ZXh0LWxvYWRlZCB7XHJcbiAgICAgIG1heC13aWR0aDogaW5oZXJpdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgKyAuZGV0YWlscy1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcblxyXG4gICAgJi50ZXh0LWxvYWRlZCB7XHJcbiAgICAgIG1heC13aWR0aDogaW5oZXJpdDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5kZXRhaWxzLWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xyXG59XHJcblxyXG4uYWNjb21tb2RhdGlvbi12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcclxuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcclxuICBtaW4td2lkdGg6IDMwcHg7XHJcblxyXG4gICYudGV4dC1sb2FkZWQge1xyXG4gICAgbWluLXdpZHRoOiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9jYXRpb24tYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsIHtcclxuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcclxuICBtYXgtd2lkdGg6IDYwJTtcclxuXHJcbiAgJi50ZXh0LWxvYWRlZCB7XHJcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XHJcbiAgfVxyXG59XHJcblxyXG5hcHAtaW1hZ2Utc2hlbGwubG9jYXRpb24taW1hZ2Uge1xyXG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XHJcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XHJcbn1cclxuXHJcbi5hbWVuaXR5LXRhZyA+IGFwcC10ZXh0LXNoZWxsIHtcclxuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcclxuICBtaW4td2lkdGg6IDUwcHg7XHJcblxyXG4gICYudGV4dC1sb2FkZWQge1xyXG4gICAgbWluLXdpZHRoOiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZmVhdHVyZS1pdGVtID4gYXBwLXRleHQtc2hlbGwge1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gIG1heC13aWR0aDogNDAlO1xyXG5cclxuICAmLnRleHQtbG9hZGVkIHtcclxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuXHJcbi5hdmFpbGFiaWxpdHktZGVzY3JpcHRpb24sXHJcbi5hdmFpbGFiaWxpdHktdmFsdWUge1xyXG4gICYgPiBhcHAtdGV4dC1zaGVsbCB7XHJcbiAgICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xyXG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgbWluLXdpZHRoOiA4MCU7XHJcblxyXG4gICAgJi50ZXh0LWxvYWRlZCB7XHJcbiAgICAgIG1pbi13aWR0aDogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

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
//# sourceMappingURL=real-state-details-real-state-details-module.js.map