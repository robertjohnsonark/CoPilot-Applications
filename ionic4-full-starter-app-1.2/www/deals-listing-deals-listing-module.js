(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deals-listing-deals-listing-module"],{

/***/ "./src/app/deals/listing/deals-listing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/deals/listing/deals-listing.module.ts ***!
  \*******************************************************/
/*! exports provided: DealsListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsListingPageModule", function() { return DealsListingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _deals_listing_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deals-listing.page */ "./src/app/deals/listing/deals-listing.page.ts");
/* harmony import */ var _deals_listing_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deals-listing.resolver */ "./src/app/deals/listing/deals-listing.resolver.ts");
/* harmony import */ var _deals_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../deals.service */ "./src/app/deals/deals.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: _deals_listing_page__WEBPACK_IMPORTED_MODULE_8__["DealsListingPage"],
        resolve: {
            data: _deals_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["DealsListingResolver"]
        }
    }
];
var DealsListingPageModule = /** @class */ (function () {
    function DealsListingPageModule() {
    }
    DealsListingPageModule = __decorate([
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
                _deals_listing_page__WEBPACK_IMPORTED_MODULE_8__["DealsListingPage"]
            ],
            providers: [
                _deals_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["DealsListingResolver"],
                _deals_service__WEBPACK_IMPORTED_MODULE_10__["DealsService"]
            ]
        })
    ], DealsListingPageModule);
    return DealsListingPageModule;
}());



/***/ }),

/***/ "./src/app/deals/listing/deals-listing.page.html":
/*!*******************************************************!*\
  !*** ./src/app/deals/listing/deals-listing.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"app/categories\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Deals Listing</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"deals-listing-content\">\r\n  <ng-container *ngIf=\"listing?.items\">\r\n    <div class=\"listing-item\" *ngFor=\"let item of listing.items\" [ngClass]=\"{'ended': ((item.expirationDate | appTimeDifference) < 0), 'imminent-end': ((item.expirationDate | appTimeDifference) > 0 && (item.expirationDate | appTimeDifference) <= 2), 'ends-soon': ((item.expirationDate | appTimeDifference) > 0 && (item.expirationDate | appTimeDifference) > 2 && (item.expirationDate | appTimeDifference) < 10), 'distant-end': ((item.expirationDate | appTimeDifference) >= 10)}\">\r\n      <ion-row class=\"top-row\">\r\n        <ion-col class=\"logo-col\" size=\"6\">\r\n          <app-aspect-ratio [ratio]=\"{w: 128, h: 32}\">\r\n            <app-image-shell [src]=\"item.logo\" [alt]=\"'deals logo'\" class=\"deal-logo\" animation=\"spinner\"></app-image-shell>\r\n          </app-aspect-ratio>\r\n        </ion-col>\r\n        <ion-col *ngIf=\"((item.expirationDate | appTimeDifference) > 0)\" class=\"call-to-action-col\">\r\n          <ion-button class=\"claim-button\" expand=\"block\" color=\"claim\" [routerLink]=\"['/app/categories/deals/', item.slug]\">\r\n            <span class=\"button-cta\">CLAIM</span>\r\n            <ion-icon slot=\"end\" name=\"ios-arrow-forward\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col *ngIf=\"((item.expirationDate | appTimeDifference) < 0)\" class=\"call-to-action-col\">\r\n          <span class=\"expired-cta\">EXPIRED</span>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"middle-row\">\r\n        <ion-col class=\"info-col\">\r\n          <h4 class=\"item-name\">\r\n            <a class=\"name-anchor\" [routerLink]=\"['/app/categories/deals/', item.slug]\">\r\n              <app-text-shell animation=\"bouncing\" [data]=\"item.name\"></app-text-shell>\r\n            </a>\r\n          </h4>\r\n          <p class=\"item-description\">\r\n            <app-text-shell animation=\"bouncing\" lines=\"3\" [data]=\"item.description\"></app-text-shell>\r\n          </p>\r\n        </ion-col>\r\n        <ion-col size=\"2\">\r\n          <ion-button class=\"bookmark-button\" expand=\"block\" fill=\"clear\" color=\"claim\">\r\n            <ion-icon slot=\"icon-only\" name=\"pricetag\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"bottom-row\">\r\n        <ion-col class=\"code-wrapper\">\r\n          <span class=\"code-cta\">Use this code:</span>\r\n          <span class=\"item-code\" [ngClass]=\"{'expired': ((item.expirationDate | appTimeDifference) < 0)}\">\r\n            <app-text-shell [data]=\"item.code\"></app-text-shell>\r\n          </span>\r\n        </ion-col>\r\n        <ion-col class=\"time-left-wrapper\" size=\"5\" [ngClass]=\"{'countdown-active': ((item.expirationDate | appTimeDifference) > 0 && (item.expirationDate | appTimeDifference) <= 2)}\">\r\n          <span class=\"expiration-cta\">DEAL {{ ((item.expirationDate | appTimeDifference) < 0) ? 'EXPIRED' : 'EXPIRES IN' }}:</span>\r\n          <ng-container *ngIf=\"((item.expirationDate | appTimeDifference) < 0 || (item.expirationDate | appTimeDifference) > 2)\">\r\n            <span class=\"item-time-left\">\r\n              <app-text-shell [data]=\"(item.expirationDate | appTimeAgo)\"></app-text-shell>\r\n            </span>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"((item.expirationDate | appTimeDifference) > 0 && (item.expirationDate | appTimeDifference) <= 2)\">\r\n            <ion-row class=\"countdown-wrapper\">\r\n              <app-countdown-timer class=\"item-countdown\" fill=\"inner-time\" [end]=\"item.expirationDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\r\n            </ion-row>\r\n          </ng-container>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ng-container>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/deals/listing/deals-listing.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/deals/listing/deals-listing.page.ts ***!
  \*****************************************************/
