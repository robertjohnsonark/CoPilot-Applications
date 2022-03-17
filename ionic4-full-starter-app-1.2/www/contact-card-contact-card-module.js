(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-card-contact-card-module"],{

/***/ "./src/app/contact-card/contact-card.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/contact-card/contact-card.module.ts ***!
  \*****************************************************/
/*! exports provided: ContactCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactCardPageModule", function() { return ContactCardPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _contact_card_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-card.page */ "./src/app/contact-card/contact-card.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ContactCardPageModule = /** @class */ (function () {
    function ContactCardPageModule() {
    }
    ContactCardPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _contact_card_page__WEBPACK_IMPORTED_MODULE_5__["ContactCardPage"] }])
            ],
            declarations: [_contact_card_page__WEBPACK_IMPORTED_MODULE_5__["ContactCardPage"]]
        })
    ], ContactCardPageModule);
    return ContactCardPageModule;
}());



/***/ }),

/***/ "./src/app/contact-card/contact-card.page.html":
/*!*****************************************************!*\
  !*** ./src/app/contact-card/contact-card.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"contact-card-content\">\r\n  <ion-row class=\"user-details-wrapper\">\r\n    <ion-col size=\"4\">\r\n      <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\r\n        <app-image-shell class=\"user-avatar\" animation=\"spinner\" [src]=\"'./assets/sample-images/notifications/100x100Notification2.jpg'\" [alt]=\"'notification image'\"></app-image-shell>\r\n      </app-aspect-ratio>\r\n    </ion-col>\r\n    <ion-col class=\"user-info-wrapper\" size=\"8\">\r\n      <h3 class=\"user-name\">Claire Hale</h3>\r\n      <h5 class=\"user-handle\">@clairehale</h5>\r\n    </ion-col>\r\n    <ion-col class=\"user-stats-wrapper\" size=\"6\">\r\n      <span class=\"user-stat-value\">1553</span>\r\n      <span class=\"user-stat-name\">Following</span>\r\n    </ion-col>\r\n    <ion-col class=\"user-stats-wrapper\" size=\"6\">\r\n      <span class=\"user-stat-value\">537</span>\r\n      <span class=\"user-stat-name\">Followers</span>\r\n    </ion-col>\r\n    <ion-col size=\"12\">\r\n      <p class=\"user-bio\">\r\n        I am a product and visual designer based in Uruguay. I have designed at Google, Amazon and Microsoft.\r\n      </p>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"user-preferences-wrapper\">\r\n    <ion-col size=\"12\">\r\n      <h4 class=\"preference-name\">Mobile</h4>\r\n      <p class=\"preference-value\">\r\n        +1-202-555-0102\r\n      </p>\r\n    </ion-col>\r\n    <ion-col size=\"12\">\r\n      <h4 class=\"preference-name\">Email</h4>\r\n      <p class=\"preference-value\">\r\n        clairhale@ionic.com\r\n      </p>\r\n    </ion-col>\r\n    <ion-col size=\"12\">\r\n      <h4 class=\"preference-name\">Address</h4>\r\n      <p class=\"preference-value\">\r\n        921 Church St, San Francisco, CA\r\n        <br/>\r\n        94114, USA\r\n      </p>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/contact-card/contact-card.page.ts":
/*!***************************************************!*\
  !*** ./src/app/contact-card/contact-card.page.ts ***!
  \***************************************************/
/*! exports provided: ContactCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactCardPage", function() { return ContactCardPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactCardPage = /** @class */ (function () {
    function ContactCardPage() {
    }
    ContactCardPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-card',
            template: __webpack_require__(/*! ./contact-card.page.html */ "./src/app/contact-card/contact-card.page.html"),
            styles: [__webpack_require__(/*! ./styles/contact-card.page.scss */ "./src/app/contact-card/styles/contact-card.page.scss"), __webpack_require__(/*! ./styles/contact-card.shell.scss */ "./src/app/contact-card/styles/contact-card.shell.scss")]
        })
    ], ContactCardPage);
    return ContactCardPage;
}());



/***/ }),

