(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-not-found-page-not-found-module"],{

/***/ "./src/app/page-not-found/page-not-found.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.module.ts ***!
  \*********************************************************/
/*! exports provided: PageNotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundModule", function() { return PageNotFoundModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _page_not_found_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found.page */ "./src/app/page-not-found/page-not-found.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PageNotFoundModule = /** @class */ (function () {
    function PageNotFoundModule() {
    }
    PageNotFoundModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _page_not_found_page__WEBPACK_IMPORTED_MODULE_6__["PageNotFound"]
                    }
                ])
            ],
            declarations: [_page_not_found_page__WEBPACK_IMPORTED_MODULE_6__["PageNotFound"]]
        })
    ], PageNotFoundModule);
    return PageNotFoundModule;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.page.html":
/*!*********************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      Page Not Found\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"not-found-content\">\r\n  <div class=\"illustration-wrapper\">\r\n    <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\r\n      <app-image-shell [src]=\"'./assets/images/page-not-found.svg'\" [alt]=\"'not found page'\"></app-image-shell>\r\n    </app-aspect-ratio>\r\n  </div>\r\n  <div class=\"not-found-title\">404</div>\r\n  <div class=\"not-found-text\">Page not found</div>\r\n  <ion-button class=\"go-home-btn\" [routerLink]=\"['/app/categories']\" expand=\"block\" fill=\"outline\">Back to Home page</ion-button>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.page.ts ***!
  \*******************************************************/
/*! exports provided: PageNotFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFound", function() { return PageNotFound; });
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


var PageNotFound = /** @class */ (function () {
    function PageNotFound(menu) {
        this.menu = menu;
    }
    PageNotFound.prototype.ngOnInit = function () {
        this.menu.enable(false);
    };
    PageNotFound = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.page.html */ "./src/app/page-not-found/page-not-found.page.html"),
            styles: [__webpack_require__(/*! ./styles/page-not-found.page.scss */ "./src/app/page-not-found/styles/page-not-found.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"]])
    ], PageNotFound);
    return PageNotFound;
}());



/***/ }),

/***/ "./src/app/page-not-found/styles/page-not-found.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/page-not-found/styles/page-not-found.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-fair-margin); }\n\n.not-found-content {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin); }\n\n.not-found-content .illustration-wrapper {\n    margin: 0px 10%; }\n\n.not-found-content .not-found-title {\n    text-align: center;\n    font-size: 30px;\n    font-weight: 500; }\n\n.not-found-content .not-found-text {\n    text-align: center;\n    font-size: 22px;\n    margin-bottom: 40px;\n    font-weight: 500; }\n\n.not-found-content .go-home-btn {\n    margin: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvc3R5bGVzL0M6XFxQcm9qZWN0c1xcQXBwbGljYXRpb25zXFxpb25pYzQtZnVsbC1zdGFydGVyLWFwcC0xLjIvc3JjXFxhcHBcXHBhZ2Utbm90LWZvdW5kXFxzdHlsZXNcXHBhZ2Utbm90LWZvdW5kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFDQUFjLEVBQUE7O0FBSWhCO0VBQ0UsbUNBQWdCO0VBQ2hCLGlDQUFjO0VBQ2QsaUNBQWM7RUFDZCxvQ0FBaUIsRUFBQTs7QUFKbkI7SUFPSSxlQUFlLEVBQUE7O0FBUG5CO0lBV0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0IsRUFBQTs7QUFicEI7SUFpQkksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCLEVBQUE7O0FBcEJwQjtJQXdCSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlLW5vdC1mb3VuZC9zdHlsZXMvcGFnZS1ub3QtZm91bmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xyXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuOmhvc3Qge1xyXG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XHJcbn1cclxuXHJcbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG4ubm90LWZvdW5kLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG5cclxuICAuaWxsdXN0cmF0aW9uLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luOiAwcHggMTAlO1xyXG4gIH1cclxuXHJcbiAgLm5vdC1mb3VuZC10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgLm5vdC1mb3VuZC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgLmdvLWhvbWUtYnRuIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ })

}]);
//# sourceMappingURL=page-not-found-page-not-found-module.js.map