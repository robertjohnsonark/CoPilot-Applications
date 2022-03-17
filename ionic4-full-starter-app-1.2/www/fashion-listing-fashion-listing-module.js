(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fashion-listing-fashion-listing-module"],{

/***/ "./src/app/fashion/listing/fashion-listing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/fashion/listing/fashion-listing.module.ts ***!
  \***********************************************************/
/*! exports provided: FashionListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionListingPageModule", function() { return FashionListingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _fashion_listing_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fashion-listing.page */ "./src/app/fashion/listing/fashion-listing.page.ts");
/* harmony import */ var _fashion_listing_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fashion-listing.resolver */ "./src/app/fashion/listing/fashion-listing.resolver.ts");
/* harmony import */ var _fashion_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../fashion.service */ "./src/app/fashion/fashion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _fashion_listing_page__WEBPACK_IMPORTED_MODULE_7__["FashionListingPage"],
        resolve: {
            data: _fashion_listing_resolver__WEBPACK_IMPORTED_MODULE_8__["FashionListingResolver"]
        }
    }
];
var FashionListingPageModule = /** @class */ (function () {
    function FashionListingPageModule() {
    }
    FashionListingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            declarations: [_fashion_listing_page__WEBPACK_IMPORTED_MODULE_7__["FashionListingPage"]],
            providers: [
                _fashion_listing_resolver__WEBPACK_IMPORTED_MODULE_8__["FashionListingResolver"],
                _fashion_service__WEBPACK_IMPORTED_MODULE_9__["FashionService"]
            ]
        })
    ], FashionListingPageModule);
    return FashionListingPageModule;
}());



/***/ }),

/***/ "./src/app/fashion/listing/fashion-listing.page.html":
/*!***********************************************************!*\
  !*** ./src/app/fashion/listing/fashion-listing.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"app/categories\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Fashion Listing</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"fashion-listing-content\">\r\n  <ng-container *ngIf=\"listing?.items\">\r\n    <ion-row class=\"items-row\">\r\n      <ion-col size=\"6\" class=\"listing-item\" *ngFor=\"let item of listing.items\">\r\n        <div class=\"item-image-wrapper\">\r\n          <a class=\"image-anchor\" [routerLink]=\"['/app/categories/fashion/', item.slug]\">\r\n            <app-aspect-ratio [ratio]=\"{w: 3, h: 4}\">\r\n              <app-image-shell class=\"item-image\" animation=\"spinner\" [src]=\"item.image\" [alt]=\"'product image'\"></app-image-shell>\r\n            </app-aspect-ratio>\r\n          </a>\r\n        </div>\r\n        <ion-row class=\"item-body\">\r\n          <ion-col size=\"12\" class=\"main-info\">\r\n            <h4 class=\"item-name\">\r\n              <a class=\"name-anchor\" [routerLink]=\"['/app/categories/fashion/', item.slug]\">\r\n                <app-text-shell animation=\"gradient\" [data]=\"item.name\"></app-text-shell>\r\n              </a>\r\n            </h4>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-row class=\"secondary-info\">\r\n              <ion-col class=\"price-col\">\r\n                <span class=\"item-sale-price\">\r\n                  <app-text-shell animation=\"gradient\" [data]=\"item.salePrice | currency\"></app-text-shell>\r\n                </span>\r\n              </ion-col>\r\n              <ng-container *ngIf=\"item.price != '0'\">\r\n                <ion-col class=\"separator\">\r\n                </ion-col>\r\n                <ion-col class=\"price-col\">\r\n                  <span class=\"item-original-price\">\r\n                    <app-text-shell animation=\"gradient\" [data]=\"item.price | currency\"></app-text-shell>\r\n                  </span>\r\n                </ion-col>\r\n              </ng-container>\r\n            </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ng-container>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/fashion/listing/fashion-listing.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/fashion/listing/fashion-listing.page.ts ***!
  \*********************************************************/
