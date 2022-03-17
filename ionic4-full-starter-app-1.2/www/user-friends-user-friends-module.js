(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-friends-user-friends-module"],{

/***/ "./src/app/user/friends/styles/user-friends.md.scss":
/*!**********************************************************!*\
  !*** ./src/app/user/friends/styles/user-friends.md.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host-context(.plt-mobile.md) .user-details-section .user-actions-wrapper {\n  max-width: 12ex;\n  max-width: 12ch; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9mcmllbmRzL3N0eWxlcy9DOlxcUHJvamVjdHNcXEFwcGxpY2F0aW9uc1xcaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyY1xcYXBwXFx1c2VyXFxmcmllbmRzXFxzdHlsZXNcXHVzZXItZnJpZW5kcy5tZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR00sZUFBZTtFQUNmLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZnJpZW5kcy9zdHlsZXMvdXNlci1mcmllbmRzLm1kLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC1jb250ZXh0KC5wbHQtbW9iaWxlLm1kKSB7XHJcbiAgLnVzZXItZGV0YWlscy1zZWN0aW9uIHtcclxuICAgIC51c2VyLWFjdGlvbnMtd3JhcHBlciB7XHJcbiAgICAgIG1heC13aWR0aDogMTJleDtcclxuICAgICAgbWF4LXdpZHRoOiAxMmNoO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/user/friends/styles/user-friends.page.scss":
/*!************************************************************!*\
  !*** ./src/app/user/friends/styles/user-friends.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-border-radius: var(--app-fair-radius);\n  --page-segment-background: var(--app-background);\n  --page-segment-indicator-height: 2px; }\n\n.user-friends-segment {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 8;\n  background-color: var(--page-segment-background); }\n\n.user-friends-segment ion-segment-button {\n    --padding-end: var(--page-margin);\n    --padding-start: var(--page-margin);\n    --background: var(--page-segment-background);\n    --color: rgba(var(--ion-color-dark-rgb), 0.4);\n    --color-checked: var(--ion-color-dark);\n    --indicator-color-checked: var(--ion-color-dark);\n    text-transform: capitalize;\n    min-height: calc((var(--page-margin) * 3) - var(--page-segment-indicator-height)); }\n\n.user-friends-segment ion-segment-button ion-label {\n      margin-top: calc(var(--page-margin) / 2);\n      margin-bottom: calc(var(--page-margin) / 4); }\n\nion-searchbar.friends-searchbar {\n  padding: var(--page-margin); }\n\n.friends-list {\n  padding: 0px var(--page-margin);\n  margin-bottom: calc(var(--page-margin) * 3); }\n\n.empty-list-message {\n  margin: calc(var(--page-margin) * 3);\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  text-align: center; }\n\nion-item.friend-item {\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --padding-bottom: var(--page-margin);\n  --inner-padding-bottom: var(--page-margin); }\n\nion-item.friend-item:last-child {\n    --border-style: none;\n    --padding-bottom: 0px;\n    --inner-padding-bottom: 0px; }\n\nion-item.friend-item .user-details-section {\n    --ion-grid-column-padding: 0px;\n    width: 100%;\n    align-items: center; }\n\nion-item.friend-item .user-details-section .user-data-wrapper {\n      padding-left: var(--page-margin);\n      padding-right: calc(var(--page-margin) / 2);\n      display: flex;\n      flex-direction: column;\n      justify-content: center; }\n\nion-item.friend-item .user-details-section .user-data-wrapper .user-info:not(:last-child) {\n        margin-bottom: calc(var(--page-margin) / 2); }\n\nion-item.friend-item .user-details-section .user-data-wrapper .user-info .user-name {\n        margin: 0px;\n        margin-bottom: 4px;\n        font-size: 16px; }\n\nion-item.friend-item .user-details-section .user-data-wrapper .user-info .user-job {\n        margin: 0px;\n        color: rgba(var(--ion-color-dark-rgb), 0.4);\n        font-size: 14px; }\n\nion-item.friend-item .user-details-section .user-actions-wrapper {\n      font-size: 14px;\n      max-width: 10ex;\n      max-width: 10ch; }\n\nion-item.friend-item .user-details-section .user-actions-wrapper .user-action {\n        margin: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9mcmllbmRzL3N0eWxlcy9DOlxcUHJvamVjdHNcXEFwcGxpY2F0aW9uc1xcaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyY1xcYXBwXFx1c2VyXFxmcmllbmRzXFxzdHlsZXNcXHVzZXItZnJpZW5kcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx1Q0FBYztFQUVkLDRDQUFxQjtFQUNyQixnREFBMEI7RUFDMUIsb0NBQWdDLEVBQUE7O0FBSWxDO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtFQUNWLGdEQUFnRCxFQUFBOztBQUpsRDtJQU9JLGlDQUFjO0lBQ2QsbUNBQWdCO0lBQ2hCLDRDQUFhO0lBQ2IsNkNBQVE7SUFDUixzQ0FBZ0I7SUFDaEIsZ0RBQTBCO0lBRTFCLDBCQUEwQjtJQUMxQixpRkFBaUYsRUFBQTs7QUFmckY7TUFrQk0sd0NBQXdDO01BQ3hDLDJDQUEyQyxFQUFBOztBQUtqRDtFQUNFLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLCtCQUErQjtFQUMvQiwyQ0FBMkMsRUFBQTs7QUFHN0M7RUFDRSxvQ0FBb0M7RUFDcEMsMkNBQTJDO0VBQzNDLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLDBCQUFzQjtFQUN0Qix3QkFBb0I7RUFDcEIsb0JBQWdCO0VBQ2hCLGtCQUFjO0VBQ2Qsb0NBQWlCO0VBQ2pCLDBDQUF1QixFQUFBOztBQU56QjtJQVNJLG9CQUFlO0lBQ2YscUJBQWlCO0lBQ2pCLDJCQUF1QixFQUFBOztBQVgzQjtJQWVJLDhCQUEwQjtJQUUxQixXQUFXO0lBQ1gsbUJBQW1CLEVBQUE7O0FBbEJ2QjtNQXFCTSxnQ0FBZ0M7TUFDaEMsMkNBQTJDO01BQzNDLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsdUJBQXVCLEVBQUE7O0FBekI3QjtRQTZCVSwyQ0FBMkMsRUFBQTs7QUE3QnJEO1FBaUNVLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsZUFBZSxFQUFBOztBQW5DekI7UUF1Q1UsV0FBVztRQUNYLDJDQUEyQztRQUMzQyxlQUFlLEVBQUE7O0FBekN6QjtNQStDTSxlQUFlO01BS2YsZUFBZTtNQUNmLGVBQWUsRUFBQTs7QUFyRHJCO1FBd0RRLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZnJpZW5kcy9zdHlsZXMvdXNlci1mcmllbmRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcclxuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbjpob3N0IHtcclxuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XHJcblxyXG4gIC0tcGFnZS1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xyXG4gIC0tcGFnZS1zZWdtZW50LWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcclxuICAtLXBhZ2Utc2VnbWVudC1pbmRpY2F0b3ItaGVpZ2h0OiAycHg7XHJcbn1cclxuXHJcbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG4udXNlci1mcmllbmRzLXNlZ21lbnQge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1zZWdtZW50LWJhY2tncm91bmQpO1xyXG5cclxuICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2Utc2VnbWVudC1iYWNrZ3JvdW5kKTtcclxuICAgIC0tY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC40KTtcclxuICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG5cclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbWluLWhlaWdodDogY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pICogMykgLSB2YXIoLS1wYWdlLXNlZ21lbnQtaW5kaWNhdG9yLWhlaWdodCkpO1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb24tc2VhcmNoYmFyLmZyaWVuZHMtc2VhcmNoYmFyIHtcclxuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbn1cclxuXHJcbi5mcmllbmRzLWxpc3Qge1xyXG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKTtcclxufVxyXG5cclxuLmVtcHR5LWxpc3QtbWVzc2FnZSB7XHJcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpO1xyXG4gIGNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuNCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24taXRlbS5mcmllbmQtaXRlbSB7XHJcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG5cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgfVxyXG5cclxuICAudXNlci1kZXRhaWxzLXNlY3Rpb24ge1xyXG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAudXNlci1kYXRhLXdyYXBwZXIge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAudXNlci1pbmZvIHtcclxuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51c2VyLW5hbWUge1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudXNlci1qb2Ige1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjQpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51c2VyLWFjdGlvbnMtd3JhcHBlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBhbHdheXMgaGF2ZSBzcGFjZSBmb3IgMTAgY2hhcmFjdGVyc1xyXG4gICAgICAvLyBBcyBjaCAod2lkdGggb2YgdGhlIGNoYXJhY3RlciAnMCcpIHVuaXQgaXMgbm90IDEwMCUgc3VwcG9ydGVkLCB3ZSB3aWxsIHVzZSBleCAoaGVpZ2h0IG9mIHRoZSAneCcgY2hhcmFjdGVyKSBhcyBhIGZhbGxiYWNrXHJcbiAgICAgIC8vIFNlZTogaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvY3NzL3VuaXRzLXZhbHVlcy9cclxuICAgICAgbWF4LXdpZHRoOiAxMGV4OyAvLyBUaGUgJ3gnIGNoYXJhY3RlciBpcyBzZW1pLXNxdWFyZSBjaGFyXHJcbiAgICAgIG1heC13aWR0aDogMTBjaDsgLy8gY2ggaXMgdGhlIG9ubHkgZm9udCB1bml0IGJhc2VkIG9uIHRoZSB3aWR0aCBvZiBjaGFyYWN0ZXJzXHJcblxyXG4gICAgICAudXNlci1hY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/friends/styles/user-friends.shell.scss":
/*!*************************************************************!*\
  !*** ./src/app/user/friends/styles/user-friends.shell.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-image-shell.user-image {\n  --image-shell-border-radius: var(--page-border-radius); }\n\n.user-name > app-text-shell {\n  --text-shell-line-height: 16px;\n  max-width: 50%; }\n\n.user-name > app-text-shell.text-loaded {\n    max-width: unset; }\n\n.user-job > app-text-shell {\n  --text-shell-line-height: 14px;\n  max-width: 70%; }\n\n.user-job > app-text-shell.text-loaded {\n    max-width: unset; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9mcmllbmRzL3N0eWxlcy9DOlxcUHJvamVjdHNcXEFwcGxpY2F0aW9uc1xcaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyY1xcYXBwXFx1c2VyXFxmcmllbmRzXFxzdHlsZXNcXHVzZXItZnJpZW5kcy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0RBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsOEJBQXlCO0VBQ3pCLGNBQWMsRUFBQTs7QUFGaEI7SUFLSSxnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDRSw4QkFBeUI7RUFDekIsY0FBYyxFQUFBOztBQUZoQjtJQUtJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci9mcmllbmRzL3N0eWxlcy91c2VyLWZyaWVuZHMuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pbWFnZS1zaGVsbC51c2VyLWltYWdlIHtcclxuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLXBhZ2UtYm9yZGVyLXJhZGl1cyk7XHJcbn1cclxuXHJcbi51c2VyLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIG1heC13aWR0aDogNTAlO1xyXG5cclxuICAmLnRleHQtbG9hZGVkIHtcclxuICAgIG1heC13aWR0aDogdW5zZXQ7XHJcbiAgfVxyXG59XHJcblxyXG4udXNlci1qb2IgPiBhcHAtdGV4dC1zaGVsbCB7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gIG1heC13aWR0aDogNzAlO1xyXG5cclxuICAmLnRleHQtbG9hZGVkIHtcclxuICAgIG1heC13aWR0aDogdW5zZXQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/friends/user-friends.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/friends/user-friends.module.ts ***!
  \*****************************************************/
/*! exports provided: UserFriendsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFriendsPageModule", function() { return UserFriendsPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_friends_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-friends.page */ "./src/app/user/friends/user-friends.page.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _user_friends_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-friends.resolver */ "./src/app/user/friends/user-friends.resolver.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _user_friends_page__WEBPACK_IMPORTED_MODULE_5__["UserFriendsPage"],
        resolve: {
            data: _user_friends_resolver__WEBPACK_IMPORTED_MODULE_7__["UserFriendsResolver"]
        }
    }
];
var UserFriendsPageModule = /** @class */ (function () {
    function UserFriendsPageModule() {
    }
    UserFriendsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            ],
            declarations: [_user_friends_page__WEBPACK_IMPORTED_MODULE_5__["UserFriendsPage"]],
            providers: [
                _user_friends_resolver__WEBPACK_IMPORTED_MODULE_7__["UserFriendsResolver"],
                _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
            ]
        })
    ], UserFriendsPageModule);
    return UserFriendsPageModule;
}());



