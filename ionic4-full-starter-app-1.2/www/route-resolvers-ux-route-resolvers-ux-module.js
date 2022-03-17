(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["route-resolvers-ux-route-resolvers-ux-module"],{

/***/ "./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"showcase/route-resolvers-ux\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Blocking Resovler Showcase\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"showcase-content\">\r\n  <section class=\"showcase-section\">\r\n    <p>\r\n      Notice how the UX degrades when using <b>Blocking</b> Route Resolvers in Angular\r\n    </p>\r\n    <ion-row style=\"background-color: #FFF; padding: 10px;\">\r\n      <ion-col size=\"12\">\r\n        <div [ngStyle]=\"{'background-image': 'url(' + routeResolveData?.cover + ')'}\" style=\"background-size: cover; background-repeat: no-repeat;\">\r\n          <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\r\n            <h4 style=\"margin: 10px; text-align: center; color: #FFF;\">Heading on top of a cover image</h4>\r\n          </app-aspect-ratio>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\r\n          <img [src]=\"routeResolveData?.image\" alt=\"Sample Image\" style=\"width: 100%; height: 100%;\"/>\r\n        </app-aspect-ratio>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <h3 style=\"margin-top: 0px;\">\r\n          {{ routeResolveData?.title }}\r\n        </h3>\r\n        <p>\r\n          {{ routeResolveData?.description }}\r\n        </p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </section>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase-content {\n  --background: var(--app-background-shade); }\n  .showcase-content .showcase-section {\n    margin: 20px 20px 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L2Jsb2NraW5nLXJlc29sdmVycy9DOlxcUHJvamVjdHNcXEFwcGxpY2F0aW9uc1xcaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyY1xcYXBwXFxzaG93Y2FzZVxccm91dGUtcmVzb2x2ZXJzLXV4XFxibG9ja2luZy1yZXNvbHZlcnNcXGJsb2NraW5nLXJlc29sdmVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBYSxFQUFBO0VBRGY7SUFJSSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Nob3djYXNlL3JvdXRlLXJlc29sdmVycy11eC9ibG9ja2luZy1yZXNvbHZlcnMvYmxvY2tpbmctcmVzb2x2ZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcclxuXHJcbiAgLnNob3djYXNlLXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMTAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: BlockingResovlersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockingResovlersPage", function() { return BlockingResovlersPage; });
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


var BlockingResovlersPage = /** @class */ (function () {
    function BlockingResovlersPage(route) {
        this.route = route;
    }
    BlockingResovlersPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Showcase Blocking Resovlers - ngOnInit()');
        if (this.route && this.route.data) {
            var dataObservable = this.route.data;
            console.log('Showcase Blocking Resovlers - Route Resolve Observable => dataObservable: ', dataObservable);
            if (dataObservable) {
                dataObservable.subscribe(function (observableValue) {
                    var pageData = observableValue['data'];
                    // tslint:disable-next-line:max-line-length
                    console.log('Showcase Blocking Resovlers - Subscribe to dataObservable (will emmit just one value) => PageData (' + ((pageData && pageData.isShell) ? 'SHELL' : 'REAL') + '): ', pageData);
                    if (pageData) {
                        _this.routeResolveData = pageData;
                    }
                });
            }
            else {
                console.warn('No dataObservable coming from Route Resolver data');
            }
        }
        else {
            console.warn('No data coming from Route Resolver');
        }
    };
    BlockingResovlersPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-showcase-blocking-resolvers',
            template: __webpack_require__(/*! ./blocking-resolvers.page.html */ "./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.html"),
            styles: [__webpack_require__(/*! ./blocking-resolvers.page.scss */ "./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BlockingResovlersPage);
    return BlockingResovlersPage;
}());



/***/ }),

/***/ "./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking.resolver.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking.resolver.ts ***!
  \*************************************************************************************/
