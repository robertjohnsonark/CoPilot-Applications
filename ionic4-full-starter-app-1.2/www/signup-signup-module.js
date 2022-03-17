(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./src/app/privacy-policy/privacy-policy.page.html":
/*!*********************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"dismiss()\">Close</ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Privacy Policy\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"legal-content\">\r\n  <h3 class=\"legal-title\">Welcome to Ionic 4 Demo App</h3>\r\n  <p class=\"legal-text\">\r\n    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n  </p>\r\n  <h3 class=\"legal-title\">Using our services</h3>\r\n  <p class=\"legal-text\">\r\n    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\r\n  </p>\r\n  <h3 class=\"legal-title\">About this privacy policy</h3>\r\n  <p class=\"legal-text\">\r\n    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\r\n  </p>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.page.ts ***!
  \*******************************************************/
/*! exports provided: PrivacyPolicyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPage", function() { return PrivacyPolicyPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrivacyPolicyPage = /** @class */ (function () {
    function PrivacyPolicyPage(modalController) {
        this.modalController = modalController;
    }
    PrivacyPolicyPage.prototype.dismiss = function () {
        this.modalController.dismiss();
    };
    PrivacyPolicyPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privacy-policy-page',
            template: __webpack_require__(/*! ./privacy-policy.page.html */ "./src/app/privacy-policy/privacy-policy.page.html"),
            styles: [__webpack_require__(/*! ./styles/privacy-policy.page.scss */ "./src/app/privacy-policy/styles/privacy-policy.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], PrivacyPolicyPage);
    return PrivacyPolicyPage;
}());



/***/ }),

/***/ "./src/app/privacy-policy/styles/privacy-policy.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/privacy-policy/styles/privacy-policy.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade); }\n\n.legal-content {\n  --background: var(--page-background);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin); }\n\n.legal-content .legal-title {\n    color: var(--ion-color-secondary);\n    margin: var(--page-margin) 0px calc(var(--page-margin) / 2); }\n\n.legal-content .legal-text {\n    color: var(--ion-color-medium);\n    margin: calc(var(--page-margin) / 2) 0px var(--page-margin);\n    font-size: 14px;\n    line-height: 20px;\n    text-align: justify; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmFjeS1wb2xpY3kvc3R5bGVzL0M6XFxQcm9qZWN0c1xcQXBwbGljYXRpb25zXFxpb25pYzQtZnVsbC1zdGFydGVyLWFwcC0xLjIvc3JjXFxhcHBcXHByaXZhY3ktcG9saWN5XFxzdHlsZXNcXHByaXZhY3ktcG9saWN5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNDQUFjO0VBQ2QsOENBQWtCLEVBQUE7O0FBSXBCO0VBQ0Usb0NBQWE7RUFDYixtQ0FBZ0I7RUFDaEIsaUNBQWM7RUFDZCxpQ0FBYztFQUNkLG9DQUFpQixFQUFBOztBQUxuQjtJQVFJLGlDQUFpQztJQUNqQywyREFBMkQsRUFBQTs7QUFUL0Q7SUFhSSw4QkFBOEI7SUFDOUIsMkRBQTJEO0lBQzNELGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcml2YWN5LXBvbGljeS9zdHlsZXMvcHJpdmFjeS1wb2xpY3kucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xyXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuOmhvc3Qge1xyXG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xyXG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XHJcbn1cclxuXHJcbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG4ubGVnYWwtY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG5cclxuICAubGVnYWwtdGl0bGUge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgfVxyXG5cclxuICAubGVnYWwtdGV4dCB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");
/* harmony import */ var _terms_of_service_terms_of_service_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../terms-of-service/terms-of-service.page */ "./src/app/terms-of-service/terms-of-service.page.ts");
/* harmony import */ var _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../privacy-policy/privacy-policy.page */ "./src/app/privacy-policy/privacy-policy.page.ts");
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
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"], _terms_of_service_terms_of_service_page__WEBPACK_IMPORTED_MODULE_7__["TermsOfServicePage"], _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_8__["PrivacyPolicyPage"]],
            entryComponents: [_terms_of_service_terms_of_service_page__WEBPACK_IMPORTED_MODULE_7__["TermsOfServicePage"], _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_8__["PrivacyPolicyPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.page.html":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"Back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Sign Up</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"signup-content\">\r\n  <h2 class=\"auth-title\">\r\n    Hello World!\r\n  </h2>\r\n  <form [formGroup]=\"signupForm\" (ngSubmit)=\"doSignup()\">\r\n    <ion-list class=\"inputs-list\" lines=\"full\">\r\n      <ion-item class=\"input-item\">\r\n        <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\" clearInput autocapitalize=\"off\" inputmode=\"email\"></ion-input>\r\n      </ion-item>\r\n      <div class=\"error-container\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.email\">\r\n          <div class=\"error-message\" *ngIf=\"signupForm.get('email').hasError(validation.type) && (signupForm.get('email').dirty || signupForm.get('email').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <span>{{ validation.message }}</span>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n\r\n      <div formGroupName=\"matching_passwords\">\r\n        <ion-item class=\"input-item\">\r\n          <app-show-hide-password>\r\n            <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\r\n          </app-show-hide-password>\r\n        </ion-item>\r\n        <div class=\"error-container\">\r\n          <ng-container *ngFor=\"let validation of validation_messages.password\">\r\n            <div class=\"error-message\" *ngIf=\"signupForm.get('matching_passwords').get('password').hasError(validation.type) && (signupForm.get('matching_passwords').get('password').dirty || signupForm.get('matching_passwords').get('password').touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              <span>{{ validation.message }}</span>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n\r\n        <ion-item class=\"input-item\">\r\n          <app-show-hide-password>\r\n            <ion-input type=\"password\" placeholder=\"Confirm Password\" formControlName=\"confirm_password\"></ion-input>\r\n          </app-show-hide-password>\r\n        </ion-item>\r\n        <div class=\"error-container\">\r\n          <ng-container *ngFor=\"let validation of validation_messages.confirm_password\">\r\n            <div class=\"error-message\" *ngIf=\"signupForm.get('matching_passwords').get('confirm_password').hasError(validation.type) && (signupForm.get('matching_passwords').get('confirm_password').dirty || signupForm.get('matching_passwords').get('confirm_password').touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              <span>{{ validation.message }}</span>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n      <div class=\"error-container\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.matching_passwords\">\r\n          <div class=\"error-message\" *ngIf=\"signupForm.get('matching_passwords').hasError(validation.type) && (signupForm.get('matching_passwords').get('confirm_password').dirty || signupForm.get('matching_passwords').get('confirm_password').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <span>{{ validation.message }}</span>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ion-list>\r\n\r\n    <ion-button class=\"signup-btn\" type=\"submit\" expand=\"block\" [disabled]=\"!signupForm.valid\">Sign Up</ion-button>\r\n    <ion-row class=\"other-auth-options-row\">\r\n      <ion-button class=\"login-btn\" fill=\"clear\" [routerLink]=\"['/auth/login']\">\r\n        Already have an account?\r\n      </ion-button>\r\n    </ion-row>\r\n  </form>\r\n\r\n  <div class=\"social-auth-options\">\r\n    <p class=\"options-divider\">Or</p>\r\n    <ion-button class=\"social-auth-btn facebook-auth-btn\" expand=\"block\" color=\"facebook\" (click)=\"doFacebookSignup()\">Sign Up with Facebook</ion-button>\r\n    <ion-button class=\"social-auth-btn google-auth-btn\" expand=\"block\" color=\"google\" (click)=\"doGoogleSignup()\">Sign Up with Google</ion-button>\r\n    <ion-button class=\"social-auth-btn twitter-auth-btn\" expand=\"block\" color=\"twitter\" (click)=\"doTwitterSignup()\">Sign Up with Twitter</ion-button>\r\n  </div>\r\n\r\n  <div class=\"legal-stuff\">\r\n    By creating an account you agree to our <a class=\"legal-action\" (click)=\"showPrivacyModal()\">Privacy Policy</a> and <a class=\"legal-action\" (click)=\"showTermsModal()\">Terms of use</a>.\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _terms_of_service_terms_of_service_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../terms-of-service/terms-of-service.page */ "./src/app/terms-of-service/terms-of-service.page.ts");
/* harmony import */ var _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../privacy-policy/privacy-policy.page */ "./src/app/privacy-policy/privacy-policy.page.ts");
/* harmony import */ var _validators_password_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../validators/password.validator */ "./src/app/validators/password.validator.ts");
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







