(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-components-custom-components-module"],{

/***/ "./src/app/showcase/custom-components/custom-components.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/showcase/custom-components/custom-components.module.ts ***!
  \************************************************************************/
/*! exports provided: CustomComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomComponentsModule", function() { return CustomComponentsModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _custom_components_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-components.page */ "./src/app/showcase/custom-components/custom-components.page.ts");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../showcase.service */ "./src/app/showcase/showcase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CustomComponentsModule = /** @class */ (function () {
    function CustomComponentsModule() {
    }
    CustomComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _custom_components_page__WEBPACK_IMPORTED_MODULE_7__["CustomComponentsPage"]
                    }
                ])
            ],
            declarations: [
                _custom_components_page__WEBPACK_IMPORTED_MODULE_7__["CustomComponentsPage"]
            ],
            providers: [
                _showcase_service__WEBPACK_IMPORTED_MODULE_8__["ShowcaseService"]
            ]
        })
    ], CustomComponentsModule);
    return CustomComponentsModule;
}());



/***/ }),

/***/ "./src/app/showcase/custom-components/custom-components.page.html":
/*!************************************************************************!*\
  !*** ./src/app/showcase/custom-components/custom-components.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Custom Components\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"showcase-content\">\r\n  <ion-item-divider sticky=\"true\">\r\n    <ion-label>Checkbox Wrapper</ion-label>\r\n  </ion-item-divider>\r\n  <section class=\"showcase-section\">\r\n    <p>\r\n      This is a super straightforward component whose purpose is to wrap an <code>&lt;ion-checkbox&gt;</code> element to enable accessing the checkbox state from its parents.\r\n    </p>\r\n<pre>\r\n&lt;app-checkbox-wrapper class=\"custom-checkbox\"&gt;\r\n  &lt;ion-checkbox checked=true&gt;&lt;/ion-checkbox&gt;\r\n  &lt;ion-label&gt;Sample Checkbox&lt;/ion-label&gt;\r\n&lt;/app-checkbox-wrapper&gt;\r\n</pre>\r\n<pre>\r\napp-checkbox-wrapper.custom-checkbox &#123;\r\n  background: #CCC;\r\n  color: #000;\r\n\r\n  &.checkbox-checked &#123;\r\n    background: #00AFFF;\r\n    color: #FFF;\r\n  &#125;\r\n&#125;\r\n</pre>\r\n    <app-checkbox-wrapper class=\"custom-checkbox\">\r\n      <ion-checkbox checked=true></ion-checkbox>\r\n      <ion-label>Sample Checkbox</ion-label>\r\n    </app-checkbox-wrapper>\r\n  </section>\r\n\r\n  <ion-item-divider sticky=\"true\">\r\n    <ion-label>Show/Hide Password</ion-label>\r\n  </ion-item-divider>\r\n  <section class=\"showcase-section\">\r\n    <p>\r\n      By wrapping an <code>&lt;ion-input&gt;</code> element with this component, you can enhance the UX and add a show/hide password functionality.\r\n    </p>\r\n<pre>\r\n&lt;app-show-hide-password&gt;\r\n  &lt;ion-input type=\"password\" placeholder=\"Try setting a password\" value=\"It's a secret!\"&gt;&lt;/ion-input&gt;\r\n&lt;/app-show-hide-password&gt;\r\n</pre>\r\n    <app-show-hide-password>\r\n      <ion-input type=\"password\" placeholder=\"Try setting a password\" value=\"It's a secret!\"></ion-input>\r\n    </app-show-hide-password>\r\n  </section>\r\n\r\n  <ion-item-divider sticky=\"true\">\r\n    <ion-label>Countdown Timer</ion-label>\r\n  </ion-item-divider>\r\n  <section class=\"showcase-section\">\r\n    <p>\r\n      This components shows the remaining time (in days, hours, minutes or seconds) to a given date.\r\n    </p>\r\n    <p>\r\n      A few examples on how to use this component:\r\n    </p>\r\n    <h5>From days to seconds</h5>\r\n<pre>\r\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'day', to: 'second'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\r\n</pre>\r\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'day', to: 'second'}\"></app-countdown-timer>\r\n    <h5>From days to minutes</h5>\r\n<pre>\r\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'day', to: 'minute'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\r\n</pre>\r\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'day', to: 'minute'}\"></app-countdown-timer>\r\n    <h5>From hours to seconds</h5>\r\n<pre>\r\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'hour', to: 'second'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\r\n</pre>\r\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\r\n    <h5>From hours to minutes</h5>\r\n<pre>\r\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'hour', to: 'minute'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\r\n</pre>\r\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'minute'}\"></app-countdown-timer>\r\n    <h5>From minutes to seconds</h5>\r\n<pre>\r\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'minute', to: 'second'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\r\n</pre>\r\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'minute', to: 'second'}\"></app-countdown-timer>\r\n    <h5>Just days</h5>\r\n<pre>\r\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'day', to: 'day'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\r\n</pre>\r\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'day', to: 'day'}\"></app-countdown-timer>\r\n    <h5>Just hours</h5>\r\n<pre>\r\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'hour', to: 'hour'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\r\n</pre>\r\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'hour'}\"></app-countdown-timer>\r\n    <h5>Just minutes</h5>\r\n<pre>\r\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'minute', to: 'minute'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\r\n</pre>\r\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'minute', to: 'minute'}\"></app-countdown-timer>\r\n    <h5>Just seconds</h5>\r\n<pre>\r\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'second', to: 'second'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\r\n</pre>\r\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'second', to: 'second'}\"></app-countdown-timer>\r\n  </section>\r\n  <section class=\"showcase-section\">\r\n    <h2>Styling</h2>\r\n    <p>\r\n      You can change different properties to adjust the look and feel of the component.\r\n    </p>\r\n    <h5>Fill</h5>\r\n<pre>\r\napp-countdown-timer &#123;\r\n  --countdown-fill-border: none;\r\n  --countdown-fill-border-radius: 10px;\r\n  --countdown-fill-background: #FFFFFF;\r\n  --countdown-fill-shadow: 0px 0px 5px 0px rgba(0,0,0, 0.2);\r\n&#125;\r\n</pre>\r\n    <app-countdown-timer style=\"\r\n      background-color: transparent;\r\n      --countdown-padding: 10px;\r\n      --countdown-fill-border: none;\r\n      --countdown-fill-border-radius: 10px;\r\n      --countdown-fill-background: #FFFFFF;\r\n      --countdown-fill-shadow: 0px 0px 5px 0px rgba(0,0,0, 0.2);\r\n    \" fill=\"countdown\" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\r\n    <h5>Color</h5>\r\n<pre>\r\napp-countdown-timer &#123;\r\n  --countdown-fill-background: #000000;\r\n  --countdown-value-color: #FFFFFF;\r\n  --countdown-unit-color: #F2F2F2;\r\n&#125;\r\n</pre>\r\n    <app-countdown-timer style=\"\r\n      --countdown-fill-background: #000000;\r\n      --countdown-padding: 10px;\r\n      --countdown-value-color: #FFFFFF;\r\n      --countdown-unit-color: #F2F2F2;\r\n    \" fill=\"countdown\" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\r\n    <h5>Margins & Paddings</h5>\r\n<pre>\r\napp-countdown-timer &#123;\r\n  --countdown-margin: 0px;\r\n  --countdown-padding: 0px;\r\n  --countdown-time-margin: 0px;\r\n  --countdown-time-padding: 0px;\r\n  --countdown-inner-time-margin: 2px;\r\n  --countdown-inner-time-padding: 0px;\r\n&#125;\r\n</pre>\r\n    <h5>Time unit positioning</h5>\r\n    <p>\r\n      Time units to the right (default)\r\n    </p>\r\n<pre>\r\napp-countdown-timer &#123;\r\n  --countdown-time-flex-direction: row-reverse;\r\n&#125;\r\n</pre>\r\n    <app-countdown-timer style=\"\r\n      --countdown-time-flex-direction: row-reverse;\r\n    \" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'hour'}\"></app-countdown-timer>\r\n    <p>\r\n      Time units to the left\r\n    </p>\r\n<pre>\r\napp-countdown-timer &#123;\r\n  --countdown-time-flex-direction: row;\r\n&#125;\r\n</pre>\r\n    <app-countdown-timer style=\"\r\n      --countdown-time-flex-direction: row;\r\n    \" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'hour'}\"></app-countdown-timer>\r\n    <p>\r\n      Time units above\r\n    </p>\r\n<pre>\r\napp-countdown-timer &#123;\r\n  --countdown-time-flex-direction: column;\r\n&#125;\r\n</pre>\r\n    <app-countdown-timer style=\"\r\n      --countdown-time-flex-direction: column;\r\n    \" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'hour'}\"></app-countdown-timer>\r\n    <p>\r\n      Time units below\r\n    </p>\r\n<pre>\r\napp-countdown-timer &#123;\r\n  --countdown-time-flex-direction: column-reverse;\r\n&#125;\r\n</pre>\r\n    <app-countdown-timer style=\"\r\n      --countdown-time-flex-direction: column-reverse;\r\n    \" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'hour'}\"></app-countdown-timer>\r\n    <p>\r\n      This component can be configured with different fill modes (by default, no fill will be applied).\r\n    </p>\r\n    <h5>Fill: Entire Countdown</h5>\r\n<pre>\r\n&lt;app-countdown-timer <b>fill=\"countdown\"</b> [end]=\"countdownDate\" [units]=\"&#123;from: 'hour', to: 'second'&#125;\"&gt;&lt;/app-countdown-timer&gt;\r\n</pre>\r\n    <app-countdown-timer style=\"\r\n    background-color: transparent;\r\n    --countdown-padding: 10px;\r\n    --countdown-fill-border: none;\r\n    --countdown-fill-border-radius: 10px;\r\n    --countdown-fill-background: #FFFFFF;\r\n    --countdown-fill-shadow: 0px 0px 5px 0px rgba(0,0,0, 0.2);\r\n    \" fill=\"countdown\" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\r\n    <h5>Fill: Time wrapper</h5>\r\n<pre>\r\n&lt;app-countdown-timer <b>fill=\"time\"</b> [end]=\"countdownDate\" [units]=\"&#123;from: 'hour', to: 'second'&#125;\"&gt;&lt;/app-countdown-timer&gt;\r\n</pre>\r\n    <app-countdown-timer style=\"\r\n    background-color: transparent;\r\n    --countdown-padding: 10px;\r\n    --countdown-time-margin: 0px 10px;\r\n    --countdown-time-padding: 10px 0px;\r\n    --countdown-fill-border: none;\r\n    --countdown-fill-border-radius: 10px;\r\n    --countdown-fill-background: #FFFFFF;\r\n    --countdown-fill-shadow: 0px 0px 5px 0px rgba(0,0,0, 0.2);\r\n    \" fill=\"time\" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\r\n    <h5>Fill: Inner Time Value</h5>\r\n<pre>\r\n&lt;app-countdown-timer <b>fill=\"inner-time\"</b> [end]=\"countdownDate\" [units]=\"&#123;from: 'hour', to: 'second'&#125;\"&gt;&lt;/app-countdown-timer&gt;\r\n</pre>\r\n    <app-countdown-timer style=\"\r\n    background-color: transparent;\r\n    --countdown-padding: 10px;\r\n    --countdown-inner-time-margin: 5px;\r\n    --countdown-inner-time-padding: 10px;\r\n    --countdown-fill-border: none;\r\n    --countdown-fill-border-radius: 10px;\r\n    --countdown-fill-background: #FFFFFF;\r\n    --countdown-fill-shadow: 0px 0px 5px 0px rgba(0,0,0, 0.2);\r\n    \" fill=\"inner-time\" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\r\n  </section>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/showcase/custom-components/custom-components.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/showcase/custom-components/custom-components.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase-content {\n  --background: var(--app-background-shade); }\n  .showcase-content ion-item-divider {\n    --background: var(--ion-color-secondary);\n    --color: var(--ion-color-lightest);\n    text-transform: uppercase;\n    font-weight: 500;\n    letter-spacing: 1px; }\n  .showcase-content .showcase-section {\n    margin: 20px 20px 100px; }\n  .showcase-content pre {\n    font-size: 14px;\n    background: #CCC;\n    padding: 10px; }\n  .showcase-content code {\n    color: #F92672;\n    font-weight: 500; }\n  .showcase-content .custom-checkbox {\n    background: #CCC;\n    color: #000;\n    padding: 20px;\n    display: flex;\n    align-items: center; }\n  .showcase-content .custom-checkbox ion-label {\n      -webkit-margin-start: 10px;\n              margin-inline-start: 10px; }\n  .showcase-content .custom-checkbox.checkbox-checked {\n      background: #00AFFF;\n      color: #FFF; }\n  .showcase-content app-countdown-timer {\n    padding: 20px;\n    margin-bottom: 40px;\n    background-color: #FFF; }\n  .showcase-content app-show-hide-password {\n    background-color: #FFF;\n    padding: 0px 15px; }\n  .showcase-content app-show-hide-password ion-input {\n      --padding-start: 0px;\n      --padding-end: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd2Nhc2UvY3VzdG9tLWNvbXBvbmVudHMvQzpcXFByb2plY3RzXFxBcHBsaWNhdGlvbnNcXGlvbmljNC1mdWxsLXN0YXJ0ZXItYXBwLTEuMi9zcmNcXGFwcFxcc2hvd2Nhc2VcXGN1c3RvbS1jb21wb25lbnRzXFxjdXN0b20tY29tcG9uZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBYSxFQUFBO0VBRGY7SUFJSSx3Q0FBYTtJQUNiLGtDQUFRO0lBQ1IseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQTtFQVJ2QjtJQVlJLHVCQUF1QixFQUFBO0VBWjNCO0lBZ0JJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYSxFQUFBO0VBbEJqQjtJQXNCSSxjQUFjO0lBQ2QsZ0JBQWdCLEVBQUE7RUF2QnBCO0lBMkJJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUIsRUFBQTtFQS9CdkI7TUFrQ00sMEJBQXlCO2NBQXpCLHlCQUF5QixFQUFBO0VBbEMvQjtNQXNDTSxtQkFBbUI7TUFDbkIsV0FBVyxFQUFBO0VBdkNqQjtJQTRDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQixFQUFBO0VBOUMxQjtJQWtESSxzQkFBc0I7SUFDdEIsaUJBQWlCLEVBQUE7RUFuRHJCO01Bc0RNLG9CQUFnQjtNQUNoQixrQkFBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hvd2Nhc2UvY3VzdG9tLWNvbXBvbmVudHMvY3VzdG9tLWNvbXBvbmVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3djYXNlLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xyXG5cclxuICBpb24taXRlbS1kaXZpZGVyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIH1cclxuXHJcbiAgLnNob3djYXNlLXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMTAwcHg7XHJcbiAgfVxyXG5cclxuICBwcmUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0NDQztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBjb2RlIHtcclxuICAgIGNvbG9yOiAjRjkyNjcyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tY2hlY2tib3gge1xyXG4gICAgYmFja2dyb3VuZDogI0NDQztcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi5jaGVja2JveC1jaGVja2VkIHtcclxuICAgICAgYmFja2dyb3VuZDogIzAwQUZGRjtcclxuICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhcHAtY291bnRkb3duLXRpbWVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICB9XHJcblxyXG4gIGFwcC1zaG93LWhpZGUtcGFzc3dvcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG5cclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/showcase/custom-components/custom-components.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/custom-components/custom-components.page.ts ***!
  \**********************************************************************/
/*! exports provided: CustomComponentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomComponentsPage", function() { return CustomComponentsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomComponentsPage = /** @class */ (function () {
    // Instead of hardcoded one
    // countdownDate = '12/01/2018';
    function CustomComponentsPage() {
        // Relative date (better to showcase UI micro-interactions)
        this.countdownDate = dayjs__WEBPACK_IMPORTED_MODULE_1__().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss');
    }
    CustomComponentsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-showcase-custom-components',
            template: __webpack_require__(/*! ./custom-components.page.html */ "./src/app/showcase/custom-components/custom-components.page.html"),
            styles: [__webpack_require__(/*! ./custom-components.page.scss */ "./src/app/showcase/custom-components/custom-components.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomComponentsPage);
    return CustomComponentsPage;
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
//# sourceMappingURL=custom-components-custom-components-module.js.map