/***/ "./src/app/contact-card/styles/contact-card.page.scss":
/*!************************************************************!*\
  !*** ./src/app/contact-card/styles/contact-card.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n  --page-highlighted-background: var(--ion-color-secondary-tint); }\n\nion-header ion-toolbar {\n  --background: var(--page-highlighted-background); }\n\n.contact-card-content {\n  --background: var(--page-background);\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0); }\n\n.contact-card-content .user-details-wrapper {\n    --ion-grid-column-padding: 0px;\n    padding: 0px var(--page-margin) var(--page-margin);\n    background-color: var(--page-highlighted-background);\n    color: var(--ion-color-light);\n    align-items: center; }\n\n.contact-card-content .user-details-wrapper .user-avatar {\n      border: solid 3px var(--ion-color-light); }\n\n.contact-card-content .user-details-wrapper .user-info-wrapper {\n      padding-left: calc(var(--page-margin) / 2); }\n\n.contact-card-content .user-details-wrapper .user-info-wrapper .user-name {\n        margin: 0px 0px 5px; }\n\n.contact-card-content .user-details-wrapper .user-info-wrapper .user-handle {\n        margin: 0px;\n        font-weight: 400; }\n\n.contact-card-content .user-details-wrapper .user-stats-wrapper {\n      text-align: center;\n      padding-top: calc(var(--page-margin) / 2); }\n\n.contact-card-content .user-details-wrapper .user-stats-wrapper .user-stat-value {\n        margin-right: 5px;\n        font-weight: 500;\n        font-size: 18px; }\n\n.contact-card-content .user-details-wrapper .user-stats-wrapper .user-stat-name {\n        font-size: 16px; }\n\n.contact-card-content .user-details-wrapper .user-bio {\n      margin: var(--page-margin) 0px 0px;\n      line-height: 1.2;\n      font-size: 14px; }\n\n.contact-card-content .user-preferences-wrapper {\n    --ion-grid-column-padding: 0px;\n    padding: var(--page-margin); }\n\n.contact-card-content .user-preferences-wrapper .preference-name {\n      margin: 0px 0px 5px;\n      font-size: 16px; }\n\n.contact-card-content .user-preferences-wrapper .preference-value {\n      margin: 0px 0px calc(var(--page-margin) / 2);\n      font-size: 14px;\n      line-height: 1.4;\n      color: var(--ion-color-dark-tint); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1jYXJkL3N0eWxlcy9DOlxcUHJvamVjdHNcXEFwcGxpY2F0aW9uc1xcaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyY1xcYXBwXFxjb250YWN0LWNhcmRcXHN0eWxlc1xcY29udGFjdC1jYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNDQUFjO0VBQ2QsOENBQWtCO0VBRWxCLDhEQUE4QixFQUFBOztBQUloQztFQUVJLGdEQUFhLEVBQUE7O0FBSWpCO0VBQ0Usb0NBQWE7RUFFYixnQ0FBd0I7VUFBeEIsd0JBQXdCLEVBQUE7O0FBSDFCO0lBTUksOEJBQTBCO0lBRTFCLGtEQUFrRDtJQUNsRCxvREFBb0Q7SUFDcEQsNkJBQTZCO0lBQzdCLG1CQUFtQixFQUFBOztBQVh2QjtNQWNNLHdDQUF3QyxFQUFBOztBQWQ5QztNQWtCTSwwQ0FBMEMsRUFBQTs7QUFsQmhEO1FBcUJRLG1CQUFtQixFQUFBOztBQXJCM0I7UUF5QlEsV0FBVztRQUNYLGdCQUFnQixFQUFBOztBQTFCeEI7TUErQk0sa0JBQWtCO01BQ2xCLHlDQUF5QyxFQUFBOztBQWhDL0M7UUFtQ1EsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixlQUFlLEVBQUE7O0FBckN2QjtRQXlDUSxlQUFlLEVBQUE7O0FBekN2QjtNQThDTSxrQ0FBa0M7TUFDbEMsZ0JBQWdCO01BQ2hCLGVBQWUsRUFBQTs7QUFoRHJCO0lBcURJLDhCQUEwQjtJQUUxQiwyQkFBMkIsRUFBQTs7QUF2RC9CO01BMERNLG1CQUFtQjtNQUNuQixlQUFlLEVBQUE7O0FBM0RyQjtNQStETSw0Q0FBNEM7TUFDNUMsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixpQ0FBaUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtY2FyZC9zdHlsZXMvY29udGFjdC1jYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcclxuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbjpob3N0IHtcclxuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcclxuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xyXG5cclxuICAtLXBhZ2UtaGlnaGxpZ2h0ZWQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50KTtcclxufVxyXG5cclxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbmlvbi1oZWFkZXIge1xyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1oaWdobGlnaHRlZC1iYWNrZ3JvdW5kKTtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWN0LWNhcmQtY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG4gIC8vIFRvIGZpeCBoYWxmIHBpeGVsIGxpbmUgYmV0d2VlbiBpb24taGVhZGVyIGFuZCAgaW9uLWNvbnRlbnRcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcblxyXG4gIC51c2VyLWRldGFpbHMtd3JhcHBlciB7XHJcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWhpZ2hsaWdodGVkLWJhY2tncm91bmQpO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC51c2VyLWF2YXRhciB7XHJcbiAgICAgIGJvcmRlcjogc29saWQgM3B4IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXItaW5mby13cmFwcGVyIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG5cclxuICAgICAgLnVzZXItbmFtZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnVzZXItaGFuZGxlIHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXItc3RhdHMtd3JhcHBlciB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcblxyXG4gICAgICAudXNlci1zdGF0LXZhbHVlIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnVzZXItc3RhdC1uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudXNlci1iaW8ge1xyXG4gICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHggMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIHtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuXHJcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcblxyXG4gICAgLnByZWZlcmVuY2UtbmFtZSB7XHJcbiAgICAgIG1hcmdpbjogMHB4IDBweCA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJlZmVyZW5jZS12YWx1ZSB7XHJcbiAgICAgIG1hcmdpbjogMHB4IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/contact-card/styles/contact-card.shell.scss":
/*!*************************************************************!*\
  !*** ./src/app/contact-card/styles/contact-card.shell.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-image-shell.user-avatar {\n  --image-shell-loading-background: rgba(var(--ion-color-light-rgb), 0.25);\n  --image-shell-border-radius: 50%;\n  --image-shell-spinner-color: var(--ion-color-light); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1jYXJkL3N0eWxlcy9DOlxcUHJvamVjdHNcXEFwcGxpY2F0aW9uc1xcaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyY1xcYXBwXFxjb250YWN0LWNhcmRcXHN0eWxlc1xcY29udGFjdC1jYXJkLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3RUFBaUM7RUFDakMsZ0NBQTRCO0VBQzVCLG1EQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC1jYXJkL3N0eWxlcy9jb250YWN0LWNhcmQuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pbWFnZS1zaGVsbC51c2VyLWF2YXRhciB7XHJcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMjUpO1xyXG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxufVxyXG4iXX0= */"

/***/ })

}]);
//# sourceMappingURL=contact-card-contact-card-module.js.map