/*! exports provided: BlockingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockingResolver", function() { return BlockingResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../showcase.service */ "./src/app/showcase/showcase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var BlockingResolver = /** @class */ (function () {
    function BlockingResolver(showcaseService, loadingController) {
        this.showcaseService = showcaseService;
        this.loadingController = loadingController;
    }
    BlockingResolver.prototype.presentLoader = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Loading ...'
                            })];
                    case 1:
                        _a.loadingElement = _b.sent();
                        return [4 /*yield*/, this.loadingElement.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BlockingResolver.prototype.dismissLoader = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.loadingElement) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadingElement.dismiss()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    BlockingResolver.prototype.resolve = function () {
        // WITHOUT LOADING INDICATOR
        var _this = this;
        // Base Observable (where we get data from)
        // const dataObservable = this.showcaseService.getData();
        // Basic Resolver that returns the base Observable
        // return dataObservable;
        // WITH LOADING INDICATOR
        // Base Observable (where we get data from)
        var dataObservable = this.showcaseService.getData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            console.log('dataObservable COMPLETED - HIDE LOADER');
            _this.dismissLoader();
        }));
        var deferedObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["defer"])(function () {
            // Will be logged at the moment of subscription
            console.log('dataObservable STARTED - SHOW LOADER');
            _this.presentLoader();
            return dataObservable;
        });
        // Basic Resolver that returns the base Observable
        return deferedObservable;
    };
    BlockingResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_showcase_service__WEBPACK_IMPORTED_MODULE_4__["ShowcaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]])
    ], BlockingResolver);
    return BlockingResolver;
}());



/***/ }),

/***/ "./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"showcase/route-resolvers-ux\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      NON Blocking Resovler Showcase\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"showcase-content\">\r\n  <section class=\"showcase-section\">\r\n    <p>\r\n      With Non-Blocking Resolvers, page transition is immediate. However UX degrades because you are showing a static loading indicator while the server sends data back to the client.\r\n    </p>\r\n    <ng-container *ngIf=\"!routeResolveData\">\r\n      <div style=\"margin: 20px 40px; text-align: center;\">\r\n        <ion-spinner></ion-spinner>\r\n        <p>\r\n          <b>You can show a static shell while fetching data from the backend</b>\r\n        </p>\r\n      </div>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"routeResolveData\">\r\n      <ion-row style=\"background-color: #FFF; padding: 10px;\">\r\n        <ion-col size=\"12\">\r\n          <div [ngStyle]=\"{'background-image': 'url(' + routeResolveData?.cover + ')'}\" style=\"background-size: cover; background-repeat: no-repeat;\">\r\n            <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\r\n              <h4 style=\"margin: 10px; text-align: center; color: #FFF;\">Heading on top of a cover image</h4>\r\n            </app-aspect-ratio>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\r\n            <img [src]=\"routeResolveData?.image\" alt=\"Sample Image\" style=\"width: 100%; height: 100%;\"/>\r\n          </app-aspect-ratio>\r\n        </ion-col>\r\n        <ion-col size=\"8\">\r\n          <h3 style=\"margin-top: 0px;\">\r\n            {{ routeResolveData?.title }}\r\n          </h3>\r\n          <p>\r\n            {{ routeResolveData?.description }}\r\n          </p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ng-container>\r\n  </section>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase-content {\n  --background: var(--app-background-shade); }\n  .showcase-content .showcase-section {\n    margin: 20px 20px 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L25vbi1ibG9ja2luZy1yZXNvbHZlcnMvQzpcXFByb2plY3RzXFxBcHBsaWNhdGlvbnNcXGlvbmljNC1mdWxsLXN0YXJ0ZXItYXBwLTEuMi9zcmNcXGFwcFxcc2hvd2Nhc2VcXHJvdXRlLXJlc29sdmVycy11eFxcbm9uLWJsb2NraW5nLXJlc29sdmVyc1xcbm9uLWJsb2NraW5nLXJlc29sdmVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBYSxFQUFBO0VBRGY7SUFJSSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Nob3djYXNlL3JvdXRlLXJlc29sdmVycy11eC9ub24tYmxvY2tpbmctcmVzb2x2ZXJzL25vbi1ibG9ja2luZy1yZXNvbHZlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3djYXNlLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xyXG5cclxuICAuc2hvd2Nhc2Utc2VjdGlvbiB7XHJcbiAgICBtYXJnaW46IDIwcHggMjBweCAxMDBweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.ts ***!
  \***************************************************************************************************/
