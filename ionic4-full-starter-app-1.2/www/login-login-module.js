(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// TODO: move to a shared module instead





var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"Back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Log In</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"login-content\">\r\n  <h2 class=\"auth-title\">\r\n    Welcome!\r\n    <br/>\r\n    Discover the new Ionic 4\r\n  </h2>\r\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"doLogin()\">\r\n    <ion-list class=\"inputs-list\" lines=\"full\">\r\n      <ion-item class=\"input-item\">\r\n        <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\" clearInput autocapitalize=\"off\" inputmode=\"email\"></ion-input>\r\n      </ion-item>\r\n      <div class=\"error-container\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.email\">\r\n          <div class=\"error-message\" *ngIf=\"loginForm.get('email').hasError(validation.type) && (loginForm.get('email').dirty || loginForm.get('email').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <span>{{ validation.message }}</span>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n\r\n      <ion-item class=\"input-item\">\r\n        <app-show-hide-password>\r\n          <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\r\n        </app-show-hide-password>\r\n      </ion-item>\r\n      <div class=\"error-container\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.password\">\r\n          <div class=\"error-message\" *ngIf=\"loginForm.get('password').hasError(validation.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <span>{{ validation.message }}</span>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ion-list>\r\n\r\n    <ion-button class=\"login-btn\" type=\"submit\" expand=\"block\" [disabled]=\"!loginForm.valid\">Log In</ion-button>\r\n    <ion-row class=\"other-auth-options-row\">\r\n      <ion-button class=\"forgot-btn\" fill=\"clear\" [routerLink]=\"['/auth/forgot-password']\">\r\n        Forgot Password?\r\n      </ion-button>\r\n      <ion-button class=\"signup-btn\" fill=\"clear\" [routerLink]=\"['/auth/signup']\">\r\n        Sign Up!\r\n      </ion-button>\r\n    </ion-row>\r\n  </form>\r\n\r\n  <div class=\"social-auth-options\">\r\n    <p class=\"options-divider\">Or</p>\r\n    <ion-button class=\"social-auth-btn facebook-auth-btn\" expand=\"block\" color=\"facebook\" (click)=\"doFacebookLogin()\">Log In with Facebook</ion-button>\r\n    <ion-button class=\"social-auth-btn google-auth-btn\" expand=\"block\" color=\"google\" (click)=\"doGoogleLogin()\">Log In with Google</ion-button>\r\n    <ion-button class=\"social-auth-btn twitter-auth-btn\" expand=\"block\" color=\"twitter\" (click)=\"doTwitterLogin()\">Log In with Twitter</ion-button>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(router, menu) {
        this.router = router;
        this.menu = menu;
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' }
            ]
        };
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('test@test.com', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]))
        });
    }
    LoginPage.prototype.ngOnInit = function () {
        this.menu.enable(false);
    };
    LoginPage.prototype.doLogin = function () {
        console.log('do Log In');
        this.router.navigate(['app/categories']);
    };
    LoginPage.prototype.goToForgotPassword = function () {
        console.log('redirect to forgot-password page');
    };
    LoginPage.prototype.doFacebookLogin = function () {
        console.log('facebook login');
        this.router.navigate(['app/categories']);
    };
    LoginPage.prototype.doGoogleLogin = function () {
        console.log('google login');
        this.router.navigate(['app/categories']);
    };
    LoginPage.prototype.doTwitterLogin = function () {
        console.log('twitter login');
        this.router.navigate(['app/categories']);
    };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./styles/login.page.scss */ "./src/app/login/styles/login.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/login/styles/login.page.scss":
