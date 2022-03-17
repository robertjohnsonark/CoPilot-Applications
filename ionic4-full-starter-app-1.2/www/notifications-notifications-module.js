(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "./src/app/notifications/notifications.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications.page */ "./src/app/notifications/notifications.page.ts");
/* harmony import */ var _notifications_notifications_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../notifications/notifications.resolver */ "./src/app/notifications/notifications.resolver.ts");
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../notifications/notifications.service */ "./src/app/notifications/notifications.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var NotificationsPageModule = /** @class */ (function () {
    function NotificationsPageModule() {
    }
    NotificationsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"],
                        resolve: {
                            data: _notifications_notifications_resolver__WEBPACK_IMPORTED_MODULE_7__["NotificationsResolver"]
                        }
                    }
                ])
            ],
            declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]],
            providers: [
                _notifications_notifications_resolver__WEBPACK_IMPORTED_MODULE_7__["NotificationsResolver"],
                _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_8__["NotificationsService"]
            ]
        })
    ], NotificationsPageModule);
    return NotificationsPageModule;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.page.html":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Notifications\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"notifications-content\">\r\n  <ng-container *ngIf=\"notifications\">\r\n    <ion-item-group>\r\n      <ion-item-divider sticky>\r\n        <ion-label>Today</ion-label>\r\n      </ion-item-divider>\r\n      <ion-item class=\"notification-item\" lines=\"none\" *ngFor=\"let notification of notifications.today\">\r\n        <ion-row class=\"notification-item-wrapper\">\r\n          <ion-col size=\"2\">\r\n            <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\r\n              <app-image-shell class=\"notification-image\" [src]=\"notification.image\" [alt]=\"'user image'\"></app-image-shell>\r\n            </app-aspect-ratio>\r\n          </ion-col>\r\n          <ion-col class=\"details-wrapper\">\r\n            <h2 class=\"details-name\">{{ notification.name }}</h2>\r\n            <p class=\"details-description\">{{ notification.message }}</p>\r\n          </ion-col>\r\n          <ion-col size=\"2\" class=\"date-wrapper\">\r\n            <h3 class=\"notification-date\">{{ notification.date }}</h3>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-item>\r\n    </ion-item-group>\r\n    <ion-item-group>\r\n      <ion-item-divider sticky>\r\n        <ion-label>Yesterday</ion-label>\r\n      </ion-item-divider>\r\n      <ion-item class=\"notification-item\" lines=\"none\" *ngFor=\"let notification of notifications.yesterday\">\r\n        <ion-row class=\"notification-item-wrapper\">\r\n          <ion-col size=\"2\">\r\n            <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\r\n              <app-image-shell class=\"notification-image\" [src]=\"notification.image\" [alt]=\"'user image'\"></app-image-shell>\r\n            </app-aspect-ratio>\r\n          </ion-col>\r\n          <ion-col class=\"details-wrapper\">\r\n            <h2 class=\"details-name\">{{ notification.name }}</h2>\r\n            <p class=\"details-description\">{{ notification.message }}</p>\r\n          </ion-col>\r\n          <ion-col size=\"2\" class=\"date-wrapper\">\r\n            <h3 class=\"notification-date\">{{ notification.date }}</h3>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-item>\r\n    </ion-item-group>\r\n  </ng-container>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/notifications/notifications.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/notifications/notifications.page.ts ***!
  \*****************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
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


var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(route) {
        this.route = route;
    }
    NotificationsPage.prototype.ngOnInit = function () {
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
                            console.log('Subscribe to dataObservable (will emmit just one value) => PageData (' + ((pageData && pageData.isShell) ? 'SHELL' : 'REAL') + '): ', pageData);
                            if (pageData) {
                                _this.notifications = pageData;
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
    NotificationsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.page.html */ "./src/app/notifications/notifications.page.html"),
            styles: [__webpack_require__(/*! ./styles/notifications.page.scss */ "./src/app/notifications/styles/notifications.page.scss"), __webpack_require__(/*! ./styles/notifications.shell.scss */ "./src/app/notifications/styles/notifications.shell.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NotificationsPage);
    return NotificationsPage;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.resolver.ts":
/*!*********************************************************!*\
  !*** ./src/app/notifications/notifications.resolver.ts ***!
  \*********************************************************/
/*! exports provided: NotificationsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsResolver", function() { return NotificationsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.service */ "./src/app/notifications/notifications.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsResolver = /** @class */ (function () {
    function NotificationsResolver(notificationsService) {
        this.notificationsService = notificationsService;
    }
    NotificationsResolver.prototype.resolve = function () {
        // Base Observable (where we get data from)
        var dataObservable = this.notificationsService.getData();
        // Resolver using a Promise that resolves the base Observable
        var observablePromise = new Promise(function (resolve, reject) {
            resolve(dataObservable);
        });
        return observablePromise;
    };
    NotificationsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_notifications_service__WEBPACK_IMPORTED_MODULE_1__["NotificationsService"]])
    ], NotificationsResolver);
    return NotificationsResolver;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.service.ts":