/*! exports provided: FashionListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionListingPage", function() { return FashionListingPage; });
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


var FashionListingPage = /** @class */ (function () {
    function FashionListingPage(route) {
        this.route = route;
    }
    Object.defineProperty(FashionListingPage.prototype, "isShell", {
        get: function () {
            return (this.listing && this.listing.isShell) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    FashionListingPage.prototype.ngOnInit = function () {
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
    ], FashionListingPage.prototype, "isShell", null);
    FashionListingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fashion-listing',
            template: __webpack_require__(/*! ./fashion-listing.page.html */ "./src/app/fashion/listing/fashion-listing.page.html"),
            styles: [__webpack_require__(/*! ./styles/fashion-listing.page.scss */ "./src/app/fashion/listing/styles/fashion-listing.page.scss"), __webpack_require__(/*! ./styles/fashion-listing.shell.scss */ "./src/app/fashion/listing/styles/fashion-listing.shell.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], FashionListingPage);
    return FashionListingPage;
}());



/***/ }),

/***/ "./src/app/fashion/listing/fashion-listing.resolver.ts":
/*!*************************************************************!*\
  !*** ./src/app/fashion/listing/fashion-listing.resolver.ts ***!
  \*************************************************************/
/*! exports provided: FashionListingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionListingResolver", function() { return FashionListingResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fashion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fashion.service */ "./src/app/fashion/fashion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FashionListingResolver = /** @class */ (function () {
    function FashionListingResolver(fashionService) {
        this.fashionService = fashionService;
    }
    FashionListingResolver.prototype.resolve = function () {
        // Get the Shell Provider from the service
        var shellProviderObservable = this.fashionService.getListingDataWithShell();
        // Resolve with Shell Provider
        var observablePromise = new Promise(function (resolve, reject) {
            resolve(shellProviderObservable);
        });
        return observablePromise;
    };
    FashionListingResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_fashion_service__WEBPACK_IMPORTED_MODULE_1__["FashionService"]])
    ], FashionListingResolver);
    return FashionListingResolver;
}());



/***/ }),