/*!**********************************************!*\
  !*** ./src/app/login/styles/login.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade); }\n\n.login-content {\n  --background: var(--page-background);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin); }\n\n.login-content .auth-title {\n    color: var(--ion-color-dark);\n    font-weight: bold;\n    margin-top: calc(var(--page-margin) / 2);\n    margin-bottom: calc(var(--page-margin) * (3/2));\n    letter-spacing: 0.6px; }\n\n.login-content .inputs-list {\n    --ion-item-background: var(--page-background); }\n\n.login-content .inputs-list .input-item {\n      --padding-start: 0px;\n      --padding-end: 0px;\n      --inner-padding-end: 0px; }\n\n.login-content .inputs-list .error-container .error-message {\n      margin: calc(var(--page-margin) / 2) 0px;\n      display: flex;\n      align-items: center;\n      color: var(--ion-color-danger);\n      font-size: 14px; }\n\n.login-content .inputs-list .error-container .error-message ion-icon {\n        -webkit-padding-end: calc(var(--page-margin) / 2);\n                padding-inline-end: calc(var(--page-margin) / 2); }\n\n.login-content .login-btn {\n    margin: calc(var(--page-margin) / 2) 0px; }\n\n.login-content .other-auth-options-row {\n    justify-content: space-between;\n    align-items: center; }\n\n.login-content .other-auth-options-row .forgot-btn {\n      --color: var(--ion-color-medium);\n      margin: 0px; }\n\n.login-content .other-auth-options-row .signup-btn {\n      --color: var(--ion-color-secondary);\n      margin: 0px; }\n\n.login-content .social-auth-options .options-divider {\n    color: var(--ion-color-medium);\n    margin: var(--page-margin) 0px;\n    text-align: center; }\n\n.login-content .social-auth-options .social-auth-btn {\n    margin: 0px; }\n\n.login-content .social-auth-options .social-auth-btn:not(:first-child) {\n      margin-top: var(--page-margin); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vc3R5bGVzL0M6XFxQcm9qZWN0c1xcQXBwbGljYXRpb25zXFxpb25pYzQtZnVsbC1zdGFydGVyLWFwcC0xLjIvc3JjXFxhcHBcXGxvZ2luXFxzdHlsZXNcXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNDQUFjO0VBQ2QsOENBQWtCLEVBQUE7O0FBSXBCO0VBQ0Usb0NBQWE7RUFDYixtQ0FBZ0I7RUFDaEIsaUNBQWM7RUFDZCxpQ0FBYztFQUNkLG9DQUFpQixFQUFBOztBQUxuQjtJQVFJLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsd0NBQXdDO0lBQ3hDLCtDQUErQztJQUMvQyxxQkFBcUIsRUFBQTs7QUFaekI7SUFnQkksNkNBQXNCLEVBQUE7O0FBaEIxQjtNQW1CTSxvQkFBZ0I7TUFDaEIsa0JBQWM7TUFDZCx3QkFBb0IsRUFBQTs7QUFyQjFCO01BMEJRLHdDQUF3QztNQUN4QyxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDhCQUE4QjtNQUM5QixlQUFlLEVBQUE7O0FBOUJ2QjtRQWlDVSxpREFBZ0Q7Z0JBQWhELGdEQUFnRCxFQUFBOztBQWpDMUQ7SUF3Q0ksd0NBQXdDLEVBQUE7O0FBeEM1QztJQTRDSSw4QkFBOEI7SUFDOUIsbUJBQW1CLEVBQUE7O0FBN0N2QjtNQWdETSxnQ0FBUTtNQUVSLFdBQVcsRUFBQTs7QUFsRGpCO01Bc0RNLG1DQUFRO01BRVIsV0FBVyxFQUFBOztBQXhEakI7SUE4RE0sOEJBQThCO0lBQ2hDLDhCQUE4QjtJQUM5QixrQkFBa0IsRUFBQTs7QUFoRXRCO0lBb0VNLFdBQVcsRUFBQTs7QUFwRWpCO01BdUVRLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vc3R5bGVzL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcclxuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbjpob3N0IHtcclxuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcclxuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xyXG59XHJcblxyXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuLmxvZ2luLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuXHJcbiAgLmF1dGgtdGl0bGUge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogKDMvMikpO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xyXG4gIH1cclxuXHJcbiAgLmlucHV0cy1saXN0IHtcclxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuXHJcbiAgICAuaW5wdXQtaXRlbSB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZXJyb3ItY29udGFpbmVyIHtcclxuICAgICAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sb2dpbi1idG4ge1xyXG4gICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcclxuICB9XHJcblxyXG4gIC5vdGhlci1hdXRoLW9wdGlvbnMtcm93IHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLmZvcmdvdC1idG4ge1xyXG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuXHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWdudXAtYnRuIHtcclxuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcblxyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zb2NpYWwtYXV0aC1vcHRpb25zIHtcclxuICAgIC5vcHRpb25zLWRpdmlkZXIge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgXHRcdG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcclxuICBcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5zb2NpYWwtYXV0aC1idG4ge1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuXHJcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map