/***/ }),

/***/ "./src/app/user/friends/user-friends.page.html":
/*!*****************************************************!*\
  !*** ./src/app/user/friends/user-friends.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"app/user\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"user-friends-content\">\r\n  <ion-segment class=\"user-friends-segment\" mode=\"md\" (ionChange)=\"segmentChanged($event)\">\r\n    <ion-segment-button mode=\"md\" checked=\"true\" value=\"friends\">\r\n      <ion-label>Friends</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"md\" value=\"followers\">\r\n      <ion-label>Followers</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"md\" value=\"following\">\r\n      <ion-label>Following</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <ion-searchbar class=\"friends-searchbar\" animated mode=\"ios\" [(ngModel)]=\"searchQuery\" (ionChange)=\"searchList()\"></ion-searchbar>\r\n\r\n  <ng-template #friendItem let-friend=\"friend\">\r\n    <ion-row class=\"user-details-section\">\r\n      <ion-col class=\"user-image-wrapper\" size=\"2\">\r\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\r\n          <app-image-shell class=\"user-image\" animation=\"spinner\" [src]=\"friend.image\" [alt]=\"'friend'\"></app-image-shell>\r\n        </app-aspect-ratio>\r\n      </ion-col>\r\n      <ion-col class=\"user-data-wrapper\">\r\n        <div class=\"user-info\">\r\n          <h3 class=\"user-name\">\r\n            <app-text-shell [data]=\"friend.name\"></app-text-shell>\r\n          </h3>\r\n          <h5 class=\"user-job\">\r\n            <app-text-shell [data]=\"friend.job\"></app-text-shell>\r\n          </h5>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col class=\"user-actions-wrapper\">\r\n        <ion-button *ngIf=\"!friend.following\" class=\"user-action\" expand=\"block\" size=\"small\" color=\"primary\">Follow</ion-button>\r\n        <ion-button *ngIf=\"friend.following\" class=\"user-action\" expand=\"block\" size=\"small\" color=\"light\">Following</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ng-template>\r\n\r\n  <section [hidden]=\"segmentValue !== 'friends'\">\r\n    <ion-list class=\"friends-list\" *ngIf=\"friendsList.length > 0\">\r\n      <ion-item class=\"friend-item\" *ngFor=\"let friend of friendsList\">\r\n        <ng-container *ngTemplateOutlet=\"friendItem; context: { friend: friend }\"></ng-container>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ng-container *ngIf=\"friendsList.length <= 0\">\r\n      <h3 class=\"empty-list-message\">No Friends</h3>\r\n    </ng-container>\r\n  </section>\r\n\r\n  <section [hidden]=\"segmentValue !== 'followers'\">\r\n    <ion-list class=\"friends-list\" *ngIf=\"followersList.length > 0\">\r\n      <ion-item class=\"friend-item\" *ngFor=\"let friend of followersList\">\r\n        <ng-container *ngTemplateOutlet=\"friendItem; context: { friend: friend }\"></ng-container>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ng-container *ngIf=\"followersList.length <= 0\">\r\n      <h3 class=\"empty-list-message\">No Followers</h3>\r\n    </ng-container>\r\n  </section>\r\n\r\n  <section [hidden]=\"segmentValue !== 'following'\">\r\n    <ion-list class=\"friends-list\" *ngIf=\"followingList.length > 0\">\r\n      <ion-item class=\"friend-item\" *ngFor=\"let friend of followingList\">\r\n        <ng-container *ngTemplateOutlet=\"friendItem; context: { friend: friend }\"></ng-container>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ng-container *ngIf=\"followingList.length <= 0\">\r\n      <h3 class=\"empty-list-message\">No Following</h3>\r\n    </ng-container>\r\n  </section>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/user/friends/user-friends.page.ts":
/*!***************************************************!*\
  !*** ./src/app/user/friends/user-friends.page.ts ***!
  \***************************************************/