/*! exports provided: NonBlockingResolversPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonBlockingResolversPage", function() { return NonBlockingResolversPage; });
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


var NonBlockingResolversPage = /** @class */ (function () {
    function NonBlockingResolversPage(route) {
        this.route = route;
    }
    NonBlockingResolversPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Showcase NON Blocking Resovlers - ngOnInit()');
        if (this.route && this.route.data) {
            // We resolved a promise for the data Observable
            var promiseObservable = this.route.data;
            console.log('Showcase NON Blocking Resovlers - Route Resolve Observable => promiseObservable: ', promiseObservable);
            if (promiseObservable) {
                promiseObservable.subscribe(function (promiseValue) {
                    var dataObservable = promiseValue['data'];
                    console.log('Showcase NON Blocking Resovlers - Subscribe to promiseObservable => dataObservable: ', dataObservable);
                    if (dataObservable) {
                        dataObservable.subscribe(function (observableValue) {
                            var pageData = observableValue;
                            // tslint:disable-next-line:max-line-length
                            console.log('Showcase NON Blocking Resovlers - Subscribe to dataObservable (will emmit just one value) => PageData (' + ((pageData && pageData.isShell) ? 'SHELL' : 'REAL') + '): ', pageData);
                            if (pageData) {
                                _this.routeResolveData = pageData;
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
    NonBlockingResolversPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-showcase-non-blocking-resolvers',
            template: __webpack_require__(/*! ./non-blocking-resolvers.page.html */ "./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.html"),
            styles: [__webpack_require__(/*! ./non-blocking-resolvers.page.scss */ "./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NonBlockingResolversPage);
    return NonBlockingResolversPage;
}());



/***/ }),

/***/ "./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking.resolver.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking.resolver.ts ***!
  \*********************************************************************************************/
/*! exports provided: NonBlockingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonBlockingResolver", function() { return NonBlockingResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../showcase.service */ "./src/app/showcase/showcase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NonBlockingResolver = /** @class */ (function () {
    function NonBlockingResolver(showcaseService) {
        this.showcaseService = showcaseService;
    }
    NonBlockingResolver.prototype.resolve = function () {
        // Base Observable (where we get data from)
        var dataObservable = this.showcaseService.getData();
        // NON-BLOCKING RESOLVERS
        // Resolver using a ReplySubject that emits the base Observable and then completes
        // const subject = new ReplaySubject();
        // subject.next(dataObservable);
        // subject.complete();
        // return subject;
        // Resolver using an Observable that emits the base Observable and then completes
        // const observable = Observable.create((observer) => {
        //   observer.next(dataObservable);
        //   observer.complete();
        // });
        // return observable;
        // Resolver using a Promise that resolves the base Observable
        var observablePromise = new Promise(function (resolve, reject) {
            resolve(dataObservable);
        });
        return observablePromise;
    };
    NonBlockingResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_showcase_service__WEBPACK_IMPORTED_MODULE_1__["ShowcaseService"]])
    ], NonBlockingResolver);
    return NonBlockingResolver;
}());



/***/ }),