var SignupPage = /** @class */ (function () {
    function SignupPage(router, modalController, menu) {
        this.router = router;
        this.modalController = modalController;
        this.menu = menu;
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' }
            ],
            'confirm_password': [
                { type: 'required', message: 'Confirm password is required' }
            ],
            'matching_passwords': [
                { type: 'areNotEqual', message: 'Password mismatch' }
            ]
        };
        this.matching_passwords_group = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            'confirm_password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        }, function (formGroup) {
            return _validators_password_validator__WEBPACK_IMPORTED_MODULE_6__["PasswordValidator"].areNotEqual(formGroup);
        });
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('test@test.com', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            'matching_passwords': this.matching_passwords_group
        });
    }
    SignupPage.prototype.ngOnInit = function () {
        this.menu.enable(false);
    };
    SignupPage.prototype.showTermsModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _terms_of_service_terms_of_service_page__WEBPACK_IMPORTED_MODULE_4__["TermsOfServicePage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SignupPage.prototype.showPrivacyModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_5__["PrivacyPolicyPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SignupPage.prototype.doSignup = function () {
        console.log('do sign up');
        this.router.navigate(['app/categories']);
    };
    SignupPage.prototype.doFacebookSignup = function () {
        console.log('facebook signup');
        this.router.navigate(['app/categories']);
    };
    SignupPage.prototype.doGoogleSignup = function () {
        console.log('google signup');
        this.router.navigate(['app/categories']);
    };
    SignupPage.prototype.doTwitterSignup = function () {
        console.log('twitter signup');
        this.router.navigate(['app/categories']);
    };
    SignupPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.page.html */ "./src/app/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./styles/signup.page.scss */ "./src/app/signup/styles/signup.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ }),