/***/ "./src/app/fashion/listing/styles/fashion-listing.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/fashion/listing/styles/fashion-listing.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-items-gutter: calc(var(--page-margin) / 2);\n  --page-color: #cb328f; }\n\n.fashion-listing-content {\n  --background: var(--page-background);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin); }\n\n.items-row {\n  --ion-grid-column-padding: 0; }\n\n.items-row .listing-item {\n    margin-bottom: calc(var(--page-margin) * 2); }\n\n.items-row .listing-item:nth-child(odd) {\n      padding-right: var(--page-items-gutter); }\n\n.items-row .listing-item:nth-child(even) {\n      padding-left: var(--page-items-gutter); }\n\n.items-row .listing-item .item-image-wrapper {\n      border: 1px solid var(--ion-color-light-shade); }\n\n.items-row .listing-item .item-image-wrapper .image-anchor {\n        display: block; }\n\n.items-row .listing-item .item-body {\n      --ion-grid-column-padding: 0px;\n      padding: 5px 5px 0px;\n      text-align: center; }\n\n.items-row .listing-item .item-body .main-info {\n        margin-bottom: calc(var(--page-margin) / 2); }\n\n.items-row .listing-item .item-body .main-info .item-name {\n          margin: 0px;\n          font-size: 14px;\n          font-weight: 400;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          overflow: hidden; }\n\n.items-row .listing-item .item-body .main-info .item-name .name-anchor {\n            color: var(--ion-color-primary);\n            display: block;\n            text-decoration: none; }\n\n.items-row .listing-item .item-body .secondary-info {\n        align-items: center; }\n\n.items-row .listing-item .item-body .secondary-info .price-col:first-child {\n          padding-right: calc(var(--page-margin) / 2);\n          text-align: right; }\n\n.items-row .listing-item .item-body .secondary-info .price-col:first-child:last-child {\n            text-align: center; }\n\n.items-row .listing-item .item-body .secondary-info .price-col:last-child {\n          padding-left: calc(var(--page-margin) / 2);\n          text-align: left; }\n\n.items-row .listing-item .item-body .secondary-info .separator {\n          max-width: 0px;\n          border-right: solid 2px var(--ion-color-light-shade);\n          align-self: stretch; }\n\n.items-row .listing-item .item-body .secondary-info .item-sale-price {\n          display: block;\n          font-weight: 400;\n          color: var(--page-color);\n          font-size: 16px; }\n\n.items-row .listing-item .item-body .secondary-info .item-original-price {\n          display: block;\n          text-decoration: line-through;\n          color: var(--ion-color-medium-shade);\n          font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFzaGlvbi9saXN0aW5nL3N0eWxlcy9DOlxcUHJvamVjdHNcXEFwcGxpY2F0aW9uc1xcaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyY1xcYXBwXFxmYXNoaW9uXFxsaXN0aW5nXFxzdHlsZXNcXGZhc2hpb24tbGlzdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQ0FBYztFQUNkLHdDQUFrQjtFQUVsQixpREFBb0I7RUFDcEIscUJBQWEsRUFBQTs7QUFJZjtFQUNFLG9DQUFhO0VBQ2IsbUNBQWdCO0VBQ2hCLGlDQUFjO0VBQ2QsaUNBQWM7RUFDZCxvQ0FBaUIsRUFBQTs7QUFHbkI7RUFDRSw0QkFBMEIsRUFBQTs7QUFENUI7SUFJSSwyQ0FBMkMsRUFBQTs7QUFKL0M7TUFPTSx1Q0FBdUMsRUFBQTs7QUFQN0M7TUFXTSxzQ0FBc0MsRUFBQTs7QUFYNUM7TUFlTSw4Q0FBOEMsRUFBQTs7QUFmcEQ7UUFrQlEsY0FBYyxFQUFBOztBQWxCdEI7TUF1Qk0sOEJBQTBCO01BRTFCLG9CQUFvQjtNQUNwQixrQkFBa0IsRUFBQTs7QUExQnhCO1FBNkJRLDJDQUEyQyxFQUFBOztBQTdCbkQ7VUFnQ1UsV0FBVztVQUNYLGVBQWU7VUFDZixnQkFBZ0I7VUFFaEIsdUJBQXVCO1VBQ3ZCLG1CQUFtQjtVQUNuQixnQkFBZ0IsRUFBQTs7QUF0QzFCO1lBeUNZLCtCQUErQjtZQUMvQixjQUFjO1lBQ2QscUJBQXFCLEVBQUE7O0FBM0NqQztRQWlEUSxtQkFBbUIsRUFBQTs7QUFqRDNCO1VBcURZLDJDQUEyQztVQUMzQyxpQkFBaUIsRUFBQTs7QUF0RDdCO1lBeURjLGtCQUFrQixFQUFBOztBQXpEaEM7VUE4RFksMENBQTBDO1VBQzFDLGdCQUFnQixFQUFBOztBQS9ENUI7VUFvRVUsY0FBYztVQUNkLG9EQUFvRDtVQUNwRCxtQkFBbUIsRUFBQTs7QUF0RTdCO1VBMEVVLGNBQWM7VUFDZCxnQkFBZ0I7VUFDaEIsd0JBQXdCO1VBQ3hCLGVBQWUsRUFBQTs7QUE3RXpCO1VBaUZVLGNBQWM7VUFDZCw2QkFBNkI7VUFDN0Isb0NBQW9DO1VBQ3BDLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Zhc2hpb24vbGlzdGluZy9zdHlsZXMvZmFzaGlvbi1saXN0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcclxuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbjpob3N0IHtcclxuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xyXG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XHJcblxyXG4gIC0tcGFnZS1pdGVtcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgLS1wYWdlLWNvbG9yOiAjY2IzMjhmO1xyXG59XHJcblxyXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuLmZhc2hpb24tbGlzdGluZy1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gIC0tcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbn1cclxuXHJcbi5pdGVtcy1yb3cge1xyXG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDA7XHJcblxyXG4gIC5saXN0aW5nLWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcclxuXHJcbiAgICAmOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFnZS1pdGVtcy1ndXR0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLWl0ZW1zLWd1dHRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0taW1hZ2Utd3JhcHBlciB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XHJcblxyXG4gICAgICAuaW1hZ2UtYW5jaG9yIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLWJvZHkge1xyXG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgICBwYWRkaW5nOiA1cHggNXB4IDBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgLm1haW4taW5mbyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuXHJcbiAgICAgICAgLml0ZW0tbmFtZSB7XHJcbiAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAubmFtZS1hbmNob3Ige1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlY29uZGFyeS1pbmZvIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAucHJpY2UtY29sIHtcclxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlcGFyYXRvciB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDBweDtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogc29saWQgMnB4IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLml0ZW0tc2FsZS1wcmljZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaXRlbS1vcmlnaW5hbC1wcmljZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/fashion/listing/styles/fashion-listing.shell.scss":
/*!*******************************************************************!*\
  !*** ./src/app/fashion/listing/styles/fashion-listing.shell.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --shell-color: #cb328f;\n  --shell-color-rgb: 203,50,143; }\n\napp-image-shell.item-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25); }\n\n.item-name app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .25);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .35);\n  --text-shell-line-height: 14px; }\n\n.item-sale-price > app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .20);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 16px; }\n\n.item-original-price > app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .20);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFzaGlvbi9saXN0aW5nL3N0eWxlcy9DOlxcUHJvamVjdHNcXEFwcGxpY2F0aW9uc1xcaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyY1xcYXBwXFxmYXNoaW9uXFxsaXN0aW5nXFxzdHlsZXNcXGZhc2hpb24tbGlzdGluZy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQWM7RUFDZCw2QkFBa0IsRUFBQTs7QUFVcEI7RUFDRSxtRUFBaUM7RUFDakMsOERBQTRCLEVBQUE7O0FBRzlCO0VBQ0Usb0VBQWtDO0VBQ2xDLCtEQUE2QjtFQUM3Qiw4QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxvRUFBa0M7RUFDbEMsK0RBQTZCO0VBQzdCLDhCQUF5QixFQUFBOztBQUczQjtFQUNFLG9FQUFrQztFQUNsQywrREFBNkI7RUFDN0IsOEJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mYXNoaW9uL2xpc3Rpbmcvc3R5bGVzL2Zhc2hpb24tbGlzdGluZy5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xyXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuOmhvc3Qge1xyXG4gIC0tc2hlbGwtY29sb3I6ICNjYjMyOGY7XHJcbiAgLS1zaGVsbC1jb2xvci1yZ2I6IDIwMyw1MCwxNDM7XHJcbn1cclxuXHJcbi8vIFlvdSBjYW4gYWxzbyBhcHBseSBzaGVlbCBzdHlsZXMgdG8gdGhlIGVudGlyZSBwYWdlXHJcbjpob3N0KC5pcy1zaGVsbCkge1xyXG4gIC8vIGlvbi1jb250ZW50IHtcclxuICAvLyAgIG9wYWNpdHk6IDAuODtcclxuICAvLyB9XHJcbn1cclxuXHJcbmFwcC1pbWFnZS1zaGVsbC5pdGVtLWltYWdlIHtcclxuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xyXG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xyXG59XHJcblxyXG4uaXRlbS1uYW1lIGFwcC10ZXh0LXNoZWxsIHtcclxuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcclxuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zNSk7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xyXG59XHJcblxyXG4uaXRlbS1zYWxlLXByaWNlID4gYXBwLXRleHQtc2hlbGwge1xyXG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xyXG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcclxuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5pdGVtLW9yaWdpbmFsLXByaWNlID4gYXBwLXRleHQtc2hlbGwge1xyXG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xyXG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcclxuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XHJcbn1cclxuIl19 */"

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
//# sourceMappingURL=fashion-listing-fashion-listing-module.js.map