/***/ "./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"showcase/route-resolvers-ux\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Progressive Shell Showcase\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"showcase-content\">\r\n  <section class=\"showcase-section\">\r\n    <ion-row style=\"background-color: #FFF; padding: 10px;\">\r\n      <ion-col size=\"12\">\r\n        <app-image-shell class=\"add-overlay\" animation=\"spinner\" [mode]=\"'cover'\" [src]=\"routeResolveData?.cover\" [alt]=\"'Sample Image Cover'\">\r\n          <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\r\n            <h4 style=\"margin: 10px; text-align: center; color: #FFF;\">Heading on top of a cover image</h4>\r\n          </app-aspect-ratio>\r\n        </app-image-shell>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\r\n          <app-image-shell animation=\"spinner\" [src]=\"routeResolveData?.image\" [alt]=\"'Sample Image'\"></app-image-shell>\r\n        </app-aspect-ratio>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <h3 style=\"margin-top: 0px;\">\r\n          <app-text-shell [data]=\"routeResolveData?.title\"></app-text-shell>\r\n        </h3>\r\n        <p>\r\n          <app-text-shell animation=\"bouncing\" lines=\"3\" [data]=\"routeResolveData?.description\"></app-text-shell>\r\n        </p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </section>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase-content {\n  --background: var(--app-background-shade); }\n  .showcase-content .showcase-section {\n    margin: 20px 20px 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L3Byb2dyZXNzaXZlLXNoZWxsLXJlc29sdmVycy9DOlxcUHJvamVjdHNcXEFwcGxpY2F0aW9uc1xcaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyY1xcYXBwXFxzaG93Y2FzZVxccm91dGUtcmVzb2x2ZXJzLXV4XFxwcm9ncmVzc2l2ZS1zaGVsbC1yZXNvbHZlcnNcXHByb2dyZXNzaXZlLXNoZWxsLXJlc29sdmVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBYSxFQUFBO0VBRGY7SUFJSSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Nob3djYXNlL3JvdXRlLXJlc29sdmVycy11eC9wcm9ncmVzc2l2ZS1zaGVsbC1yZXNvbHZlcnMvcHJvZ3Jlc3NpdmUtc2hlbGwtcmVzb2x2ZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcclxuXHJcbiAgLnNob3djYXNlLXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMTAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ProgressiveShellResovlersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressiveShellResovlersPage", function() { return ProgressiveShellResovlersPage; });
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


