(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travel-listing-travel-listing-module"],{

/***/ "./src/app/travel/listing/styles/travel-listing.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/travel/listing/styles/travel-listing.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-color: #00AFFF; }\n\n.listing-item {\n  padding: 0px 0px var(--page-margin);\n  background-color: var(--page-background);\n  border-bottom: calc(var(--page-margin) / 2) solid var(--page-color); }\n\n.listing-item .image-row {\n    --ion-grid-column-padding: 0px; }\n\n.listing-item .image-row .item-image {\n      cursor: pointer; }\n\n.listing-item .image-row .item-image:focus {\n        outline: none; }\n\n.listing-item .image-row .content-inside-item-image {\n      padding: 0px 12%;\n      height: 100%;\n      display: flex;\n      justify-content: center;\n      flex-direction: column; }\n\n.listing-item .image-row .content-inside-item-image .item-icon {\n        width: 54px;\n        align-self: center;\n        margin-bottom: 24px; }\n\n.listing-item .image-row .content-inside-item-image .item-cta {\n        margin: 0px auto;\n        padding: calc(var(--page-margin) / 2) calc(var(--page-margin));\n        text-transform: uppercase;\n        font-size: 20px;\n        font-weight: 700;\n        text-align: center;\n        color: var(--ion-color-light);\n        display: flex;\n        align-items: center;\n        background-color: var(--page-color);\n        border-radius: var(--app-fair-radius); }\n\n.listing-item .image-row .content-inside-item-image .item-cta .cta-icon {\n          font-size: 26px;\n          margin-left: calc(var(--page-margin) / 2); }\n\n.listing-item .info-row {\n    --ion-grid-column-padding: 0px;\n    padding: var(--page-margin);\n    padding-bottom: calc(var(--page-margin) / 2); }\n\n.listing-item .info-row .main-info-col {\n      padding-right: calc(var(--page-margin) / 2); }\n\n.listing-item .info-row .item-name {\n      margin: 0px 0px var(--page-margin);\n      text-transform: capitalize;\n      font-size: 16px; }\n\n.listing-item .info-row .item-name .name-anchor {\n        color: var(--ion-color-dark);\n        display: block;\n        text-decoration: none; }\n\n.listing-item .info-row .item-description {\n      margin: 0px 0px calc(var(--page-margin) / 2);\n      color: var(--ion-color-dark-shade);\n      font-size: 14px;\n      line-height: 1.3; }\n\n.listing-item .info-row .item-address {\n      margin: 0px;\n      color: var(--ion-color-dark-tint);\n      font-size: 12px; }\n\n.listing-item .stats-row {\n    --ion-grid-column-padding: 0px;\n    padding: 0px var(--page-margin);\n    justify-content: flex-end; }\n\n.listing-item .stats-row .stats-icon {\n      font-size: 24px; }\n\n.listing-item .stats-row .item-rating {\n      display: inline-flex;\n      text-align: center;\n      justify-content: flex-end;\n      margin-right: 10px; }\n\n.listing-item .stats-row .item-rating .rating-value {\n        font-size: 16px;\n        margin-right: 5px;\n        margin: auto; }\n\n.listing-item .stats-row .item-reviews {\n      display: inline-flex;\n      text-align: center;\n      justify-content: flex-end; }\n\n.listing-item .stats-row .item-reviews .reviews-count {\n        font-size: 16px;\n        margin-right: 5px;\n        margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhdmVsL2xpc3Rpbmcvc3R5bGVzL0M6XFxQcm9qZWN0c1xcQXBwbGljYXRpb25zXFxpb25pYzQtZnVsbC1zdGFydGVyLWFwcC0xLjIvc3JjXFxhcHBcXHRyYXZlbFxcbGlzdGluZ1xcc3R5bGVzXFx0cmF2ZWwtbGlzdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQ0FBYztFQUNkLHdDQUFrQjtFQUVsQixxQkFBYSxFQUFBOztBQUlmO0VBQ0UsbUNBQW1DO0VBQ25DLHdDQUF3QztFQUN4QyxtRUFBbUUsRUFBQTs7QUFIckU7SUFNSSw4QkFBMEIsRUFBQTs7QUFOOUI7TUFTTSxlQUFlLEVBQUE7O0FBVHJCO1FBWVEsYUFBYSxFQUFBOztBQVpyQjtNQWlCTSxnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsc0JBQXNCLEVBQUE7O0FBckI1QjtRQXdCUSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLG1CQUFtQixFQUFBOztBQTFCM0I7UUE4QlEsZ0JBQWdCO1FBQ2hCLDhEQUE4RDtRQUM5RCx5QkFBeUI7UUFDekIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsNkJBQTZCO1FBQzdCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsbUNBQW1DO1FBQ25DLHFDQUFxQyxFQUFBOztBQXhDN0M7VUEyQ1UsZUFBZTtVQUNmLHlDQUF5QyxFQUFBOztBQTVDbkQ7SUFtREksOEJBQTBCO0lBRTFCLDJCQUEyQjtJQUMzQiw0Q0FBNEMsRUFBQTs7QUF0RGhEO01BeURNLDJDQUEyQyxFQUFBOztBQXpEakQ7TUE2RE0sa0NBQWtDO01BQ2xDLDBCQUEwQjtNQUMxQixlQUFlLEVBQUE7O0FBL0RyQjtRQWtFUSw0QkFBNEI7UUFDNUIsY0FBYztRQUNkLHFCQUFxQixFQUFBOztBQXBFN0I7TUF5RU0sNENBQTRDO01BQzVDLGtDQUFrQztNQUNsQyxlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7O0FBNUV0QjtNQWdGTSxXQUFXO01BQ1gsaUNBQWlDO01BQ2pDLGVBQWUsRUFBQTs7QUFsRnJCO0lBdUZJLDhCQUEwQjtJQUUxQiwrQkFBK0I7SUFDL0IseUJBQXlCLEVBQUE7O0FBMUY3QjtNQTZGTSxlQUFlLEVBQUE7O0FBN0ZyQjtNQWlHTSxvQkFBb0I7TUFDcEIsa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixrQkFBa0IsRUFBQTs7QUFwR3hCO1FBdUdRLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsWUFBWSxFQUFBOztBQXpHcEI7TUE4R00sb0JBQW9CO01BQ3BCLGtCQUFrQjtNQUNsQix5QkFBeUIsRUFBQTs7QUFoSC9CO1FBbUhRLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdHJhdmVsL2xpc3Rpbmcvc3R5bGVzL3RyYXZlbC1saXN0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcclxuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbjpob3N0IHtcclxuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xyXG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XHJcblxyXG4gIC0tcGFnZS1jb2xvcjogIzAwQUZGRjtcclxufVxyXG5cclxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbi5saXN0aW5nLWl0ZW0ge1xyXG4gIHBhZGRpbmc6IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcbiAgYm9yZGVyLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBzb2xpZCB2YXIoLS1wYWdlLWNvbG9yKTtcclxuXHJcbiAgLmltYWdlLXJvdyB7XHJcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgLml0ZW0taW1hZ2Uge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtaW5zaWRlLWl0ZW0taW1hZ2Uge1xyXG4gICAgICBwYWRkaW5nOiAwcHggMTIlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgLml0ZW0taWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDU0cHg7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pdGVtLWN0YSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pKTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcclxuXHJcbiAgICAgICAgLmN0YS1pY29uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmluZm8tcm93IHtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuXHJcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuXHJcbiAgICAubWFpbi1pbmZvLWNvbCB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0tbmFtZSB7XHJcbiAgICAgIG1hcmdpbjogMHB4IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gICAgICAubmFtZS1hbmNob3Ige1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0tZGVzY3JpcHRpb24ge1xyXG4gICAgICBtYXJnaW46IDBweCAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLWFkZHJlc3Mge1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc3RhdHMtcm93IHtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuXHJcbiAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAuc3RhdHMtaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbS1yYXRpbmcge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgICAucmF0aW5nLXZhbHVlIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0tcmV2aWV3cyB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICAucmV2aWV3cy1jb3VudCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/travel/listing/styles/travel-listing.shell.scss":
/*!*****************************************************************!*\
  !*** ./src/app/travel/listing/styles/travel-listing.shell.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --shell-color: #00AFFF;\n  --shell-color-rgb: 0,175,255; }\n\napp-image-shell.item-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-overlay-background: rgba(var(--ion-color-dark-rgb), .60); }\n\napp-image-shell.icon-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .15); }\n\n.item-name app-text-shell {\n  --text-shell-line-height: 16px;\n  max-width: 70%; }\n\n.item-name app-text-shell.text-loaded {\n    max-width: unset; }\n\n.item-description > app-text-shell {\n  --text-shell-line-height: 14px; }\n\n.item-address > app-text-shell {\n  --text-shell-line-height: 12px;\n  max-width: 60%; }\n\n.item-address > app-text-shell.text-loaded {\n    max-width: unset; }\n\n.rating-value > app-text-shell {\n  --text-shell-line-height: 16px;\n  min-width: 30px; }\n\n.reviews-count > app-text-shell {\n  --text-shell-line-height: 16px;\n  min-width: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhdmVsL2xpc3Rpbmcvc3R5bGVzL0M6XFxQcm9qZWN0c1xcQXBwbGljYXRpb25zXFxpb25pYzQtZnVsbC1zdGFydGVyLWFwcC0xLjIvc3JjXFxhcHBcXHRyYXZlbFxcbGlzdGluZ1xcc3R5bGVzXFx0cmF2ZWwtbGlzdGluZy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQWM7RUFDZCw0QkFBa0IsRUFBQTs7QUFVcEI7RUFDRSxtRUFBaUM7RUFDakMsc0VBQWlDLEVBQUE7O0FBR25DO0VBQ0UsbUVBQWlDLEVBQUE7O0FBR25DO0VBQ0UsOEJBQXlCO0VBQ3pCLGNBQWMsRUFBQTs7QUFGaEI7SUFLSSxnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDRSw4QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSw4QkFBeUI7RUFDekIsY0FBYyxFQUFBOztBQUZoQjtJQUtJLGdCQUFnQixFQUFBOztBQUlwQjtFQUNFLDhCQUF5QjtFQUN6QixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsOEJBQXlCO0VBQ3pCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RyYXZlbC9saXN0aW5nL3N0eWxlcy90cmF2ZWwtbGlzdGluZy5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xyXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuOmhvc3Qge1xyXG4gIC0tc2hlbGwtY29sb3I6ICMwMEFGRkY7XHJcbiAgLS1zaGVsbC1jb2xvci1yZ2I6IDAsMTc1LDI1NTtcclxufVxyXG5cclxuLy8gWW91IGNhbiBhbHNvIGFwcGx5IHNoZWVsIHN0eWxlcyB0byB0aGUgZW50aXJlIHBhZ2VcclxuOmhvc3QoLmlzLXNoZWxsKSB7XHJcbiAgLy8gaW9uLWNvbnRlbnQge1xyXG4gIC8vICAgb3BhY2l0eTogMC44O1xyXG4gIC8vIH1cclxufVxyXG5cclxuYXBwLWltYWdlLXNoZWxsLml0ZW0taW1hZ2Uge1xyXG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XHJcbiAgLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgLjYwKTtcclxufVxyXG5cclxuYXBwLWltYWdlLXNoZWxsLmljb24taW1hZ2Uge1xyXG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XHJcbn1cclxuXHJcbi5pdGVtLW5hbWUgYXBwLXRleHQtc2hlbGwge1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcclxuICBtYXgtd2lkdGg6IDcwJTtcclxuXHJcbiAgJi50ZXh0LWxvYWRlZCB7XHJcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xyXG4gIH1cclxufVxyXG5cclxuLml0ZW0tZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCB7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xyXG59XHJcblxyXG4uaXRlbS1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcclxuICBtYXgtd2lkdGg6IDYwJTtcclxuXHJcbiAgJi50ZXh0LWxvYWRlZCB7XHJcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xyXG4gIH1cclxufVxyXG5cclxuLnJhdGluZy12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcclxuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgbWluLXdpZHRoOiAzMHB4O1xyXG59XHJcblxyXG4ucmV2aWV3cy1jb3VudCA+IGFwcC10ZXh0LXNoZWxsIHtcclxuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgbWluLXdpZHRoOiAzMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/travel/listing/travel-listing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/travel/listing/travel-listing.module.ts ***!
  \*********************************************************/
/*! exports provided: TravelListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelListingPageModule", function() { return TravelListingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _travel_listing_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./travel-listing.page */ "./src/app/travel/listing/travel-listing.page.ts");
/* harmony import */ var _travel_listing_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./travel-listing.resolver */ "./src/app/travel/listing/travel-listing.resolver.ts");
/* harmony import */ var _travel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../travel.service */ "./src/app/travel/travel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _travel_listing_page__WEBPACK_IMPORTED_MODULE_7__["TravelListingPage"],
        resolve: {
            data: _travel_listing_resolver__WEBPACK_IMPORTED_MODULE_8__["TravelListingResolver"]
        }
    }
];
var TravelListingPageModule = /** @class */ (function () {
    function TravelListingPageModule() {
    }
    TravelListingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            declarations: [_travel_listing_page__WEBPACK_IMPORTED_MODULE_7__["TravelListingPage"]],
            providers: [
                _travel_listing_resolver__WEBPACK_IMPORTED_MODULE_8__["TravelListingResolver"],
                _travel_service__WEBPACK_IMPORTED_MODULE_9__["TravelService"]
            ]
        })
    ], TravelListingPageModule);
    return TravelListingPageModule;
}());