/***/ "./src/app/signup/styles/signup.page.scss":
/*!************************************************!*\
  !*** ./src/app/signup/styles/signup.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade); }\n\n.signup-content {\n  --background: var(--page-background);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin); }\n\n.signup-content .auth-title {\n    color: var(--ion-color-dark);\n    font-weight: bold;\n    margin-top: calc(var(--page-margin) / 2);\n    margin-bottom: calc(var(--page-margin) * (3/2));\n    letter-spacing: 0.6px; }\n\n.signup-content .inputs-list {\n    --ion-item-background: var(--page-background); }\n\n.signup-content .inputs-list .input-item {\n      --padding-start: 0px;\n      --padding-end: 0px;\n      --inner-padding-end: 0px; }\n\n.signup-content .inputs-list .error-container .error-message {\n      margin: calc(var(--page-margin) / 2) 0px;\n      display: flex;\n      align-items: center;\n      color: var(--ion-color-danger);\n      font-size: 14px; }\n\n.signup-content .inputs-list .error-container .error-message ion-icon {\n        -webkit-padding-end: calc(var(--page-margin) / 2);\n                padding-inline-end: calc(var(--page-margin) / 2); }\n\n.signup-content .signup-btn {\n    margin: calc(var(--page-margin) / 2) 0px; }\n\n.signup-content .other-auth-options-row {\n    justify-content: flex-end;\n    align-items: center; }\n\n.signup-content .other-auth-options-row .login-btn {\n      --color: var(--ion-color-secondary);\n      margin: 0px; }\n\n.signup-content .social-auth-options .options-divider {\n    color: var(--ion-color-medium);\n    margin: var(--page-margin) 0px;\n    text-align: center; }\n\n.signup-content .social-auth-options .social-auth-btn {\n    margin: 0px; }\n\n.signup-content .social-auth-options .social-auth-btn:not(:first-child) {\n      margin-top: var(--page-margin); }\n\n.signup-content .legal-stuff {\n    text-align: center;\n    font-size: 14px;\n    margin: var(--page-margin) 0px;\n    color: var(--ion-color-medium); }\n\n.signup-content .legal-stuff .legal-action {\n      font-weight: 500;\n      color: var(--ion-color-secondary);\n      cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3N0eWxlcy9DOlxcUHJvamVjdHNcXEFwcGxpY2F0aW9uc1xcaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyY1xcYXBwXFxzaWdudXBcXHN0eWxlc1xcc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNDQUFjO0VBQ2QsOENBQWtCLEVBQUE7O0FBSXBCO0VBQ0Usb0NBQWE7RUFDYixtQ0FBZ0I7RUFDaEIsaUNBQWM7RUFDZCxpQ0FBYztFQUNkLG9DQUFpQixFQUFBOztBQUxuQjtJQVFJLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsd0NBQXdDO0lBQ3hDLCtDQUErQztJQUMvQyxxQkFBcUIsRUFBQTs7QUFaekI7SUFpQkksNkNBQXNCLEVBQUE7O0FBakIxQjtNQW9CTSxvQkFBZ0I7TUFDaEIsa0JBQWM7TUFDZCx3QkFBb0IsRUFBQTs7QUF0QjFCO01BMkJRLHdDQUF3QztNQUN4QyxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDhCQUE4QjtNQUM5QixlQUFlLEVBQUE7O0FBL0J2QjtRQWtDVSxpREFBZ0Q7Z0JBQWhELGdEQUFnRCxFQUFBOztBQWxDMUQ7SUF5Q0ksd0NBQXdDLEVBQUE7O0FBekM1QztJQTZDSSx5QkFBeUI7SUFDekIsbUJBQW1CLEVBQUE7O0FBOUN2QjtNQWlETSxtQ0FBUTtNQUVSLFdBQVcsRUFBQTs7QUFuRGpCO0lBeURNLDhCQUE4QjtJQUNoQyw4QkFBOEI7SUFDOUIsa0JBQWtCLEVBQUE7O0FBM0R0QjtJQStETSxXQUFXLEVBQUE7O0FBL0RqQjtNQWtFUSw4QkFBOEIsRUFBQTs7QUFsRXRDO0lBd0VFLGtCQUFrQjtJQUNoQixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLDhCQUE4QixFQUFBOztBQTNFbEM7TUE4RUcsZ0JBQWdCO01BQ2hCLGlDQUFpQztNQUM5QixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc3R5bGVzL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXHJcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG46aG9zdCB7XHJcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XHJcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcclxufVxyXG5cclxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbi5zaWdudXAtY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG5cclxuICAuYXV0aC10aXRsZSB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAoMy8yKSk7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmlucHV0cy1saXN0IHtcclxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuXHJcbiAgICAuaW5wdXQtaXRlbSB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZXJyb3ItY29udGFpbmVyIHtcclxuICAgICAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zaWdudXAtYnRuIHtcclxuICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XHJcbiAgfVxyXG5cclxuICAub3RoZXItYXV0aC1vcHRpb25zLXJvdyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAubG9naW4tYnRuIHtcclxuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcblxyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zb2NpYWwtYXV0aC1vcHRpb25zIHtcclxuICAgIC5vcHRpb25zLWRpdmlkZXIge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgXHRcdG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcclxuICBcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5zb2NpYWwtYXV0aC1idG4ge1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuXHJcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblx0LmxlZ2FsLXN0dWZmIHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuXHJcblx0XHQubGVnYWwtYWN0aW9uIHtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/terms-of-service/styles/terms-of-service.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/terms-of-service/styles/terms-of-service.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade); }\n\n.legal-content {\n  --background: var(--page-background);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin); }\n\n.legal-content .legal-title {\n    color: var(--ion-color-secondary);\n    margin: var(--page-margin) 0px calc(var(--page-margin) / 2); }\n\n.legal-content .legal-text {\n    color: var(--ion-color-medium);\n    margin: calc(var(--page-margin) / 2) 0px var(--page-margin);\n    font-size: 14px;\n    line-height: 20px;\n    text-align: justify; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybXMtb2Ytc2VydmljZS9zdHlsZXMvQzpcXFByb2plY3RzXFxBcHBsaWNhdGlvbnNcXGlvbmljNC1mdWxsLXN0YXJ0ZXItYXBwLTEuMi9zcmNcXGFwcFxcdGVybXMtb2Ytc2VydmljZVxcc3R5bGVzXFx0ZXJtcy1vZi1zZXJ2aWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNDQUFjO0VBQ2QsOENBQWtCLEVBQUE7O0FBSXBCO0VBQ0Usb0NBQWE7RUFDYixtQ0FBZ0I7RUFDaEIsaUNBQWM7RUFDZCxpQ0FBYztFQUNkLG9DQUFpQixFQUFBOztBQUxuQjtJQVFJLGlDQUFpQztJQUNqQywyREFBMkQsRUFBQTs7QUFUL0Q7SUFhSSw4QkFBOEI7SUFDOUIsMkRBQTJEO0lBQzNELGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90ZXJtcy1vZi1zZXJ2aWNlL3N0eWxlcy90ZXJtcy1vZi1zZXJ2aWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcclxuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbjpob3N0IHtcclxuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcclxuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xyXG59XHJcblxyXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuLmxlZ2FsLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuXHJcbiAgLmxlZ2FsLXRpdGxlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gIH1cclxuXHJcbiAgLmxlZ2FsLXRleHQge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/terms-of-service/terms-of-service.page.html":
/*!*************************************************************!*\
  !*** ./src/app/terms-of-service/terms-of-service.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"dismiss()\">Close</ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Terms Of Service\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"legal-content\">\r\n  <h3 class=\"legal-title\">Welcome to Ionic 4 Demo App</h3>\r\n  <p class=\"legal-text\">\r\n    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n  </p>\r\n  <h3 class=\"legal-title\">Using our services</h3>\r\n  <p class=\"legal-text\">\r\n    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\r\n  </p>\r\n  <h3 class=\"legal-title\">About these terms</h3>\r\n  <p class=\"legal-text\">\r\n    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\r\n  </p>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/terms-of-service/terms-of-service.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/terms-of-service/terms-of-service.page.ts ***!
  \***********************************************************/
/*! exports provided: TermsOfServicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfServicePage", function() { return TermsOfServicePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsOfServicePage = /** @class */ (function () {
    function TermsOfServicePage(modalController) {
        this.modalController = modalController;
    }
    TermsOfServicePage.prototype.dismiss = function () {
        this.modalController.dismiss();
    };
    TermsOfServicePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-terms-of-service-page',
            template: __webpack_require__(/*! ./terms-of-service.page.html */ "./src/app/terms-of-service/terms-of-service.page.html"),
            styles: [__webpack_require__(/*! ./styles/terms-of-service.page.scss */ "./src/app/terms-of-service/styles/terms-of-service.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], TermsOfServicePage);
    return TermsOfServicePage;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map