/*!********************************************************!*\
  !*** ./src/app/notifications/notifications.service.ts ***!
  \********************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsService = /** @class */ (function () {
    function NotificationsService(http) {
        this.http = http;
    }
    NotificationsService.prototype.getData = function () {
        var dataObservable = this.http.get('./assets/sample-data/notifications.json');
        return dataObservable;
    };
    NotificationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NotificationsService);
    return NotificationsService;
}());



/***/ }),

/***/ "./src/app/notifications/styles/notifications.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/notifications/styles/notifications.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-narrow-margin); }\n\n.notifications-content ion-item-divider {\n  --background: var(--ion-color-light);\n  --padding-start: var(--page-margin); }\n\n.notifications-content .notification-item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  padding: var(--page-margin);\n  color: var(--ion-color-medium);\n  box-shadow: inset 0 8px 2px -9px var(--ion-color-darkest); }\n\n.notifications-content .notification-item .notification-item-wrapper {\n    --ion-grid-column-padding: 0px;\n    width: 100%;\n    align-items: center; }\n\n.notifications-content .notification-item .details-wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    padding-left: var(--page-margin); }\n\n.notifications-content .notification-item .details-wrapper .details-name {\n      margin-top: 0px;\n      margin-bottom: 5px;\n      font-size: 16px;\n      font-weight: 400;\n      letter-spacing: 0.2px;\n      color: var(--ion-color-secondary); }\n\n.notifications-content .notification-item .details-wrapper .details-description {\n      font-size: 12px;\n      margin: 0px; }\n\n.notifications-content .notification-item .date-wrapper {\n    align-self: flex-start; }\n\n.notifications-content .notification-item .date-wrapper .notification-date {\n      margin: 0px;\n      font-size: 12px;\n      text-align: end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9ucy9zdHlsZXMvQzpcXFByb2plY3RzXFxBcHBsaWNhdGlvbnNcXGlvbmljNC1mdWxsLXN0YXJ0ZXItYXBwLTEuMi9zcmNcXGFwcFxcbm90aWZpY2F0aW9uc1xcc3R5bGVzXFxub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHVDQUFjLEVBQUE7O0FBSWhCO0VBRUksb0NBQWE7RUFDYixtQ0FBZ0IsRUFBQTs7QUFIcEI7RUFPSSxvQkFBZ0I7RUFDaEIsd0JBQW9CO0VBRXBCLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIseURBQXlELEVBQUE7O0FBWjdEO0lBZU0sOEJBQTBCO0lBRTFCLFdBQVc7SUFDWCxtQkFBbUIsRUFBQTs7QUFsQnpCO0lBc0JNLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLGdDQUFnQyxFQUFBOztBQXpCdEM7TUE0QlEsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixlQUFlO01BQ2hCLGdCQUFnQjtNQUNoQixxQkFBcUI7TUFDckIsaUNBQWlDLEVBQUE7O0FBakN4QztNQXFDUSxlQUFlO01BQ2YsV0FBVyxFQUFBOztBQXRDbkI7SUEyQ00sc0JBQXNCLEVBQUE7O0FBM0M1QjtNQThDUSxXQUFXO01BQ1gsZUFBZTtNQUNmLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvc3R5bGVzL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xyXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuOmhvc3Qge1xyXG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcclxufVxyXG5cclxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbi5ub3RpZmljYXRpb25zLWNvbnRlbnQge1xyXG4gIGlvbi1pdGVtLWRpdmlkZXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgfVxyXG5cclxuICAubm90aWZpY2F0aW9uLWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcblxyXG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCA4cHggMnB4IC05cHggdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xyXG5cclxuICAgIC5ub3RpZmljYXRpb24taXRlbS13cmFwcGVyIHtcclxuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xyXG5cclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmRldGFpbHMtd3JhcHBlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuXHJcbiAgICAgIC5kZXRhaWxzLW5hbWUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIFx0bGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gICAgICBcdGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRldGFpbHMtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kYXRlLXdyYXBwZXIge1xyXG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgLm5vdGlmaWNhdGlvbi1kYXRlIHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/notifications/styles/notifications.shell.scss":
/*!***************************************************************!*\
  !*** ./src/app/notifications/styles/notifications.shell.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-image-shell.notification-image {\n  --image-shell-border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9ucy9zdHlsZXMvQzpcXFByb2plY3RzXFxBcHBsaWNhdGlvbnNcXGlvbmljNC1mdWxsLXN0YXJ0ZXItYXBwLTEuMi9zcmNcXGFwcFxcbm90aWZpY2F0aW9uc1xcc3R5bGVzXFxub3RpZmljYXRpb25zLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBNEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvc3R5bGVzL25vdGlmaWNhdGlvbnMuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pbWFnZS1zaGVsbC5ub3RpZmljYXRpb24taW1hZ2Uge1xyXG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbiJdfQ== */"

/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module.js.map