/***/ }),

/***/ "./src/app/travel/listing/travel-listing.page.html":
/*!*********************************************************!*\
  !*** ./src/app/travel/listing/travel-listing.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"app/categories\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Travel Listing</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ng-container *ngIf=\"listing?.items\">\r\n    <div class=\"listing-item\" *ngFor=\"let item of listing.items\">\r\n      <ion-row class=\"image-row\">\r\n        <ion-col size=\"12\">\r\n          <app-image-shell [mode]=\"'cover'\" class=\"add-overlay item-image\" [src]=\"item.image\" [routerLink]=\"['/app/categories/travel/', item.slug]\">\r\n            <app-aspect-ratio [ratio]=\"{w:3, h:2}\">\r\n              <div class=\"content-inside-item-image\">\r\n                <div class=\"item-icon\">\r\n                  <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\r\n                    <app-image-shell [src]=\"item.icon\" class=\"icon-image\"></app-image-shell>\r\n                  </app-aspect-ratio>\r\n                </div>\r\n                <div class=\"item-cta\">\r\n                  <span>Explore</span>\r\n                  <ion-icon class=\"cta-icon\" name=\"arrow-round-forward\"></ion-icon>\r\n                </div>\r\n              </div>\r\n            </app-aspect-ratio>\r\n          </app-image-shell>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"info-row\">\r\n        <ion-col class=\"main-info-col\">\r\n          <h3 class=\"item-name\">\r\n            <a class=\"name-anchor\" [routerLink]=\"['/app/categories/travel/', item.slug]\">\r\n              <app-text-shell animation=\"bouncing\" [data]=\"(item?.name && item?.category) ? (item.name + ' - ' + item.category) : (item.name)\"></app-text-shell>\r\n            </a>\r\n          </h3>\r\n          <p class=\"item-description\">\r\n            <app-text-shell animation=\"bouncing\" [data]=\"item.description\" lines=\"3\"></app-text-shell>\r\n          </p>\r\n          <p class=\"item-address\">\r\n            <app-text-shell animation=\"bouncing\" [data]=\"item.address\"></app-text-shell>\r\n          </p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"stats-row\">\r\n        <ion-col size=\"2\" class=\"item-rating\">\r\n          <span class=\"rating-value\">\r\n            <app-text-shell [data]=\"item.rating\"></app-text-shell>\r\n          </span>\r\n          <ion-icon class=\"stats-icon\" src=\"./assets/sample-icons/travel/star.svg\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"item-reviews\">\r\n          <span class=\"reviews-count\">\r\n            <app-text-shell [data]=\"item.reviewsCount\"></app-text-shell>\r\n          </span>\r\n          <ion-icon class=\"stats-icon\" src=\"./assets/sample-icons/travel/comments.svg\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ng-container>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/travel/listing/travel-listing.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/travel/listing/travel-listing.page.ts ***!
  \*******************************************************/
