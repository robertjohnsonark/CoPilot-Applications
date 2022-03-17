(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-shell-app-shell-module"],{

/***/ "./src/app/showcase/app-shell/app-shell.module.ts":
/*!********************************************************!*\
  !*** ./src/app/showcase/app-shell/app-shell.module.ts ***!
  \********************************************************/
/*! exports provided: AppShellModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppShellModule", function() { return AppShellModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_shell_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-shell.page */ "./src/app/showcase/app-shell/app-shell.page.ts");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../showcase.service */ "./src/app/showcase/showcase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _app_shell_page__WEBPACK_IMPORTED_MODULE_7__["AppShellPage"]
    }
];
var AppShellModule = /** @class */ (function () {
    function AppShellModule() {
    }
    AppShellModule = __decorate([
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
                _app_shell_page__WEBPACK_IMPORTED_MODULE_7__["AppShellPage"]
            ],
            providers: [
                _showcase_service__WEBPACK_IMPORTED_MODULE_8__["ShowcaseService"]
            ]
        })
    ], AppShellModule);
    return AppShellModule;
}());



/***/ }),

/***/ "./src/app/showcase/app-shell/app-shell.page.html":
/*!********************************************************!*\
  !*** ./src/app/showcase/app-shell/app-shell.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      App Shell Components\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"showcase-content\">\r\n  <ion-item-divider sticky=\"true\">\r\n    <ion-label>Aspect Ratio</ion-label>\r\n  </ion-item-divider>\r\n  <section class=\"showcase-section\">\r\n    <p>\r\n      The <code>&lt;app-aspect-ratio&gt;</code> is a simple component that ensures a block will maintain the specified aspect ratio.\r\n    </p>\r\n    <p>\r\n      It uses an <a href=\"http://stackoverflow.com/a/10441480/1116959\" target=\"_blank\">old CSS technique</a> to adjust the height of the element based on its width (using padding-bottom).\r\n    </p>\r\n    <p>\r\n      This is a very handy component to prevent content from jumping around while the page is loading.\r\n    </p>\r\n    <p>\r\n      <b>Note:</b> The <code>&lt;app-aspect-ratio&gt;</code> component must be surrounded by a container element with a defined width, as this component will fill the parent width.\r\n    </p>\r\n<pre>\r\n<b>&lt;div style=\"width:80%; margin: 0px auto;\"&gt;</b>\r\n  &lt;app-aspect-ratio [ratio]=\"&#123;w:2, h:1&#125;\"&gt;\r\n    &lt;span&gt;This container will always have a 2:1 aspect ratio&lt;/span&gt;\r\n  &lt;/app-aspect-ratio&gt;\r\n<b>&lt;/div&gt;</b>\r\n</pre>\r\n    <div style=\"width:80%; margin: 0px auto;\">\r\n      <app-aspect-ratio [ratio]=\"{w:2, h:1}\" style=\"background-color: #00AFFF;\">\r\n        <span style=\"margin: 10px; display: block;\">This container will always have a <b>2:1</b> aspect ratio</span>\r\n      </app-aspect-ratio>\r\n    </div>\r\n  </section>\r\n\r\n  <ion-item-divider sticky=\"true\">\r\n    <ion-label>Image Shell</ion-label>\r\n  </ion-item-divider>\r\n  <section class=\"showcase-section\">\r\n    <p>\r\n      This component enables to preload an image with an elegant shell.\r\n    </p>\r\n  </section>\r\n  <section class=\"showcase-section\">\r\n    <h5>Set different animation options</h5>\r\n    <p>\r\n      You can choose between <b>no animation</b> (default), <b>spinner animation</b>, and <b>gradient background</b> animation\r\n    </p>\r\n    <h4>No animation (default)</h4>\r\n<pre>\r\n&lt;app-image-shell [src]=\"\" [alt]=\"\"&gt;&lt;/app-image-shell&gt;\r\n</pre>\r\n    <div style=\"width:30%; margin: 0px auto;\">\r\n      <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\r\n        <app-image-shell [src]=\"\" [alt]=\"\"></app-image-shell>\r\n      </app-aspect-ratio>\r\n    </div>\r\n    <h4>Spinner animation</h4>\r\n<pre>\r\n&lt;app-image-shell <b>animation=\"spinner\"</b> [src]=\"\" [alt]=\"\"&gt;&lt;/app-image-shell&gt;\r\n</pre>\r\n    <div style=\"width:30%; margin: 0px auto;\">\r\n      <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\r\n        <app-image-shell animation=\"spinner\" [src]=\"\" [alt]=\"\"></app-image-shell>\r\n      </app-aspect-ratio>\r\n    </div>\r\n    <h4>Gradient animation</h4>\r\n<pre>\r\n&lt;app-image-shell <b>animation=\"gradient\"</b> [src]=\"\" [alt]=\"\"&gt;&lt;/app-image-shell&gt;\r\n</pre>\r\n    <div style=\"width:30%; margin: 0px auto;\">\r\n      <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\r\n        <app-image-shell animation=\"gradient\" [src]=\"\" [alt]=\"\"></app-image-shell>\r\n      </app-aspect-ratio>\r\n    </div>\r\n  </section>\r\n  <section class=\"showcase-section\">\r\n    <p>\r\n      You can add/remove the following <b>Classes</b> to adjust the shell element behavior:\r\n    </p>\r\n    <h5>Overlay</h5>\r\n    <p>\r\n      This class adds a background overlay after the image has loaded.\r\n    </p>\r\n<pre>\r\n&lt;app-image-shell animation=\"spinner\" <b>class=\"add-overlay\"</b> [src]=\"''./assets/sample-images/travel/Travel2-64.47.png''\" [alt]=\"\"&gt;&lt;/app-image-shell&gt;\r\n</pre>\r\n    <div style=\"width:30%; margin: 0px auto;\">\r\n      <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\r\n        <app-image-shell animation=\"spinner\" class=\"add-overlay\" [src]=\"'./assets/sample-images/travel/Travel2-64.47.png'\" [alt]=\"\"></app-image-shell>\r\n      </app-aspect-ratio>\r\n    </div>\r\n  </section>\r\n  <section class=\"showcase-section\">\r\n    <p>\r\n      You can also override these <b>CSS 4 variables</b> to adjust the shell element style\r\n    </p>\r\n    <h5>Background</h5>\r\n<pre>\r\napp-image-shell &#123;\r\n  --image-shell-loading-background: rgba(233, 30, 99, .25);\r\n&#125;\r\n</pre>\r\n    <div style=\"width:30%; margin: 0px auto;\">\r\n      <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\r\n        <app-image-shell style=\"--image-shell-loading-background: rgba(233, 30, 99, .25);\" [src]=\"\" [alt]=\"\"></app-image-shell>\r\n      </app-aspect-ratio>\r\n    </div>\r\n    <h5>Overlay</h5>\r\n<pre>\r\napp-image-shell &#123;\r\n  --image-shell-overlay-background: rgba(103, 58, 183, .40);\r\n&#125;\r\n</pre>\r\n    <div style=\"width:30%; margin: 0px auto;\">\r\n      <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\r\n        <app-image-shell style=\"--image-shell-overlay-background: rgba(103, 58, 183, .40);\" animation=\"spinner\" class=\"add-overlay\" [src]=\"'./assets/sample-images/travel/Travel2-64.47.png'\" [alt]=\"\"></app-image-shell>\r\n      </app-aspect-ratio>\r\n    </div>\r\n    <h5>Spinner</h5>\r\n<pre>\r\napp-image-shell &#123;\r\n  --image-shell-spinner-size: 40px;\r\n  --image-shell-spinner-color: #000000;\r\n&#125;\r\n</pre>\r\n    <div style=\"width:30%; margin: 0px auto;\">\r\n      <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\r\n        <app-image-shell style=\"--image-shell-spinner-size: 40px; --image-shell-spinner-color: #000000;\" animation=\"spinner\" [src]=\"\" [alt]=\"\"></app-image-shell>\r\n      </app-aspect-ratio>\r\n    </div>\r\n    <h5>Background Animation</h5>\r\n    <p>\r\n      <b>Note:</b> These properties are only applied when using <code>animation=\"gradient\"</code>.\r\n    </p>\r\n<pre>\r\napp-image-shell &#123;\r\n  --image-shell-loading-background: rgba(255, 3, 109, 0.6);\r\n  --image-shell-animation-color: rgba(156, 4, 68, 0.7);\r\n&#125;\r\n</pre>\r\n    <div style=\"width:30%; margin: 0px auto;\">\r\n      <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\r\n        <app-image-shell style=\"\r\n          --image-shell-loading-background: rgba(255, 3, 109, 0.6);\r\n          --image-shell-animation-color: rgba(156, 4, 68, 0.7);\r\n        \" animation=\"gradient\" [src]=\"\" [alt]=\"\"></app-image-shell>\r\n      </app-aspect-ratio>\r\n    </div>\r\n    <h5>Border Radius</h5>\r\n<pre>\r\napp-image-shell &#123;\r\n  --image-shell-border-radius: 10px;\r\n&#125;\r\n</pre>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div style=\"width:80%; margin: 0px auto;\">\r\n          <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\r\n            <app-image-shell style=\"--image-shell-border-radius: 10px;\" animation=\"spinner\" [src]=\"\" [alt]=\"\"></app-image-shell>\r\n          </app-aspect-ratio>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div style=\"width:80%; margin: 0px auto;\">\r\n          <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\r\n            <app-image-shell style=\"--image-shell-border-radius: 10px;\" animation=\"gradient\" [src]=\"\" [alt]=\"\"></app-image-shell>\r\n          </app-aspect-ratio>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </section>\r\n  <section class=\"showcase-section\">\r\n    <h2>Cover Image mode</h2>\r\n    <p>\r\n      In addition to the default <code>&lt;app-image-shell&gt;</code>, you can specify a <b>cover</b> mode if you want to display your image as a background-image.\r\n    </p>\r\n    <p>\r\n      This is different from the default mode, because (although it's not mandatory) cover mode is designed to contain content (for example some text)\r\n    </p>\r\n<pre>\r\n<b>&lt;app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"add-overlay\" [src]=\"\"&gt;</b>\r\n  &lt;app-aspect-ratio [ratio]=\"&#123;w:3, h:2&#125;\"&gt;\r\n    Some Text\r\n  &lt;/app-aspect-ratio&gt;\r\n<b>&lt;/app-image-shell&gt;</b>\r\n</pre>\r\n    <app-image-shell class=\"add-overlay\" animation=\"spinner\" [mode]=\"'cover'\" [src]=\"\">\r\n      <app-aspect-ratio [ratio]=\"{w:3, h:2}\">\r\n        <h4 style=\"margin: 10px;\">Some Text on top of a background-image container</h4>\r\n      </app-aspect-ratio>\r\n    </app-image-shell>\r\n  </section>\r\n  <section class=\"showcase-section\">\r\n    <h2>Usage</h2>\r\n    <p>\r\n      Let me explain you the differences between <b>default</b> and <b>cover</b> mode and when you should use each one.\r\n    </p>\r\n    <h5>Default Mode Usage</h5>\r\n    <p>\r\n      You should use the <b>default mode</b> when you are 100% confident on the aspect ratio of an image.\r\n    </p>\r\n    <p>\r\n      If the image ratio does not match the specified aspect ratio, the image will be stretched.\r\n    </p>\r\n    <p>\r\n      <b>Expected behavior:</b>\r\n      <br />\r\n      The image <b>WILL</b> be stretched.\r\n      <br />\r\n      We define an aspect ratio of <b>2:1</b> but the image has an aspect ratio of <b>1:1</b>.\r\n    </p>\r\n    <div style=\"width:80%; margin: 0px auto;\">\r\n      <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\r\n        <app-image-shell animation=\"spinner\" [src]=\"'https://lorempixel.com/200/200/people/1/'\" [alt]=\"\"></app-image-shell>\r\n      </app-aspect-ratio>\r\n    </div>\r\n    <p>\r\n      <b>Expected behavior:</b>\r\n      <br />\r\n      The image <b>WON'T</b> be stretched.\r\n      <br />\r\n      We define an aspect ratio of <b>1:1</b> that matches the image ratio of <b>1:1</b>.\r\n    </p>\r\n    <div style=\"width:80%; margin: 0px auto;\">\r\n      <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\r\n        <app-image-shell animation=\"spinner\" [src]=\"'https://lorempixel.com/200/200/people/1/'\" [alt]=\"\"></app-image-shell>\r\n      </app-aspect-ratio>\r\n    </div>\r\n    <h5>Cover Mode Usage</h5>\r\n    <p>\r\n      You should use the <b>cover mode</b> when you want to fill a container with an image and you don't care if the image is shown completly or a portion of it.\r\n    </p>\r\n    <p>\r\n      If the image ratio does not match the specified aspect ratio, the image will be cropped to fit the available space without stretching the image.\r\n    </p>\r\n    <p>\r\n      <b>Expected behavior:</b>\r\n      <br />\r\n      The image will be cropped to fill the available space.\r\n      <br />\r\n      We define an aspect ratio of <b>2:1</b> but the image has an aspect ratio of <b>1:1</b>.\r\n    </p>\r\n    <div style=\"width:80%; margin: 0px auto;\">\r\n      <app-image-shell animation=\"spinner\" [mode]=\"'cover'\" [src]=\"'https://lorempixel.com/200/200/people/1/'\">\r\n        <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\r\n        </app-aspect-ratio>\r\n      </app-image-shell>\r\n    </div>\r\n    <p>\r\n      You can also change the <b>background-position</b> property to adjust how the image is placed inside the container.\r\n    </p>\r\n    <p>\r\n      <b>Notice:</b> This only applies to <b>cover</b> mode.\r\n    </p>\r\n<pre>\r\napp-image-shell[mode=\"cover\"] &#123;\r\n  background-position: bottom right;\r\n&#125;\r\n</pre>\r\n    <div style=\"width:80%; margin: 0px auto;\">\r\n      <app-image-shell style=\"background-position: bottom right;\" animation=\"spinner\" [mode]=\"'cover'\" [src]=\"'https://lorempixel.com/200/200/people/1/'\">\r\n        <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\r\n        </app-aspect-ratio>\r\n      </app-image-shell>\r\n    </div>\r\n  </section>\r\n  <section class=\"showcase-section\">\r\n    <h2>Maintain Aspect Ratio</h2>\r\n    <p>\r\n      We use the handy <code>&lt;app-aspect-ratio&gt;</code> to ensure the image shell mantains a specified aspect ratio.\r\n    </p>\r\n    <p>\r\n      By doing so, we prevent content from jumping around the page while assets (images) are loading.\r\n    </p>\r\n    <h5>Default mode</h5>\r\n    <p>\r\n      Just surround the <code>&lt;app-image-shell&gt;</code> with an <code>&lt;app-aspect-ratio&gt;</code> element\r\n    </p>\r\n<pre>\r\n<b>&lt;app-aspect-ratio [ratio]=\"&#123;w:3, h:2&#125;\"&gt;</b>\r\n  &lt;app-image-shell animation=\"spinner\" [src]=\"\" [alt]=\"\"&gt;&lt;/app-image-shell&gt;\r\n<b>&lt;/app-aspect-ratio&gt;</b>\r\n</pre>\r\n    <div style=\"width:60%; margin: 0px auto;\">\r\n      <app-aspect-ratio [ratio]=\"{w:3, h:2}\">\r\n        <app-image-shell animation=\"spinner\" [src]=\"\" [alt]=\"\"></app-image-shell>\r\n      </app-aspect-ratio>\r\n    </div>\r\n    <h5>Cover mode</h5>\r\n    <p>\r\n      When using the <b>cover</b> mode we need to include the <code>&lt;app-aspect-ratio&gt;</code> inside the <code>&lt;app-image-shell&gt;</code> element instead of surrounding it.\r\n    </p>\r\n<pre>\r\n&lt;app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"add-overlay\" [src]=\"\"&gt;\r\n  <b>&lt;app-aspect-ratio [ratio]=\"&#123;w:3, h:2&#125;\"&gt;</b>\r\n    Some Text\r\n  <b>&lt;/app-aspect-ratio&gt;</b>\r\n&lt;/app-image-shell&gt;\r\n</pre>\r\n    <app-image-shell animation=\"spinner\" class=\"add-overlay\" [mode]=\"'cover'\" [src]=\"\">\r\n      <app-aspect-ratio [ratio]=\"{w:3, h:2}\">\r\n        <h4 style=\"margin: 10px;\">Some Text on top of a background-image container</h4>\r\n      </app-aspect-ratio>\r\n    </app-image-shell>\r\n  </section>\r\n\r\n  <ion-item-divider sticky=\"true\">\r\n    <ion-label>Text Shell</ion-label>\r\n  </ion-item-divider>\r\n  <section class=\"showcase-section\">\r\n    <p>\r\n      This component is useful when you want to show a loading indicator while fetching text data from the server.\r\n    </p>\r\n    <p>\r\n      The <code>&lt;app-text-shell&gt;</code> basically works by wrapping the text node with a loading indicator while you are fetching data.\r\n    </p>\r\n    <p>\r\n      While there are empty values the component adds some 'loading' styles and animations. Whereas while there are non empty values, the loading state is removed.\r\n    </p>\r\n    <p>\r\n      Try toggling the loading state of the text shells below by changing the value of this textarea.\r\n    </p>\r\n    <ion-textarea style=\"--background: #EEE;\" placeholder=\"When this text is empty the text-shell will show the loading state.\" clearOnEdit=\"true\" [(ngModel)]=\"sampleTextShellData\"></ion-textarea>\r\n    <p>\r\n      You can reset the 'loading' state by clearing the textarea value.\r\n    </p>\r\n  </section>\r\n  <section class=\"showcase-section\">\r\n    <h4>No animation (default)</h4>\r\n    <p>\r\n      Single line example\r\n    </p>\r\n    <div style=\"background-color: #FFF; padding: 20px;\">\r\n      <app-text-shell [data]=\"sampleTextShellData\"></app-text-shell>\r\n    </div>\r\n    <p>\r\n      Multi-line example\r\n    </p>\r\n    <div style=\"background-color: #FFF; padding: 20px;\">\r\n      <p>\r\n        <app-text-shell [data]=\"sampleTextShellData\" lines=\"3\"></app-text-shell>\r\n      </p>\r\n    </div>\r\n    <p>\r\n      On top of another element (with transparent background)\r\n    </p>\r\n    <div style=\"background-color: #FFF; padding: 20px; color: #FFF; font-weight: 500;\">\r\n      <app-image-shell animation=\"spinner\" class=\"add-overlay\" [mode]=\"'cover'\" [src]=\"'https://lorempixel.com/400/200/abstract/1/'\">\r\n        <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\r\n          <p style=\"margin: 20px 40px;\">\r\n            <app-text-shell [data]=\"sampleTextShellData\" lines=\"3\"></app-text-shell>\r\n          </p>\r\n        </app-aspect-ratio>\r\n      </app-image-shell>\r\n    </div>\r\n  </section>\r\n  <section class=\"showcase-section\">\r\n    <h4>Bouncing animation</h4>\r\n    <p>\r\n      Single line example\r\n    </p>\r\n    <div style=\"background-color: #FFF; padding: 20px;\">\r\n      <app-text-shell [data]=\"sampleTextShellData\" animation=\"bouncing\"></app-text-shell>\r\n    </div>\r\n    <p>\r\n      Multi-line example\r\n    </p>\r\n    <div style=\"background-color: #FFF; padding: 20px;\">\r\n      <p>\r\n        <app-text-shell [data]=\"sampleTextShellData\" animation=\"bouncing\" lines=\"3\"></app-text-shell>\r\n      </p>\r\n    </div>\r\n    <p>\r\n      On top of another element (with transparent background)\r\n    </p>\r\n    <div style=\"background-color: #FFF; padding: 20px; color: #FFF; font-weight: 500;\">\r\n      <app-image-shell animation=\"spinner\" class=\"add-overlay\" [mode]=\"'cover'\" [src]=\"'https://lorempixel.com/400/200/nature/1/'\">\r\n        <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\r\n          <p style=\"margin: 20px 40px;\">\r\n            <app-text-shell [data]=\"sampleTextShellData\" animation=\"bouncing\" lines=\"3\"></app-text-shell>\r\n          </p>\r\n        </app-aspect-ratio>\r\n      </app-image-shell>\r\n    </div>\r\n  </section>\r\n  <section class=\"showcase-section\">\r\n    <h4>Gradient animation</h4>\r\n    <p>\r\n      Single line example\r\n    </p>\r\n    <div style=\"background-color: #FFF; padding: 20px;\">\r\n      <app-text-shell [data]=\"sampleTextShellData\" animation=\"gradient\"></app-text-shell>\r\n    </div>\r\n    <p>\r\n      Multi-line example\r\n    </p>\r\n    <div style=\"background-color: #FFF; padding: 20px;\">\r\n      <p>\r\n        <app-text-shell [data]=\"sampleTextShellData\" animation=\"gradient\" lines=\"3\"></app-text-shell>\r\n      </p>\r\n    </div>\r\n    <p>\r\n      On top of another element (with transparent background)\r\n    </p>\r\n    <div style=\"background-color: #FFF; padding: 20px; color: #FFF; font-weight: 500;\">\r\n      <app-image-shell animation=\"spinner\" class=\"add-overlay\" [mode]=\"'cover'\" [src]=\"'https://lorempixel.com/400/200/city/1/'\">\r\n        <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\r\n          <p style=\"margin: 20px 40px;\">\r\n            <app-text-shell [data]=\"sampleTextShellData\" animation=\"gradient\" lines=\"3\"></app-text-shell>\r\n          </p>\r\n        </app-aspect-ratio>\r\n      </app-image-shell>\r\n    </div>\r\n  </section>\r\n  <section class=\"showcase-section\">\r\n    <h4>Other use cases</h4>\r\n    <p>\r\n      The <code>&lt;app-text-shell&gt;</code> element can be used alone or wrapped with a text tag (<b>h1</b>, <b>h2</b>, <b>h3</b>, <b>p</b>, etc).\r\n    </p>\r\n    <p>\r\n      In case you wrap it with a heading element, we included basic styles (<code>src/theme/shell-defaults.scss</code>) to match the different heading styles (mainly line-height associated to each heading).\r\n    </p>\r\n<pre>\r\n:root &#123;\r\n  h1 > app-text-shell &#123;\r\n    --text-shell-line-height: 32px;\r\n    --text-shell-line-color: #CCC;\r\n  &#125;\r\n&#125;\r\n</pre>\r\n    <p>\r\n      By matching the line-height of the text-shell with the line-height of the wrapper element, we avoid page height bumps after the data gets loaded into the shells.\r\n    </p>\r\n<pre>\r\n&lt;h1&gt;\r\n  &lt;app-text-shell [data]=\"\"&gt;&lt;/app-text-shell&gt;\r\n&lt;/h1&gt;\r\n\r\n&lt;h2&gt;\r\n  &lt;app-text-shell [data]=\"\"&gt;&lt;/app-text-shell&gt;\r\n&lt;/h2&gt;\r\n\r\n&lt;h3&gt;\r\n  &lt;app-text-shell [data]=\"\"&gt;&lt;/app-text-shell&gt;\r\n&lt;/h3&gt;\r\n\r\n&lt;h4&gt;\r\n  &lt;app-text-shell [data]=\"\"&gt;&lt;/app-text-shell&gt;\r\n&lt;/h4&gt;\r\n\r\n&lt;h5&gt;\r\n  &lt;app-text-shell [data]=\"\"&gt;&lt;/app-text-shell&gt;\r\n&lt;/h5&gt;\r\n</pre>\r\n    <h1>\r\n      <app-text-shell [data]=\"\"></app-text-shell>\r\n    </h1>\r\n    <h2>\r\n      <app-text-shell [data]=\"\"></app-text-shell>\r\n    </h2>\r\n    <h3>\r\n      <app-text-shell [data]=\"\"></app-text-shell>\r\n    </h3>\r\n    <h4>\r\n      <app-text-shell [data]=\"\"></app-text-shell>\r\n    </h4>\r\n    <h5>\r\n      <app-text-shell [data]=\"\"></app-text-shell>\r\n    </h5>\r\n  </section>\r\n  <section class=\"showcase-section\">\r\n    <p>\r\n      You can add/remove the following <b>Attributes</b> to adjust the shell element behavior\r\n    </p>\r\n    <h5>Multi-line support</h5>\r\n    <p>\r\n      You can set up-to 6 lines\r\n    </p>\r\n<pre>\r\n&lt;p&gt;\r\n  &lt;app-text-shell <b>lines=\"6\"</b> [data]=\"\"&gt;&lt;/app-text-shell&gt;\r\n&lt;/p&gt;\r\n</pre>\r\n    <p>\r\n      <app-text-shell style=\"--text-shell-line-color: #DDD;\" [data]=\"\" lines=\"6\"></app-text-shell>\r\n    </p>\r\n    <h5>Set different animation options</h5>\r\n    <p>\r\n      You can choose between <b>no animation</b> (default), <b>bouncing animation</b>, and <b>gradient background with line masks on top</b>\r\n    </p>\r\n<pre>\r\n&lt;p&gt;\r\n  &lt;app-text-shell <b>animation=\"bouncing\"</b> lines=\"2\" [data]=\"\"&gt;&lt;/app-text-shell&gt;\r\n&lt;/p&gt;\r\n</pre>\r\n    <p>\r\n      <app-text-shell style=\"--text-shell-line-color: #DDD;\" [data]=\"\" animation=\"bouncing\" lines=\"2\"></app-text-shell>\r\n    </p>\r\n<pre>\r\n&lt;p&gt;\r\n  &lt;app-text-shell <b>animation=\"gradient\"</b> lines=\"2\" [data]=\"\"&gt;&lt;/app-text-shell&gt;\r\n&lt;/p&gt;\r\n</pre>\r\n<pre>\r\napp-text-shell &#123;\r\n  --text-shell-background: #FFF;\r\n  --text-shell-line-color: transparent;\r\n&#125;\r\n</pre>\r\n    <p style=\"padding: 5px; background: #FFF;\">\r\n      <app-text-shell style=\"--text-shell-line-color: transparent; --text-shell-background: #FFF;\" [data]=\"\" animation=\"gradient\" lines=\"2\"></app-text-shell>\r\n    </p>\r\n    <p>\r\n      In this mode, the <code>--text-shell-background</code> property refers to the masks colors.\r\n    </p>\r\n    <p>\r\n      <b>Note:</b> When using a <code>gradient</code> animation, make sure you set the line-color to transparent so the background animation that's beneath the masks can be seen.\r\n    </p>\r\n  </section>\r\n  <section class=\"showcase-section\">\r\n    <p>\r\n      You can also override these <b>CSS 4 variables</b> to adjust the shell element style\r\n    </p>\r\n    <h5>Line color</h5>\r\n<pre>\r\napp-text-shell &#123;\r\n  --text-shell-line-color: rgba(233, 30, 99, .25);\r\n&#125;\r\n</pre>\r\n    <h3>\r\n      <app-text-shell style=\"--text-shell-line-color: rgba(233, 30, 99, .25);\" [data]=\"\"></app-text-shell>\r\n    </h3>\r\n    <h5>Background</h5>\r\n    <p>\r\n      Background by default is set to <b>transparent</b>.\r\n    </p>\r\n<pre>\r\napp-text-shell &#123;\r\n  --text-shell-line-color: #FFFFFF;\r\n  --text-shell-background: #000000;\r\n&#125;\r\n</pre>\r\n    <p style=\"padding: 5px; background: #000000;\">\r\n      <app-text-shell style=\"--text-shell-line-color: #FFFFFF; --text-shell-background: #000000;\" [data]=\"\" lines=\"3\"></app-text-shell>\r\n    </p>\r\n    <h5>Background Animation</h5>\r\n    <p>\r\n      <b>Note:</b> These properties are only applied when using <code>animation=\"gradient\"</code>.\r\n    </p>\r\n<pre>\r\napp-text-shell &#123;\r\n  --text-shell-line-color: transparent;\r\n  --text-shell-background: #000000;\r\n  --text-shell-animation-background: rgba(255, 3, 109, 0.6);\r\n  --text-shell-animation-color: rgba(156, 4, 68, 0.7);\r\n&#125;\r\n</pre>\r\n    <p style=\"padding: 5px; background: #000000;\">\r\n      <app-text-shell style=\"\r\n        --text-shell-line-color: transparent;\r\n        --text-shell-background: #000000;\r\n        --text-shell-animation-background: rgba(255, 3, 109, 0.6);\r\n        --text-shell-animation-color: rgba(156, 4, 68, 0.7);\r\n      \" [data]=\"\" lines=\"3\" animation=\"gradient\"></app-text-shell>\r\n    </p>\r\n    <h5>Line height</h5>\r\n<pre>\r\napp-text-shell &#123;\r\n  --text-shell-line-height: 40px;\r\n&#125;\r\n</pre>\r\n    <h3>\r\n      <app-text-shell style=\"--text-shell-line-height: 40px;\" [data]=\"\"></app-text-shell>\r\n    </h3>\r\n    <h5>Line gutter</h5>\r\n<pre>\r\napp-text-shell &#123;\r\n  --text-shell-line-gutter: 10px;\r\n&#125;\r\n</pre>\r\n    <p>\r\n      <app-text-shell style=\"--text-shell-line-gutter: 10px; --text-shell-line-color: #CCC;\" [data]=\"\" lines=\"4\"></app-text-shell>\r\n    </p>\r\n  </section>\r\n\r\n  <ion-item-divider sticky=\"true\">\r\n    <ion-label>Binding Data to Shell Elements</ion-label>\r\n  </ion-item-divider>\r\n  <section class=\"showcase-section\">\r\n    <p>\r\n      You can combine the different shell elements in multiple ways to fit your needs\r\n    </p>\r\n    <ion-row style=\"background-color: #FFF; padding: 10px; margin: 20px;\">\r\n      <ion-col size=\"12\">\r\n        <app-image-shell animation=\"spinner\" class=\"add-overlay\" [mode]=\"'cover'\" [src]=\"\">\r\n          <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\r\n            <h4 style=\"margin: 10px; text-align: center;\">Text on top of a background-image container</h4>\r\n          </app-aspect-ratio>\r\n        </app-image-shell>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\r\n          <app-image-shell animation=\"spinner\" [src]=\"\" [alt]=\"'Sample Image'\"></app-image-shell>\r\n        </app-aspect-ratio>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <h3 style=\"margin-top: 0px;\">\r\n          <app-text-shell [data]=\"\"></app-text-shell>\r\n        </h3>\r\n        <p>\r\n          <app-text-shell [data]=\"\" lines=\"3\"></app-text-shell>\r\n        </p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </section>\r\n  <section class=\"showcase-section\">\r\n    <h5>Fetch data with the HttpClient</h5>\r\n    <p>\r\n      Let's set a timeout and fetch data using the <code>HttpClient</code>\r\n    </p>\r\n    <p>\r\n      Data coming in <b>{{ simpleFetchCountdown }} seconds</b>\r\n    </p>\r\n    <ion-row style=\"background-color: #FFF; padding: 10px; margin: 20px;\">\r\n      <ion-col size=\"12\">\r\n        <app-image-shell animation=\"gradient\" class=\"add-overlay\" [mode]=\"'cover'\" [src]=\"simpleFetchData?.cover\" [alt]=\"'Sample Image Cover'\">\r\n          <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\r\n            <h4 style=\"margin: 10px; text-align: center; color: #FFF;\">Heading on top of a cover image</h4>\r\n          </app-aspect-ratio>\r\n        </app-image-shell>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\r\n          <app-image-shell animation=\"gradient\" [src]=\"simpleFetchData?.image\" [alt]=\"'Sample Image'\"></app-image-shell>\r\n        </app-aspect-ratio>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <h3 style=\"margin-top: 0px;\">\r\n          <app-text-shell animation=\"gradient\" [data]=\"simpleFetchData?.title\"></app-text-shell>\r\n        </h3>\r\n        <p>\r\n          <app-text-shell animation=\"gradient\" [data]=\"simpleFetchData?.description\" lines=\"3\"></app-text-shell>\r\n        </p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-button (click)=\"showcaseShellSimpleFetch(3)\" [disabled]=\"simpleFetchButtonDisabled\">Fetch more Data</ion-button>\r\n  </section>\r\n  <section class=\"showcase-section\">\r\n    <h5>Fetch data using ShellProvider</h5>\r\n    <p>\r\n      Using the <code>ShellProvider</code> utility you can reduce the amount of boilerplate from the previous example and achieve the same behavior.\r\n    </p>\r\n    <ion-row style=\"background-color: #FFF; padding: 10px; margin: 20px;\">\r\n      <ion-col size=\"12\">\r\n        <app-image-shell animation=\"spinner\" class=\"add-overlay\" [mode]=\"'cover'\" [src]=\"(shellProviderData | async)?.cover\" [alt]=\"'Sample Image Cover'\">\r\n          <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\r\n            <h4 style=\"margin: 10px; text-align: center; color: #FFF;\">Heading on top of a cover image</h4>\r\n          </app-aspect-ratio>\r\n        </app-image-shell>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\r\n          <app-image-shell animation=\"spinner\" [src]=\"(shellProviderData | async)?.image\" [alt]=\"'Sample Image'\"></app-image-shell>\r\n        </app-aspect-ratio>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <h3 style=\"margin-top: 0px;\">\r\n          <app-text-shell [data]=\"(shellProviderData | async)?.title\"></app-text-shell>\r\n        </h3>\r\n        <p>\r\n          <app-text-shell [data]=\"(shellProviderData | async)?.description\" lines=\"3\"></app-text-shell>\r\n        </p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-button (click)=\"showcaseShellProvider()\" [disabled]=\"shellProviderButtonDisabled\">Fetch more Data</ion-button>\r\n  </section>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/showcase/app-shell/app-shell.page.scss":
/*!********************************************************!*\
  !*** ./src/app/showcase/app-shell/app-shell.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase-content {\n  --background: var(--app-background); }\n  .showcase-content ion-item-divider {\n    --background: var(--ion-color-secondary);\n    --color: var(--ion-color-lightest);\n    text-transform: uppercase;\n    font-weight: 500;\n    letter-spacing: 1px; }\n  .showcase-content .showcase-section {\n    margin: 20px 20px 100px; }\n  .showcase-content pre {\n    font-size: 14px;\n    background: #CCC;\n    padding: 10px; }\n  .showcase-content code {\n    color: #F92672;\n    font-weight: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL0M6XFxQcm9qZWN0c1xcQXBwbGljYXRpb25zXFxpb25pYzQtZnVsbC1zdGFydGVyLWFwcC0xLjIvc3JjXFxhcHBcXHNob3djYXNlXFxhcHAtc2hlbGxcXGFwcC1zaGVsbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBYSxFQUFBO0VBRGY7SUFJSSx3Q0FBYTtJQUNiLGtDQUFRO0lBQ1IseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQTtFQVJ2QjtJQVlJLHVCQUF1QixFQUFBO0VBWjNCO0lBZ0JJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYSxFQUFBO0VBbEJqQjtJQXNCSSxjQUFjO0lBQ2QsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvYXBwLXNoZWxsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcclxuXHJcbiAgaW9uLWl0ZW0tZGl2aWRlciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB9XHJcblxyXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcclxuICAgIG1hcmdpbjogMjBweCAyMHB4IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgcHJlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJhY2tncm91bmQ6ICNDQ0M7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgY29kZSB7XHJcbiAgICBjb2xvcjogI0Y5MjY3MjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/showcase/app-shell/app-shell.page.ts":
/*!******************************************************!*\
  !*** ./src/app/showcase/app-shell/app-shell.page.ts ***!
  \******************************************************/