/*! exports provided: UserFriendsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFriendsPage", function() { return UserFriendsPage; });
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


var UserFriendsPage = /** @class */ (function () {
    function UserFriendsPage(route) {
        this.route = route;
        this.segmentValue = 'friends';
        this.searchQuery = '';
        this.showFilters = false;
    }
    Object.defineProperty(UserFriendsPage.prototype, "isShell", {
        get: function () {
            return (this.data && this.data.isShell) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    UserFriendsPage.prototype.ngOnInit = function () {
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
                                _this.data = pageData;
                                _this.friendsList = _this.data.friends;
                                _this.followersList = _this.data.followers;
                                _this.followingList = _this.data.following;
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
    UserFriendsPage.prototype.segmentChanged = function (ev) {
        this.segmentValue = ev.detail.value;
        // Check if there's any filter and apply it
        this.searchList();
    };
    UserFriendsPage.prototype.searchList = function () {
        var query = (this.searchQuery && this.searchQuery !== null) ? this.searchQuery : '';
        if (this.segmentValue === 'friends') {
            this.friendsList = this.filterList(this.data.friends, query);
        }
        else if (this.segmentValue === 'followers') {
            this.followersList = this.filterList(this.data.followers, query);
        }
        else if (this.segmentValue === 'following') {
            this.followingList = this.filterList(this.data.following, query);
        }
    };
    UserFriendsPage.prototype.filterList = function (list, query) {
        return list.filter(function (item) { return item.name.toLowerCase().includes(query.toLowerCase()); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.is-shell'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], UserFriendsPage.prototype, "isShell", null);
    UserFriendsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-friends',
            template: __webpack_require__(/*! ./user-friends.page.html */ "./src/app/user/friends/user-friends.page.html"),
            styles: [__webpack_require__(/*! ./styles/user-friends.page.scss */ "./src/app/user/friends/styles/user-friends.page.scss"), __webpack_require__(/*! ./styles/user-friends.shell.scss */ "./src/app/user/friends/styles/user-friends.shell.scss"), __webpack_require__(/*! ./styles/user-friends.md.scss */ "./src/app/user/friends/styles/user-friends.md.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], UserFriendsPage);
    return UserFriendsPage;
}());



/***/ }),

/***/ "./src/app/user/friends/user-friends.resolver.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/friends/user-friends.resolver.ts ***!
  \*******************************************************/
/*! exports provided: UserFriendsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFriendsResolver", function() { return UserFriendsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserFriendsResolver = /** @class */ (function () {
    function UserFriendsResolver(userService) {
        this.userService = userService;
    }
    UserFriendsResolver.prototype.resolve = function () {
        // Get the Shell Provider from the service
        var shellProviderObservable = this.userService.getFriendsDataWithShell();
        // Resolve with Shell Provider
        var observablePromise = new Promise(function (resolve, reject) {
            resolve(shellProviderObservable);
        });
        return observablePromise;
    };
    UserFriendsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserFriendsResolver);
    return UserFriendsResolver;
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
//# sourceMappingURL=user-friends-user-friends-module.js.map