/*! exports provided: DealsListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsListingPage", function() { return DealsListingPage; });
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


var DealsListingPage = /** @class */ (function () {
    function DealsListingPage(route) {
        this.route = route;
    }
    Object.defineProperty(DealsListingPage.prototype, "isShell", {
        get: function () {
            return (this.listing && this.listing.isShell) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    DealsListingPage.prototype.ngOnInit = function () {
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
    ], DealsListingPage.prototype, "isShell", null);
    DealsListingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-deals-listing',
            template: __webpack_require__(/*! ./deals-listing.page.html */ "./src/app/deals/listing/deals-listing.page.html"),
            styles: [__webpack_require__(/*! ./styles/deals-listing.page.scss */ "./src/app/deals/listing/styles/deals-listing.page.scss"), __webpack_require__(/*! ./styles/deals-listing.shell.scss */ "./src/app/deals/listing/styles/deals-listing.shell.scss"), __webpack_require__(/*! ./styles/deals-listing.ios.scss */ "./src/app/deals/listing/styles/deals-listing.ios.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DealsListingPage);
    return DealsListingPage;
}());



/***/ }),

/***/ "./src/app/deals/listing/deals-listing.resolver.ts":
/*!*********************************************************!*\
  !*** ./src/app/deals/listing/deals-listing.resolver.ts ***!
  \*********************************************************/
/*! exports provided: DealsListingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsListingResolver", function() { return DealsListingResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _deals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../deals.service */ "./src/app/deals/deals.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DealsListingResolver = /** @class */ (function () {
    function DealsListingResolver(dealsService) {
        this.dealsService = dealsService;
    }
    DealsListingResolver.prototype.resolve = function () {
        // Get the Shell Provider from the service
        var shellProviderObservable = this.dealsService.getListingDataWithShell();
        // Resolve with Shell Provider
        var observablePromise = new Promise(function (resolve, reject) {
            resolve(shellProviderObservable);
        });
        return observablePromise;
    };
    DealsListingResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_deals_service__WEBPACK_IMPORTED_MODULE_1__["DealsService"]])
    ], DealsListingResolver);
    return DealsListingResolver;
}());



/***/ }),