var ProgressiveShellResovlersPage = /** @class */ (function () {
    function ProgressiveShellResovlersPage(route) {
        this.route = route;
    }
    ProgressiveShellResovlersPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Showcase Progressive Shell Resovlers - ngOnInit()');
        if (this.route && this.route.data) {
            // We resolved a promise for the data Observable
            var promiseObservable = this.route.data;
            console.log('Showcase Progressive Shell Resovlers - Route Resolve Observable => promiseObservable: ', promiseObservable);
            if (promiseObservable) {
                promiseObservable.subscribe(function (promiseValue) {
                    var dataObservable = promiseValue['data'];
                    console.log('Showcase Progressive Shell Resovlers - Subscribe to promiseObservable => dataObservable: ', dataObservable);
                    if (dataObservable) {
                        dataObservable.subscribe(function (observableValue) {
                            var pageData = observableValue;
                            // tslint:disable-next-line:max-line-length
                            console.log('Showcase Progressive Shell Resovlers - Subscribe to dataObservable (can emmit multiple values) => PageData (' + ((pageData && pageData.isShell) ? 'SHELL' : 'REAL') + '): ', pageData);
                            // As we are implementing an App Shell architecture, pageData will be firstly an empty shell model,
                            // and the real remote data once it gets fetched
                            if (pageData) {
                                _this.routeResolveData = pageData;
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
    ProgressiveShellResovlersPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-showcase-progressive-shell-resolvers',
            template: __webpack_require__(/*! ./progressive-shell-resolvers.page.html */ "./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.html"),
            styles: [__webpack_require__(/*! ./progressive-shell-resolvers.page.scss */ "./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ProgressiveShellResovlersPage);
    return ProgressiveShellResovlersPage;
}());



/***/ }),

/***/ "./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell.resolver.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell.resolver.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ProgressiveShellResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressiveShellResolver", function() { return ProgressiveShellResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../showcase.service */ "./src/app/showcase/showcase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgressiveShellResolver = /** @class */ (function () {
    function ProgressiveShellResolver(showcaseService) {
        this.showcaseService = showcaseService;
    }
    ProgressiveShellResolver.prototype.resolve = function () {
        // Get the Shell Provider from the service
        var shellProviderObservable = this.showcaseService.getDataWithShell();
        // Resolve with Shell Provider
        var observablePromise = new Promise(function (resolve, reject) {
            resolve(shellProviderObservable);
        });
        return observablePromise;
    };
    ProgressiveShellResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_showcase_service__WEBPACK_IMPORTED_MODULE_1__["ShowcaseService"]])
    ], ProgressiveShellResolver);
    return ProgressiveShellResolver;
}());



/***/ }),

/***/ "./src/app/showcase/route-resolvers-ux/route-resolvers-ux.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/route-resolvers-ux.module.ts ***!
  \**************************************************************************/
/*! exports provided: RouteResolversUXModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteResolversUXModule", function() { return RouteResolversUXModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _route_resolvers_ux_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./route-resolvers-ux.page */ "./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.ts");
/* harmony import */ var _non_blocking_resolvers_non_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./non-blocking-resolvers/non-blocking-resolvers.page */ "./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.ts");
/* harmony import */ var _blocking_resolvers_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocking-resolvers/blocking-resolvers.page */ "./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.ts");
/* harmony import */ var _progressive_shell_resolvers_progressive_shell_resolvers_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./progressive-shell-resolvers/progressive-shell-resolvers.page */ "./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.ts");
/* harmony import */ var _blocking_resolvers_blocking_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocking-resolvers/blocking.resolver */ "./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking.resolver.ts");
/* harmony import */ var _non_blocking_resolvers_non_blocking_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./non-blocking-resolvers/non-blocking.resolver */ "./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking.resolver.ts");
/* harmony import */ var _progressive_shell_resolvers_progressive_shell_resolver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./progressive-shell-resolvers/progressive-shell.resolver */ "./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell.resolver.ts");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../showcase.service */ "./src/app/showcase/showcase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: '',
        component: _route_resolvers_ux_page__WEBPACK_IMPORTED_MODULE_7__["RouteResovlersUXPage"]
    },
    {
        path: 'blocking-resolvers',
        component: _blocking_resolvers_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_9__["BlockingResovlersPage"],
        resolve: {
            data: _blocking_resolvers_blocking_resolver__WEBPACK_IMPORTED_MODULE_11__["BlockingResolver"]
        }
    },
    {
        path: 'non-blocking-resolvers',
        component: _non_blocking_resolvers_non_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_8__["NonBlockingResolversPage"],
        resolve: {
            data: _non_blocking_resolvers_non_blocking_resolver__WEBPACK_IMPORTED_MODULE_12__["NonBlockingResolver"]
        }
    },
    {
        path: 'progressive-shell-resolvers',
        component: _progressive_shell_resolvers_progressive_shell_resolvers_page__WEBPACK_IMPORTED_MODULE_10__["ProgressiveShellResovlersPage"],
        resolve: {
            data: _progressive_shell_resolvers_progressive_shell_resolver__WEBPACK_IMPORTED_MODULE_13__["ProgressiveShellResolver"]
        }
    }
];
var RouteResolversUXModule = /** @class */ (function () {
    function RouteResolversUXModule() {
    }
    RouteResolversUXModule = __decorate([
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
                _route_resolvers_ux_page__WEBPACK_IMPORTED_MODULE_7__["RouteResovlersUXPage"],
                _blocking_resolvers_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_9__["BlockingResovlersPage"],
                _non_blocking_resolvers_non_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_8__["NonBlockingResolversPage"],
                _progressive_shell_resolvers_progressive_shell_resolvers_page__WEBPACK_IMPORTED_MODULE_10__["ProgressiveShellResovlersPage"]
            ],
            providers: [
                _blocking_resolvers_blocking_resolver__WEBPACK_IMPORTED_MODULE_11__["BlockingResolver"],
                _non_blocking_resolvers_non_blocking_resolver__WEBPACK_IMPORTED_MODULE_12__["NonBlockingResolver"],
                _progressive_shell_resolvers_progressive_shell_resolver__WEBPACK_IMPORTED_MODULE_13__["ProgressiveShellResolver"],
                _showcase_service__WEBPACK_IMPORTED_MODULE_14__["ShowcaseService"]
            ]
        })
    ], RouteResolversUXModule);
    return RouteResolversUXModule;
}());



/***/ }),