/*! exports provided: TravelListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelListingPage", function() { return TravelListingPage; });
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


var TravelListingPage = /** @class */ (function () {
    function TravelListingPage(route) {
        this.route = route;
    }
    Object.defineProperty(TravelListingPage.prototype, "isShell", {
        get: function () {
            return (this.listing && this.listing.isShell) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    TravelListingPage.prototype.ngOnInit = function () {
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
    ], TravelListingPage.prototype, "isShell", null);
    TravelListingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-travel-listing',
            template: __webpack_require__(/*! ./travel-listing.page.html */ "./src/app/travel/listing/travel-listing.page.html"),
            styles: [__webpack_require__(/*! ./styles/travel-listing.page.scss */ "./src/app/travel/listing/styles/travel-listing.page.scss"), __webpack_require__(/*! ./styles/travel-listing.shell.scss */ "./src/app/travel/listing/styles/travel-listing.shell.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TravelListingPage);
    return TravelListingPage;
}());



/***/ }),

/***/ "./src/app/travel/listing/travel-listing.resolver.ts":
/*!***********************************************************!*\
  !*** ./src/app/travel/listing/travel-listing.resolver.ts ***!
  \***********************************************************/
/*! exports provided: TravelListingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelListingResolver", function() { return TravelListingResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _travel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../travel.service */ "./src/app/travel/travel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TravelListingResolver = /** @class */ (function () {
    function TravelListingResolver(travelService) {
        this.travelService = travelService;
    }
    TravelListingResolver.prototype.resolve = function () {
        // Get the Shell Provider from the service
        var shellProviderObservable = this.travelService.getListingDataWithShell();
        // Resolve with Shell Provider
        var observablePromise = new Promise(function (resolve, reject) {
            resolve(shellProviderObservable);
        });
        return observablePromise;
    };
    TravelListingResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_travel_service__WEBPACK_IMPORTED_MODULE_1__["TravelService"]])
    ], TravelListingResolver);
    return TravelListingResolver;
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
//# sourceMappingURL=travel-listing-travel-listing-module.js.map