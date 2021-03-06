(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"],{

/***/ "./src/app/categories/categories.module.ts":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories.page */ "./src/app/categories/categories.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var categoriesRoutes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]
    }
];
var CategoriesPageModule = /** @class */ (function () {
    function CategoriesPageModule() {
    }
    CategoriesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(categoriesRoutes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
            ],
            declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]]
        })
    ], CategoriesPageModule);
    return CategoriesPageModule;
}());



/***/ }),

/***/ "./src/app/categories/categories.page.html":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Categories\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row class=\"categories-list\">\r\n    <ion-col class=\"category-item travel-category\" size=\"12\">\r\n      <app-image-shell [mode]=\"'cover'\" class=\"category-cover\" animation=\"spinner\" [src]=\"'./assets/sample-images/categories/travel.png'\">\r\n        <app-aspect-ratio [ratio]=\"{w:75, h:49}\">\r\n          <a class=\"category-anchor\" [routerLink]=\"['/app/categories/travel']\">\r\n            <h2 class=\"category-title\">Travel</h2>\r\n          </a>\r\n        </app-aspect-ratio>\r\n      </app-image-shell>\r\n    </ion-col>\r\n    <ion-col class=\"category-item fashion-category\" size=\"6\">\r\n      <app-image-shell [mode]=\"'cover'\" class=\"category-cover\" animation=\"spinner\" [src]=\"'./assets/sample-images/categories/fashion.png'\">\r\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\r\n          <a class=\"category-anchor\" [routerLink]=\"['/app/categories/fashion']\">\r\n            <h2 class=\"category-title\">Fashion</h2>\r\n          </a>\r\n        </app-aspect-ratio>\r\n      </app-image-shell>\r\n    </ion-col>\r\n    <ion-col class=\"category-item food-category\" size=\"6\">\r\n      <app-image-shell [mode]=\"'cover'\" class=\"category-cover\" animation=\"spinner\" [src]=\"'./assets/sample-images/categories/food.png'\">\r\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\r\n          <a class=\"category-anchor\" [routerLink]=\"['/app/categories/food']\">\r\n            <h2 class=\"category-title\">Food</h2>\r\n          </a>\r\n        </app-aspect-ratio>\r\n      </app-image-shell>\r\n    </ion-col>\r\n    <ion-col class=\"category-item deals-category\" size=\"12\">\r\n      <app-image-shell [mode]=\"'cover'\" class=\"category-cover\" animation=\"spinner\" [src]=\"'./assets/sample-images/categories/deals.png'\">\r\n        <app-aspect-ratio [ratio]=\"{w:75, h:30}\">\r\n          <a class=\"category-anchor\" [routerLink]=\"['/app/categories/deals']\">\r\n            <h2 class=\"category-title\">Deals</h2>\r\n          </a>\r\n        </app-aspect-ratio>\r\n      </app-image-shell>\r\n    </ion-col>\r\n    <ion-col class=\"category-item real-state-category\" size=\"12\">\r\n      <app-image-shell [mode]=\"'cover'\" class=\"category-cover\" animation=\"spinner\" [src]=\"'./assets/sample-images/categories/real-state.png'\">\r\n        <app-aspect-ratio [ratio]=\"{w:75, h:30}\">\r\n          <a class=\"category-anchor\" [routerLink]=\"['/app/categories/real-state']\">\r\n            <h2 class=\"category-title\">Real State</h2>\r\n          </a>\r\n        </app-aspect-ratio>\r\n      </app-image-shell>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/categories/categories.page.ts":
/*!***********************************************!*\
  !*** ./src/app/categories/categories.page.ts ***!
  \***********************************************/
/*! exports provided: CategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPage", function() { return CategoriesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CategoriesPage = /** @class */ (function () {
    function CategoriesPage() {
    }
    CategoriesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.page.html */ "./src/app/categories/categories.page.html"),
            styles: [__webpack_require__(/*! ./styles/categories.page.scss */ "./src/app/categories/styles/categories.page.scss"), __webpack_require__(/*! ./styles/categories.shell.scss */ "./src/app/categories/styles/categories.shell.scss"), __webpack_require__(/*! ./styles/categories.responsive.scss */ "./src/app/categories/styles/categories.responsive.scss")]
        })
    ], CategoriesPage);
    return CategoriesPage;
}());



/***/ }),