/***/ "./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.html":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Improve Route Resolvers UX\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"showcase-content\">\r\n  <section class=\"showcase-section\">\r\n    <p>\r\n      Lets see the difference between the different implementations of Route Resolvers.\r\n    </p>\r\n    <h5>Blocking Route Resolvers</h5>\r\n    <p>\r\n      By default, Angular Route Resolvers won't transition to the page until the Resolver Observable completes.\r\n    </p>\r\n    <p>\r\n      Let's suppose the backend is slow and takes 5 seconds to fetch data and return it to the client, this is what's going to happen.\r\n    </p>\r\n    <p>\r\n      <b>Expected behavior:</b> Page transition will be delayed 5 seconds until the server sends data back to the client.\r\n    </p>\r\n    <ion-button expand=\"block\" [routerLink]=\"['/showcase/route-resolvers-ux/blocking-resolvers']\">Blocking Resolvers</ion-button>\r\n  </section>\r\n  <section class=\"showcase-section\">\r\n    <h5>NON-Blocking Route Resolvers</h5>\r\n    <p>\r\n      To avoid waiting for the Observable to complete, we can wrap the base Observable (the one we are getting data from) with a dummy Observable, Subject or Promise that emits the base Observable and immediately completes.\r\n    </p>\r\n    <p>\r\n      <b>Expected behavior:</b> Page transition will be instant and the transitioned page will show a blank state while the server sends data back to the client.\r\n    </p>\r\n    <ion-button expand=\"block\" [routerLink]=\"['/showcase/route-resolvers-ux/non-blocking-resolvers']\">Non-Blocking Resolvers</ion-button>\r\n  </section>\r\n  <section class=\"showcase-section\">\r\n    <h5>Progressive Shell Resolvers</h5>\r\n    <p>\r\n      By using the <code>ShellProvider</code> utility in conjunction with Angular Route Resolvers, we can solve this UX problem and make page transitions immediate.\r\n    </p>\r\n    <p>\r\n      This approach uses a non-blocking Resolver in conjunction with the <code>ShellProvider</code> utility.\r\n    </p>\r\n    <p>\r\n      <b>Expected behavior:</b> Page transition will be instant and the transitioned page will show some shell elements while the server sends data back to the client.\r\n    </p>\r\n    <ion-button expand=\"block\" [routerLink]=\"['/showcase/route-resolvers-ux/progressive-shell-resolvers']\">Progressive Shell Resolvers</ion-button>\r\n  </section>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase-content {\n  --background: var(--app-background-shade); }\n  .showcase-content .showcase-section {\n    margin: 20px 20px 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L0M6XFxQcm9qZWN0c1xcQXBwbGljYXRpb25zXFxpb25pYzQtZnVsbC1zdGFydGVyLWFwcC0xLjIvc3JjXFxhcHBcXHNob3djYXNlXFxyb3V0ZS1yZXNvbHZlcnMtdXhcXHJvdXRlLXJlc29sdmVycy11eC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBYSxFQUFBO0VBRGY7SUFJSSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Nob3djYXNlL3JvdXRlLXJlc29sdmVycy11eC9yb3V0ZS1yZXNvbHZlcnMtdXgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3djYXNlLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xyXG5cclxuICAuc2hvd2Nhc2Utc2VjdGlvbiB7XHJcbiAgICBtYXJnaW46IDIwcHggMjBweCAxMDBweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.ts ***!
  \************************************************************************/
/*! exports provided: RouteResovlersUXPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteResovlersUXPage", function() { return RouteResovlersUXPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RouteResovlersUXPage = /** @class */ (function () {
    function RouteResovlersUXPage() {
    }
    RouteResovlersUXPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-showcase-route-resolvers-ux',
            template: __webpack_require__(/*! ./route-resolvers-ux.page.html */ "./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.html"),
            styles: [__webpack_require__(/*! ./route-resolvers-ux.page.scss */ "./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RouteResovlersUXPage);
    return RouteResovlersUXPage;
}());



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
//# sourceMappingURL=route-resolvers-ux-route-resolvers-ux-module.js.map