/***/ "./src/app/deals/listing/styles/deals-listing.ios.scss":
/*!*************************************************************!*\
  !*** ./src/app/deals/listing/styles/deals-listing.ios.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host-context(.plt-mobile.ios) .claim-button {\n  height: 2.2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhbHMvbGlzdGluZy9zdHlsZXMvQzpcXFByb2plY3RzXFxBcHBsaWNhdGlvbnNcXGlvbmljNC1mdWxsLXN0YXJ0ZXItYXBwLTEuMi9zcmNcXGFwcFxcZGVhbHNcXGxpc3RpbmdcXHN0eWxlc1xcZGVhbHMtbGlzdGluZy5pb3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlYWxzL2xpc3Rpbmcvc3R5bGVzL2RlYWxzLWxpc3RpbmcuaW9zLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC1jb250ZXh0KC5wbHQtbW9iaWxlLmlvcykge1xyXG4gIC8vIEN1c3RvbSBwbGF0Zm9ybSBzdHlsZXMgaGVyZVxyXG4gIC5jbGFpbS1idXR0b24ge1xyXG4gICAgaGVpZ2h0OiAyLjJlbTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/deals/listing/styles/deals-listing.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/deals/listing/styles/deals-listing.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n  --page-countdown-fill-shadow-color: rgba(var(--ion-color-darkest-rgb), 0.2);\n  --page-item-shadow-color: rgba(var(--ion-color-dark-rgb), .1);\n  --page-deal-code-height: 30px;\n  --page-countdown-gutter: 3px;\n  --page-expired-color: var(--ion-color-medium-tint);\n  --page-ends-soon-color: #FFAB6B;\n  --page-distant-end-color: #70DF70;\n  --page-deal-color: var(--ion-color-medium);\n  --page-deal-border-color: var(--ion-color-light-shade);\n  --page-color: #70DF70;\n  --ion-color-claim: #70DF70;\n  --ion-color-claim-rgb: 112,223,112;\n  --ion-color-claim-contrast: #FFFFFF;\n  --ion-color-claim-contrast-rgb: 255,255,255;\n  --ion-color-claim-shade: #63C463;\n  --ion-color-claim-tint: #7EE27E; }\n  :host .ion-color-claim {\n    --ion-color-base: var(--ion-color-claim) !important;\n    --ion-color-base-rgb: var(--ion-color-claim-rgb) !important;\n    --ion-color-contrast: var(--ion-color-claim-contrast) !important;\n    --ion-color-contrast-rgb: var(--ion-color-claim-contrast-rgb) !important;\n    --ion-color-shade: var(--ion-color-claim-shade) !important;\n    --ion-color-tint: var(--ion-color-claim-tint) !important; }\n  .deals-listing-content {\n  --background: var(--page-background); }\n  .listing-item {\n  background-color: var(--ion-color-lightest);\n  margin: var(--page-margin);\n  border-radius: var(--app-fair-radius);\n  box-shadow: 1px 1px 4px 1px var(--page-item-shadow-color);\n  border-bottom-style: solid;\n  border-bottom-width: calc((var(--page-margin) / 2) * 3);\n  border-bottom-color: var(--page-deal-border-color); }\n  .listing-item.ended {\n    --page-deal-color: var(--page-expired-color);\n    --page-deal-border-color: var(--page-expired-color);\n    border-bottom-style: none; }\n  .listing-item.imminent-end {\n    --page-deal-color: var(--page-ends-soon-color);\n    --page-deal-border-color: var(--page-distant-end-color); }\n  .listing-item.ends-soon {\n    --page-deal-color: var(--page-ends-soon-color);\n    --page-deal-border-color: var(--page-ends-soon-color);\n    border-bottom-style: none; }\n  .listing-item.distant-end {\n    --page-deal-color: var(--page-distant-end-color);\n    --page-deal-border-color: var(--page-distant-end-color);\n    border-bottom-style: none; }\n  .listing-item .top-row {\n    --ion-grid-column-padding: 0px;\n    border-bottom: 2px dashed rgba(var(--ion-color-dark-rgb), 0.1);\n    padding: calc(var(--page-margin) / 2);\n    justify-content: space-between;\n    align-items: center; }\n  .listing-item .top-row .logo-col {\n      align-self: center; }\n  .listing-item .top-row .call-to-action-col {\n      flex-grow: 0; }\n  .listing-item .top-row .call-to-action-col .expired-cta {\n        color: var(--page-expired-color);\n        font-size: 16px;\n        font-weight: 600;\n        letter-spacing: 0.8px; }\n  .listing-item .top-row .call-to-action-col .claim-button {\n        --box-shadow: none;\n        --border-radius: var(--app-fair-radius);\n        margin: 0px; }\n  .listing-item .top-row .call-to-action-col .claim-button:focus {\n          outline: none; }\n  .listing-item .top-row .call-to-action-col .claim-button .button-cta {\n          display: block;\n          line-height: 18px;\n          font-size: 16px;\n          font-weight: 600; }\n  .listing-item .top-row .call-to-action-col .claim-button ion-icon {\n          font-size: 18px; }\n  .listing-item .middle-row {\n    --ion-grid-column-padding: 0px;\n    padding: calc(var(--page-margin) / 2);\n    padding-bottom: var(--page-margin); }\n  .listing-item .middle-row .info-col {\n      padding-right: calc(var(--page-margin) / 2); }\n  .listing-item .middle-row .item-name {\n      margin: 0px;\n      margin-bottom: calc(var(--page-margin) / 2);\n      color: var(--ion-color-dark-tint);\n      font-size: 16px; }\n  .listing-item .middle-row .item-name .name-anchor {\n        display: block;\n        text-decoration: none; }\n  .listing-item .middle-row .item-description {\n      margin: 0px;\n      color: var(--ion-color-medium-tint);\n      font-size: 14px; }\n  .listing-item .middle-row .bookmark-button {\n      --padding-start: 5px;\n      --padding-end: 5px;\n      margin: 0px;\n      font-size: 16px; }\n  .listing-item .bottom-row {\n    --ion-grid-column-padding: 0px;\n    padding: 0px calc(var(--page-margin) / 2) calc(var(--page-margin) / 2);\n    justify-content: space-between; }\n  .listing-item .bottom-row .code-wrapper {\n      max-width: -webkit-fit-content;\n      max-width: -moz-fit-content;\n      max-width: fit-content; }\n  .listing-item .bottom-row .code-wrapper .code-cta {\n        font-size: 12px;\n        font-weight: 500;\n        margin-bottom: 5px;\n        display: block; }\n  .listing-item .bottom-row .code-wrapper .item-code {\n        height: var(--page-deal-code-height);\n        text-transform: uppercase;\n        padding: calc(var(--page-margin) / 4) calc(var(--page-margin) / 2);\n        border: 2px solid var(--page-color);\n        font-size: 12px;\n        font-weight: 500;\n        line-height: 1;\n        border-radius: calc(var(--page-deal-code-height) / 2);\n        display: flex;\n        align-items: center;\n        justify-content: center; }\n  .listing-item .bottom-row .code-wrapper .item-code.expired {\n          border-color: var(--page-expired-color);\n          color: var(--page-expired-color);\n          opacity: 0.6; }\n  .listing-item .bottom-row .time-left-wrapper {\n      flex-shrink: 0;\n      max-width: -webkit-fit-content;\n      max-width: -moz-fit-content;\n      max-width: fit-content;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      align-items: flex-end; }\n  .listing-item .bottom-row .time-left-wrapper .expiration-cta {\n        font-size: 12px;\n        font-weight: 500;\n        margin-bottom: 5px;\n        display: block;\n        text-transform: uppercase;\n        text-align: end; }\n  .listing-item .bottom-row .time-left-wrapper:not(.countdown-active) .item-time-left {\n        color: var(--page-deal-color);\n        font-size: 14px;\n        font-weight: 500;\n        display: block;\n        text-align: end; }\n  .listing-item .bottom-row .time-left-wrapper.countdown-active {\n        display: block;\n        position: relative; }\n  .listing-item .bottom-row .time-left-wrapper.countdown-active .countdown-wrapper {\n          width: 100%;\n          display: flex;\n          justify-content: flex-end;\n          position: absolute;\n          right: 0px; }\n  .listing-item .bottom-row .time-left-wrapper.countdown-active .countdown-wrapper app-countdown-timer.item-countdown {\n            --countdown-time-margin: 0px;\n            --countdown-time-padding: 0px;\n            --countdown-inner-time-margin: var(--page-countdown-gutter) var(--page-countdown-gutter) 0px;\n            --countdown-inner-time-padding: calc(var(--page-margin) / 2) calc(var(--page-margin) / 4);\n            --countdown-fill-border: none;\n            --countdown-fill-border-radius: var(--app-narrow-radius);\n            --countdown-fill-background: var(--ion-color-lightest);\n            --countdown-fill-shadow: 0px 0px 5px 0px var(--page-countdown-fill-shadow-color);\n            --countdown-value-color: var(--ion-color-darkest);\n            --countdown-unit-color: var(--ion-color-medium-shade);\n            --countdown-time-flex-direction: column;\n            font-weight: 500;\n            font-size: 14px;\n            margin-right: calc(var(--page-countdown-gutter) * -1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhbHMvbGlzdGluZy9zdHlsZXMvQzpcXFByb2plY3RzXFxBcHBsaWNhdGlvbnNcXGlvbmljNC1mdWxsLXN0YXJ0ZXItYXBwLTEuMi9zcmNcXGFwcFxcZGVhbHNcXGxpc3RpbmdcXHN0eWxlc1xcZGVhbHMtbGlzdGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL2RlYWxzL2xpc3Rpbmcvc3R5bGVzL0M6XFxQcm9qZWN0c1xcQXBwbGljYXRpb25zXFxpb25pYzQtZnVsbC1zdGFydGVyLWFwcC0xLjIvc3JjXFx0aGVtZVxcbWl4aW5zXFxpb24tY29sb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHNDQUFjO0VBQ2QsOENBQWtCO0VBRWxCLDJFQUFtQztFQUNuQyw2REFBeUI7RUFDekIsNkJBQXdCO0VBQ3hCLDRCQUF3QjtFQUV4QixrREFBcUI7RUFDckIsK0JBQXVCO0VBQ3ZCLGlDQUF5QjtFQUV6QiwwQ0FBa0I7RUFDbEIsc0RBQXlCO0VBRXpCLHFCQUFhO0VBSVgsMEJBQWtCO0VBQ2xCLGtDQUFzQjtFQUN0QixtQ0FBMkI7RUFDM0IsMkNBQStCO0VBQy9CLGdDQUF3QjtFQUN4QiwrQkFBdUIsRUFBQTtFQXpCM0I7SUNBSSxtREFBaUI7SUFDakIsMkRBQXFCO0lBQ3JCLGdFQUFxQjtJQUNyQix3RUFBeUI7SUFDekIsMERBQWtCO0lBQ2xCLHdEQUFpQixFQUFBO0VEeUJyQjtFQUNFLG9DQUFhLEVBQUE7RUFHZjtFQXFCRSwyQ0FBMkM7RUFDM0MsMEJBQTBCO0VBQzFCLHFDQUFxQztFQUNyQyx5REFBeUQ7RUFDekQsMEJBQTBCO0VBQzFCLHVEQUF1RDtFQUN2RCxrREFBa0QsRUFBQTtFQTNCcEQ7SUFFSSw0Q0FBa0I7SUFDbEIsbURBQXlCO0lBQ3pCLHlCQUF5QixFQUFBO0VBSjdCO0lBT0ksOENBQWtCO0lBQ2xCLHVEQUF5QixFQUFBO0VBUjdCO0lBV0ksOENBQWtCO0lBQ2xCLHFEQUF5QjtJQUN6Qix5QkFBeUIsRUFBQTtFQWI3QjtJQWdCSSxnREFBa0I7SUFDbEIsdURBQXlCO0lBQ3pCLHlCQUF5QixFQUFBO0VBbEI3QjtJQThCSSw4QkFBMEI7SUFFMUIsOERBQTZEO0lBQzdELHFDQUFxQztJQUNyQyw4QkFBOEI7SUFDOUIsbUJBQW1CLEVBQUE7RUFuQ3ZCO01Bc0NNLGtCQUFrQixFQUFBO0VBdEN4QjtNQTBDTSxZQUFZLEVBQUE7RUExQ2xCO1FBNkNRLGdDQUFnQztRQUNoQyxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLHFCQUFxQixFQUFBO0VBaEQ3QjtRQW9EUSxrQkFBYTtRQUNiLHVDQUFnQjtRQUVoQixXQUFXLEVBQUE7RUF2RG5CO1VBMERVLGFBQWEsRUFBQTtFQTFEdkI7VUE4RFUsY0FBYztVQUNkLGlCQUFpQjtVQUNqQixlQUFlO1VBQ2YsZ0JBQWdCLEVBQUE7RUFqRTFCO1VBcUVVLGVBQWUsRUFBQTtFQXJFekI7SUE0RUksOEJBQTBCO0lBRTFCLHFDQUFxQztJQUNyQyxrQ0FBa0MsRUFBQTtFQS9FdEM7TUFrRk0sMkNBQTJDLEVBQUE7RUFsRmpEO01Bc0ZNLFdBQVc7TUFDZCwyQ0FBMkM7TUFDeEMsaUNBQWlDO01BQ2pDLGVBQWUsRUFBQTtFQXpGckI7UUE0RlEsY0FBYztRQUNkLHFCQUFxQixFQUFBO0VBN0Y3QjtNQWtHTSxXQUFXO01BQ1gsbUNBQW1DO01BQ25DLGVBQWUsRUFBQTtFQXBHckI7TUF3R00sb0JBQWdCO01BQ2hCLGtCQUFjO01BRWQsV0FBVztNQUNYLGVBQWUsRUFBQTtFQTVHckI7SUFpSEksOEJBQTBCO0lBRTFCLHNFQUFzRTtJQUN0RSw4QkFBOEIsRUFBQTtFQXBIbEM7TUF1SE0sOEJBQXNCO01BQXRCLDJCQUFzQjtNQUF0QixzQkFBc0IsRUFBQTtFQXZINUI7UUEwSFEsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsY0FBYyxFQUFBO0VBN0h0QjtRQWlJUSxvQ0FBb0M7UUFDcEMseUJBQXlCO1FBQ3pCLGtFQUFrRTtRQUNsRSxtQ0FBbUM7UUFDbkMsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QscURBQXFEO1FBQ3JELGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsdUJBQXVCLEVBQUE7RUEzSS9CO1VBOElVLHVDQUF1QztVQUN2QyxnQ0FBZ0M7VUFDaEMsWUFBWSxFQUFBO0VBaEp0QjtNQXNKTSxjQUFjO01BQ2QsOEJBQXNCO01BQXRCLDJCQUFzQjtNQUF0QixzQkFBc0I7TUFDdEIsYUFBYTtNQUNiLHNCQUFzQjtNQUN0Qiw4QkFBOEI7TUFDOUIscUJBQXFCLEVBQUE7RUEzSjNCO1FBOEpRLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCx5QkFBeUI7UUFDekIsZUFBZSxFQUFBO0VBbkt2QjtRQXdLVSw2QkFBNkI7UUFDN0IsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsZUFBZSxFQUFBO0VBNUt6QjtRQWlMUSxjQUFjO1FBQ2Qsa0JBQWtCLEVBQUE7RUFsTDFCO1VBcUxVLFdBQVc7VUFDWCxhQUFhO1VBQ2IseUJBQXlCO1VBRXpCLGtCQUFrQjtVQUNsQixVQUFVLEVBQUE7RUExTHBCO1lBNkxZLDRCQUF3QjtZQUN4Qiw2QkFBeUI7WUFDekIsNEZBQThCO1lBQzlCLHlGQUErQjtZQUMvQiw2QkFBd0I7WUFDeEIsd0RBQStCO1lBQy9CLHNEQUE0QjtZQUM1QixnRkFBd0I7WUFDeEIsaURBQXdCO1lBQ3hCLHFEQUF1QjtZQUN2Qix1Q0FBZ0M7WUFFaEMsZ0JBQWdCO1lBQ2hCLGVBQWU7WUFDZixxREFBcUQsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlYWxzL2xpc3Rpbmcvc3R5bGVzL2RlYWxzLWxpc3RpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lL21peGlucy9pb24tY29sb3JcIjtcclxuXHJcbi8vIEN1c3RvbSB2YXJpYWJsZXNcclxuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbjpob3N0IHtcclxuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcclxuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xyXG5cclxuICAtLXBhZ2UtY291bnRkb3duLWZpbGwtc2hhZG93LWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrZXN0LXJnYiksIDAuMik7XHJcbiAgLS1wYWdlLWl0ZW0tc2hhZG93LWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIC4xKTtcclxuICAtLXBhZ2UtZGVhbC1jb2RlLWhlaWdodDogMzBweDtcclxuICAtLXBhZ2UtY291bnRkb3duLWd1dHRlcjogM3B4O1xyXG5cclxuICAtLXBhZ2UtZXhwaXJlZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcclxuICAtLXBhZ2UtZW5kcy1zb29uLWNvbG9yOiAjRkZBQjZCO1xyXG4gIC0tcGFnZS1kaXN0YW50LWVuZC1jb2xvcjogIzcwREY3MDtcclxuXHJcbiAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gIC0tcGFnZS1kZWFsLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuXHJcbiAgLS1wYWdlLWNvbG9yOiAjNzBERjcwO1xyXG5cclxuICAvLyBBZGQgY3VzdG9tIGNvbG9ycyB0byB1c2Ugd2l0aCBbY29sb3JdIHByb3BlcnR5XHJcbiAgQGluY2x1ZGUgaW9uLWNvbG9yKCdjbGFpbScpIHtcclxuICAgIC0taW9uLWNvbG9yLWNsYWltOiAjNzBERjcwO1xyXG4gICAgLS1pb24tY29sb3ItY2xhaW0tcmdiOiAxMTIsMjIzLDExMjtcclxuICAgIC0taW9uLWNvbG9yLWNsYWltLWNvbnRyYXN0OiAjRkZGRkZGO1xyXG4gICAgLS1pb24tY29sb3ItY2xhaW0tY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcclxuICAgIC0taW9uLWNvbG9yLWNsYWltLXNoYWRlOiAjNjNDNDYzO1xyXG4gICAgLS1pb24tY29sb3ItY2xhaW0tdGludDogIzdFRTI3RTtcclxuICB9XHJcbn1cclxuXHJcbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG4uZGVhbHMtbGlzdGluZy1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi5saXN0aW5nLWl0ZW0ge1xyXG4gICYuZW5kZWQge1xyXG4gICAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLXBhZ2UtZXhwaXJlZC1jb2xvcik7XHJcbiAgICAtLXBhZ2UtZGVhbC1ib3JkZXItY29sb3I6IHZhcigtLXBhZ2UtZXhwaXJlZC1jb2xvcik7XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xyXG4gIH1cclxuICAmLmltbWluZW50LWVuZCB7XHJcbiAgICAtLXBhZ2UtZGVhbC1jb2xvcjogdmFyKC0tcGFnZS1lbmRzLXNvb24tY29sb3IpO1xyXG4gICAgLS1wYWdlLWRlYWwtYm9yZGVyLWNvbG9yOiB2YXIoLS1wYWdlLWRpc3RhbnQtZW5kLWNvbG9yKTtcclxuICB9XHJcbiAgJi5lbmRzLXNvb24ge1xyXG4gICAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLXBhZ2UtZW5kcy1zb29uLWNvbG9yKTtcclxuICAgIC0tcGFnZS1kZWFsLWJvcmRlci1jb2xvcjogdmFyKC0tcGFnZS1lbmRzLXNvb24tY29sb3IpO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcclxuICB9XHJcbiAgJi5kaXN0YW50LWVuZCB7XHJcbiAgICAtLXBhZ2UtZGVhbC1jb2xvcjogdmFyKC0tcGFnZS1kaXN0YW50LWVuZC1jb2xvcik7XHJcbiAgICAtLXBhZ2UtZGVhbC1ib3JkZXItY29sb3I6IHZhcigtLXBhZ2UtZGlzdGFudC1lbmQtY29sb3IpO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcclxuICB9XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCAxcHggdmFyKC0tcGFnZS1pdGVtLXNoYWRvdy1jb2xvcik7XHJcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgKiAzKTtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1wYWdlLWRlYWwtYm9yZGVyLWNvbG9yKTtcclxuXHJcbiAgLnRvcC1yb3cge1xyXG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xyXG5cclxuICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAuMSk7XHJcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAubG9nby1jb2wge1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhbGwtdG8tYWN0aW9uLWNvbCB7XHJcbiAgICAgIGZsZXgtZ3JvdzogMDtcclxuXHJcbiAgICAgIC5leHBpcmVkLWN0YSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXBhZ2UtZXhwaXJlZC1jb2xvcik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2xhaW0tYnV0dG9uIHtcclxuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xyXG5cclxuICAgICAgICBtYXJnaW46IDBweDtcclxuXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJ1dHRvbi1jdGEge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWlkZGxlLXJvdyB7XHJcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcblxyXG4gICAgLmluZm8tY29sIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbS1uYW1lIHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICAgICAgLm5hbWUtYW5jaG9yIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaXRlbS1kZXNjcmlwdGlvbiB7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ib29rbWFyay1idXR0b24ge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogNXB4O1xyXG5cclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ib3R0b20tcm93IHtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuXHJcbiAgICBwYWRkaW5nOiAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIC5jb2RlLXdyYXBwZXIge1xyXG4gICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xyXG5cclxuICAgICAgLmNvZGUtY3RhIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pdGVtLWNvZGUge1xyXG4gICAgICAgIGhlaWdodDogdmFyKC0tcGFnZS1kZWFsLWNvZGUtaGVpZ2h0KTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCkgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wYWdlLWNvbG9yKTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXBhZ2UtZGVhbC1jb2RlLWhlaWdodCkgLyAyKTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICYuZXhwaXJlZCB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXBhZ2UtZXhwaXJlZC1jb2xvcik7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1leHBpcmVkLWNvbG9yKTtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGltZS1sZWZ0LXdyYXBwZXIge1xyXG4gICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblxyXG4gICAgICAuZXhwaXJhdGlvbi1jdGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLmNvdW50ZG93bi1hY3RpdmUpIHtcclxuICAgICAgICAuaXRlbS10aW1lLWxlZnQge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXBhZ2UtZGVhbC1jb2xvcik7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmNvdW50ZG93bi1hY3RpdmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgLmNvdW50ZG93bi13cmFwcGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAvLyBTZXQgcG9zaXRpb24gYWJzb2x1dGUgc28gdGhhdCB0aGUgcGFyZW50IGRvZW4ndCBjb3VudCB0aGUgaGVpZ2h0IG9mIHRoaXMgZWxlbWVudC5cclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcblxyXG4gICAgICAgICAgYXBwLWNvdW50ZG93bi10aW1lci5pdGVtLWNvdW50ZG93biB7XHJcbiAgICAgICAgICAgIC0tY291bnRkb3duLXRpbWUtbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgIC0tY291bnRkb3duLXRpbWUtcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAtLWNvdW50ZG93bi1pbm5lci10aW1lLW1hcmdpbjogdmFyKC0tcGFnZS1jb3VudGRvd24tZ3V0dGVyKSB2YXIoLS1wYWdlLWNvdW50ZG93bi1ndXR0ZXIpIDBweDtcclxuICAgICAgICAgICAgLS1jb3VudGRvd24taW5uZXItdGltZS1wYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XHJcbiAgICAgICAgICAgIC0tY291bnRkb3duLWZpbGwtYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAtLWNvdW50ZG93bi1maWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcclxuICAgICAgICAgICAgLS1jb3VudGRvd24tZmlsbC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgICAgICAgICAtLWNvdW50ZG93bi1maWxsLXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHZhcigtLXBhZ2UtY291bnRkb3duLWZpbGwtc2hhZG93LWNvbG9yKTtcclxuICAgICAgICAgICAgLS1jb3VudGRvd24tdmFsdWUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcclxuICAgICAgICAgICAgLS1jb3VudGRvd24tdW5pdC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgICAgICAgICAgIC0tY291bnRkb3duLXRpbWUtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtY291bnRkb3duLWd1dHRlcikgKiAtMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBtaXhpbiBpb24tY29sb3IoJGNvbG9yKSB7XHJcbiAgQGNvbnRlbnQ7XHJcblxyXG4gIC5pb24tY29sb3ItI3skY29sb3J9IHtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0pICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfS1yZ2IpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfS1jb250cmFzdCkgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfS1jb250cmFzdC1yZ2IpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfS1zaGFkZSkgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0tdGludCkgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/deals/listing/styles/deals-listing.shell.scss":
/*!***************************************************************!*\
  !*** ./src/app/deals/listing/styles/deals-listing.shell.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --shell-color: #70DF70;\n  --shell-color-rgb: 112,223,112; }\n\napp-image-shell.deal-logo {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .30);\n  --image-shell-spinner-size: 18px; }\n\n.item-name app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 16px; }\n\n.item-description > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px; }\n\n.item-code > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 60px; }\n\n.item-code > app-text-shell.text-loaded {\n    min-width: 0px; }\n\n.item-time-left > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  min-width: 60px; }\n\n.item-time-left > app-text-shell.text-loaded {\n    min-width: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhbHMvbGlzdGluZy9zdHlsZXMvQzpcXFByb2plY3RzXFxBcHBsaWNhdGlvbnNcXGlvbmljNC1mdWxsLXN0YXJ0ZXItYXBwLTEuMi9zcmNcXGFwcFxcZGVhbHNcXGxpc3RpbmdcXHN0eWxlc1xcZGVhbHMtbGlzdGluZy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQWM7RUFDZCw4QkFBa0IsRUFBQTs7QUFVcEI7RUFDRSxtRUFBaUM7RUFDakMsOERBQTRCO0VBQzVCLGdDQUEyQixFQUFBOztBQUc3QjtFQUNFLDBEQUF3QjtFQUN4Qiw4QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSwwREFBd0I7RUFDeEIsOEJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsMERBQXdCO0VBQ3hCLDhCQUF5QjtFQUN6QixlQUFlLEVBQUE7O0FBSGpCO0lBTUksY0FBYyxFQUFBOztBQUlsQjtFQUNFLDBEQUF3QjtFQUN4Qiw4QkFBeUI7RUFDekIsZUFBZSxFQUFBOztBQUhqQjtJQU1JLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlYWxzL2xpc3Rpbmcvc3R5bGVzL2RlYWxzLWxpc3Rpbmcuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcclxuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbjpob3N0IHtcclxuICAtLXNoZWxsLWNvbG9yOiAjNzBERjcwO1xyXG4gIC0tc2hlbGwtY29sb3ItcmdiOiAxMTIsMjIzLDExMjtcclxufVxyXG5cclxuLy8gWW91IGNhbiBhbHNvIGFwcGx5IHNoZWVsIHN0eWxlcyB0byB0aGUgZW50aXJlIHBhZ2VcclxuOmhvc3QoLmlzLXNoZWxsKSB7XHJcbiAgLy8gaW9uLWNvbnRlbnQge1xyXG4gIC8vICAgb3BhY2l0eTogMC44O1xyXG4gIC8vIH1cclxufVxyXG5cclxuYXBwLWltYWdlLXNoZWxsLmRlYWwtbG9nbyB7XHJcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcclxuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcclxuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZTogMThweDtcclxufVxyXG5cclxuLml0ZW0tbmFtZSAgYXBwLXRleHQtc2hlbGwge1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zMCk7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4uaXRlbS1kZXNjcmlwdGlvbiA+IGFwcC10ZXh0LXNoZWxsIHtcclxuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcclxufVxyXG5cclxuLml0ZW0tY29kZSA+IGFwcC10ZXh0LXNoZWxsIHtcclxuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcclxuICBtaW4td2lkdGg6IDYwcHg7XHJcblxyXG4gICYudGV4dC1sb2FkZWQge1xyXG4gICAgbWluLXdpZHRoOiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaXRlbS10aW1lLWxlZnQgPiBhcHAtdGV4dC1zaGVsbCB7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcclxuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgbWluLXdpZHRoOiA2MHB4O1xyXG5cclxuICAmLnRleHQtbG9hZGVkIHtcclxuICAgIG1pbi13aWR0aDogMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ })

}]);
//# sourceMappingURL=deals-listing-deals-listing-module.js.map