/***/ "./src/app/categories/styles/categories.page.scss":
/*!********************************************************!*\
  !*** ./src/app/categories/styles/categories.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-categories-gutter: calc(var(--page-margin) / 4);\n  --page-category-background: var(--ion-color-medium);\n  --page-category-background-rgb: var(--ion-color-medium-rgb); }\n\n.categories-list {\n  --ion-grid-column-padding: var(--page-categories-gutter);\n  padding: calc(var(--page-categories-gutter) * 3);\n  height: 100%;\n  align-content: flex-start;\n  overflow: scroll;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none; }\n\n.categories-list::-webkit-scrollbar {\n    display: none; }\n\n.categories-list .category-item .category-anchor {\n    height: 100%;\n    text-decoration: none;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start; }\n\n.categories-list .category-item .category-anchor .category-title {\n      margin: auto;\n      text-transform: uppercase;\n      font-weight: 400;\n      font-size: 18px;\n      letter-spacing: 1px;\n      padding: calc((var(--page-margin) / 4) * 3) var(--page-margin);\n      color: var(--ion-color-lightest);\n      background-color: var(--page-category-background);\n      border-radius: var(--app-fair-radius); }\n\n.categories-list .travel-category {\n    --page-category-background: #00AFFF;\n    --page-category-background-rgb: 0,175,255; }\n\n.categories-list .fashion-category {\n    --page-category-background: #cb328f;\n    --page-category-background-rgb: 203,50,143; }\n\n.categories-list .food-category {\n    --page-category-background: #ebbb00;\n    --page-category-background-rgb: 235,187,0; }\n\n.categories-list .deals-category {\n    --page-category-background: #70df70;\n    --page-category-background-rgb: 112,223,112; }\n\n.categories-list .real-state-category {\n    --page-category-background: #d9453a;\n    --page-category-background-rgb: 217,69,58; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9zdHlsZXMvQzpcXFByb2plY3RzXFxBcHBsaWNhdGlvbnNcXGlvbmljNC1mdWxsLXN0YXJ0ZXItYXBwLTEuMi9zcmNcXGFwcFxcY2F0ZWdvcmllc1xcc3R5bGVzXFxjYXRlZ29yaWVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2F0ZWdvcmllcy9zdHlsZXMvQzpcXFByb2plY3RzXFxBcHBsaWNhdGlvbnNcXGlvbmljNC1mdWxsLXN0YXJ0ZXItYXBwLTEuMi9zcmNcXHRoZW1lXFxtaXhpbnNcXHNjcm9sbGJhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHVDQUFjO0VBRWQsc0RBQXlCO0VBRXpCLG1EQUEyQjtFQUMzQiwyREFBK0IsRUFBQTs7QUFJakM7RUFDRSx3REFBMEI7RUFFMUIsZ0RBQWdEO0VBQ2hELFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZ0JBQWdCO0VDakJoQix3QkFBd0I7RUFHeEIsOEJBQThCO0VBQzlCLHFCQUFxQixFQUFBOztBRE92QjtJQ0hJLGFBQWEsRUFBQTs7QURHakI7SUFZTSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsdUJBQXVCLEVBQUE7O0FBaEI3QjtNQW1CUSxZQUFZO01BQ1oseUJBQXlCO01BQ3pCLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YsbUJBQW1CO01BQ25CLDhEQUE4RDtNQUM5RCxnQ0FBZ0M7TUFDaEMsaURBQWlEO01BQ2pELHFDQUFxQyxFQUFBOztBQTNCN0M7SUFpQ0ksbUNBQTJCO0lBQzNCLHlDQUErQixFQUFBOztBQWxDbkM7SUFzQ0ksbUNBQTJCO0lBQzNCLDBDQUErQixFQUFBOztBQXZDbkM7SUEyQ0ksbUNBQTJCO0lBQzNCLHlDQUErQixFQUFBOztBQTVDbkM7SUFnREksbUNBQTJCO0lBQzNCLDJDQUErQixFQUFBOztBQWpEbkM7SUFxREksbUNBQTJCO0lBQzNCLHlDQUErQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcmllcy9zdHlsZXMvY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvbWl4aW5zL3Njcm9sbGJhcnNcIjtcclxuXHJcbi8vIEN1c3RvbSB2YXJpYWJsZXNcclxuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbjpob3N0IHtcclxuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XHJcblxyXG4gIC0tcGFnZS1jYXRlZ29yaWVzLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcclxuXHJcbiAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kLXJnYjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpO1xyXG59XHJcblxyXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuLmNhdGVnb3JpZXMtbGlzdCB7XHJcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogdmFyKC0tcGFnZS1jYXRlZ29yaWVzLWd1dHRlcik7XHJcblxyXG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1jYXRlZ29yaWVzLWd1dHRlcikgKiAzKTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG5cclxuICBAaW5jbHVkZSBoaWRlLXNjcm9sbGJhcnMoKTtcclxuXHJcbiAgLmNhdGVnb3J5LWl0ZW0ge1xyXG4gICAgLmNhdGVnb3J5LWFuY2hvciB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgLmNhdGVnb3J5LXRpdGxlIHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IGNhbGMoKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpICogMykgdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRyYXZlbC1jYXRlZ29yeSB7XHJcbiAgICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZDogIzAwQUZGRjtcclxuICAgIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kLXJnYjogMCwxNzUsMjU1O1xyXG4gIH1cclxuXHJcbiAgLmZhc2hpb24tY2F0ZWdvcnkge1xyXG4gICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQ6ICNjYjMyOGY7XHJcbiAgICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZC1yZ2I6IDIwMyw1MCwxNDM7XHJcbiAgfVxyXG5cclxuICAuZm9vZC1jYXRlZ29yeSB7XHJcbiAgICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZDogI2ViYmIwMDtcclxuICAgIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kLXJnYjogMjM1LDE4NywwO1xyXG4gIH1cclxuXHJcbiAgLmRlYWxzLWNhdGVnb3J5IHtcclxuICAgIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kOiAjNzBkZjcwO1xyXG4gICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiOiAxMTIsMjIzLDExMjtcclxuICB9XHJcblxyXG4gIC5yZWFsLXN0YXRlLWNhdGVnb3J5IHtcclxuICAgIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kOiAjZDk0NTNhO1xyXG4gICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiOiAyMTcsNjksNTg7XHJcbiAgfVxyXG59XHJcbiIsIi8vIEhpZGUgc2Nyb2xsYmFyczogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM4OTk0ODM3LzExMTY5NTlcclxuQG1peGluIGhpZGUtc2Nyb2xsYmFycygpIHtcclxuICAvLyBJRSAxMCtcclxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XHJcblxyXG4gIC8vIEZpcmVmb3hcclxuICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG5cclxuICAvLyBTYWZhcmkgYW5kIENocm9tZVxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/categories/styles/categories.responsive.scss":
/*!**************************************************************!*\
  !*** ./src/app/categories/styles/categories.responsive.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ----------- iPhone 4 and 4S ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2 / 3) {\n  .categories-list .category-item .category-anchor .category-title {\n    font-size: 16px; } }\n/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {\n  .categories-list .category-item .category-anchor .category-title {\n    font-size: 20px;\n    padding: var(--page-margin) calc((var(--page-margin) * 3) / 2); } }\n/* ----------- iPhone X ----------- */\n@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {\n  .categories-list .category-item .category-anchor .category-title {\n    font-size: 20px;\n    padding: var(--page-margin) calc((var(--page-margin) * 3) / 2); } }\n/* ----------- iPhone 6+, 7+ and 8+ ----------- */\n@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {\n  .categories-list .category-item .category-anchor .category-title {\n    font-size: 20px;\n    padding: var(--page-margin) calc((var(--page-margin) * 3) / 2); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9zdHlsZXMvQzpcXFByb2plY3RzXFxBcHBsaWNhdGlvbnNcXGlvbmljNC1mdWxsLXN0YXJ0ZXItYXBwLTEuMi9zcmNcXGFwcFxcY2F0ZWdvcmllc1xcc3R5bGVzXFxjYXRlZ29yaWVzLnJlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSw0Q0FBQTtBQUNBO0VBVUU7SUFJUSxlQUFlLEVBQUEsRUFDaEI7QUFNVCxxREFBQTtBQWNBLGtEQUFBO0FBQ0E7RUFTRTtJQUlRLGVBQWU7SUFDZiw4REFBOEQsRUFBQSxFQUMvRDtBQU1ULHFDQUFBO0FBQ0E7RUFTRTtJQUlRLGVBQWU7SUFDZiw4REFBOEQsRUFBQSxFQUMvRDtBQU1ULGlEQUFBO0FBQ0E7RUFTRTtJQUlRLGVBQWU7SUFDZiw4REFBOEQsRUFBQSxFQUMvRCIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvc3R5bGVzL2NhdGVnb3JpZXMucmVzcG9uc2l2ZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKE5vdGU6IERvbid0IGNoYW5nZSB0aGUgb3JkZXIgb2YgdGhlIGRldmljZXMgYXMgaXQgbWF5IGJyZWFrIHRoZSBjb3JyZWN0IGNzcyBwcmVjZWRlbmNlKVxyXG5cclxuLy8gKHNlZTogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3MvbWVkaWEtcXVlcmllcy1mb3Itc3RhbmRhcmQtZGV2aWNlcy8jaXBob25lLXF1ZXJpZXMpXHJcbi8vIChzZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80Nzc1MDI2MS8xMTE2OTU5KVxyXG5cclxuLyogLS0tLS0tLS0tLS0gaVBob25lIDQgYW5kIDRTIC0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlblxyXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDMyMHB4KVxyXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDQ4MHB4KVxyXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxyXG4gIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogMi8zKVxyXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcclxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcclxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxyXG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcclxue1xyXG4gIC5jYXRlZ29yaWVzLWxpc3Qge1xyXG4gICAgLmNhdGVnb3J5LWl0ZW0ge1xyXG4gICAgICAuY2F0ZWdvcnktYW5jaG9yIHtcclxuICAgICAgICAuY2F0ZWdvcnktdGl0bGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0gaVBob25lIDUsIDVTLCA1QyBhbmQgNVNFIC0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlblxyXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDMyMHB4KVxyXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDU2OHB4KVxyXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxyXG4gIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogNDAgLyA3MSlcclxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XHJcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXHJcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcclxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXHJcbntcclxuXHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA2LCA2UywgNyBhbmQgOCAtLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW5cclxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzNzVweClcclxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA2NjdweClcclxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcclxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XHJcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXHJcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcclxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXHJcbntcclxuICAuY2F0ZWdvcmllcy1saXN0IHtcclxuICAgIC5jYXRlZ29yeS1pdGVtIHtcclxuICAgICAgLmNhdGVnb3J5LWFuY2hvciB7XHJcbiAgICAgICAgLmNhdGVnb3J5LXRpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKSAvIDIpIDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSBYIC0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlblxyXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDM3NXB4KVxyXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDgxMnB4KVxyXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvIDogMylcclxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XHJcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXHJcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcclxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXHJcbntcclxuICAuY2F0ZWdvcmllcy1saXN0IHtcclxuICAgIC5jYXRlZ29yeS1pdGVtIHtcclxuICAgICAgLmNhdGVnb3J5LWFuY2hvciB7XHJcbiAgICAgICAgLmNhdGVnb3J5LXRpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKSAvIDIpIDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA2KywgNysgYW5kIDgrIC0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlblxyXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDQxNHB4KVxyXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDczNnB4KVxyXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKVxyXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcclxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcclxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxyXG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcclxue1xyXG4gIC5jYXRlZ29yaWVzLWxpc3Qge1xyXG4gICAgLmNhdGVnb3J5LWl0ZW0ge1xyXG4gICAgICAuY2F0ZWdvcnktYW5jaG9yIHtcclxuICAgICAgICAuY2F0ZWdvcnktdGl0bGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGMoKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpIC8gMikgO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/categories/styles/categories.shell.scss":
/*!*********************************************************!*\
  !*** ./src/app/categories/styles/categories.shell.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-image-shell.category-cover {\n  --image-shell-loading-background: rgba(var(--page-category-background-rgb), .25);\n  --image-shell-spinner-color: var(--ion-color-lightest); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9zdHlsZXMvQzpcXFByb2plY3RzXFxBcHBsaWNhdGlvbnNcXGlvbmljNC1mdWxsLXN0YXJ0ZXItYXBwLTEuMi9zcmNcXGFwcFxcY2F0ZWdvcmllc1xcc3R5bGVzXFxjYXRlZ29yaWVzLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnRkFBaUM7RUFDakMsc0RBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWVzL3N0eWxlcy9jYXRlZ29yaWVzLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwuY2F0ZWdvcnktY292ZXIge1xyXG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZC1yZ2IpLCAuMjUpO1xyXG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxufVxyXG4iXX0= */"

/***/ })

}]);
//# sourceMappingURL=categories-categories-module.js.map