/*! exports provided: AppShellPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppShellPage", function() { return AppShellPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils_shell_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/shell-provider */ "./src/app/utils/shell-provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// You can use a plain interface as a shell model
// interface IShell {
//   cover: string;
//   image: string;
//   title: string;
//   description: string;
// }
// You can also use a Class object as a shell model
// import { ShowcaseShellModel } from '../showcase-shell.model';
var AppShellPage = /** @class */ (function () {
    function AppShellPage(http) {
        this.http = http;
        this.sampleTextShellData = '';
        // You can also define the type of the property using the IShell interface or the ShowcaseShellModel class
        // shellProviderData: Observable<IShell>;
        // shellProviderData: Observable<ShowcaseShellModel>;
        // Aux properties for the Simple Fetch (HttpClient) showcase
        this.simpleFetchButtonDisabled = true;
        this.simpleFetchCountdown = 0;
        // Aux properties for the ShellProvider showcase
        this.shellProviderButtonDisabled = true;
    }
    AppShellPage.prototype.ngOnInit = function () {
        this.showcaseShellSimpleFetch(10);
        this.showcaseShellProvider();
    };
    AppShellPage.prototype.showcaseShellSimpleFetch = function (countdown) {
        var _this = this;
        // Assign an (empty / null) value to the shell object to restore it's 'loading' state
        this.simpleFetchData = null;
        // Prevent rage clicks on the 'Fetch more Data' button
        this.simpleFetchButtonDisabled = true;
        // Start a countdown and an interval before executing the fetch function
        this.simpleFetchCountdown = countdown;
        this.simpleFetchInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        // Start a countdown to showcase the shell elements animations for a few seconds before the data get's fetched into the shell object
        var timer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(countdown * 1000);
        // When timer emits after X seconds, complete source
        this.simpleFetchInterval
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(timer$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.simpleFetchButtonDisabled = false; }))
            .subscribe({
            next: function () {
                _this.simpleFetchCountdown--;
            },
            complete: function () {
                _this.simpleFetchCountdown = 0;
                // Once the countdown ends, fetch data using the HttpClient
                // You can also define the type of the property using the IShell interface or the ShowcaseShellModel class
                // this.http.get<IShell>('./assets/sample-data/showcase/shell.json');
                // this.http.get<ShowcaseShellModel>('./assets/sample-data/showcase/shell.json');
                _this.http.get('./assets/sample-data/showcase/shell.json')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1) // Force Observable to complete
                ).subscribe(function (val) {
                    console.log('Fetching shell data using the HttpClient', val);
                    _this.simpleFetchData = val;
                });
            }
        });
    };
    AppShellPage.prototype.showcaseShellProvider = function () {
        var _this = this;
        // Prevent rage clicks on the 'Fetch more Data' button
        this.shellProviderButtonDisabled = true;
        var shellObject = {
            cover: '',
            image: '',
            title: '',
            description: ''
        };
        var shellProvider = new _utils_shell_provider__WEBPACK_IMPORTED_MODULE_4__["ShellProvider"](shellObject, this.http.get('./assets/sample-data/showcase/shell.json')
        // You can also define the type of the property using the IShell interface or the ShowcaseShellModel class
        // this.http.get<IShell>('./assets/sample-data/showcase/shell.json');
        // this.http.get<ShowcaseShellModel>('./assets/sample-data/showcase/shell.json');
        );
        this.shellProviderData = shellProvider.observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(2), // ShellProvider will emit a mock object and the real data fetched from the source. Emit those two values and then complete.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.shellProviderButtonDisabled = false; }));
    };
    AppShellPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-showcase-shell',
            template: __webpack_require__(/*! ./app-shell.page.html */ "./src/app/showcase/app-shell/app-shell.page.html"),
            styles: [__webpack_require__(/*! ./app-shell.page.scss */ "./src/app/showcase/app-shell/app-shell.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppShellPage);
    return AppShellPage;
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
//# sourceMappingURL=app-shell-app-shell-module.js.map