(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travel-details-travel-details-module"],{

/***/ "./src/app/travel/details/styles/travel-details.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/travel/details/styles/travel-details.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-tags-vertical-gutter: 2px;\n  --page-tags-horizontal-gutter: 4px;\n  --page-places-gutter: 5px;\n  --page-color: #00AFFF; }\n\n.travel-details-content {\n  --background: var(--page-background); }\n\n.travel-details-content .image-row {\n    --ion-grid-column-padding: 0px; }\n\n.travel-details-content .image-row .icon-wrapper {\n      margin: 0px 15%;\n      display: flex;\n      height: 100%;\n      justify-content: center;\n      align-items: center; }\n\n.travel-details-content .description-row {\n    --ion-grid-column-padding: 0px;\n    padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2); }\n\n.travel-details-content .description-row .details-name {\n      margin: 0px;\n      font-size: 20px; }\n\n.travel-details-content .description-row .details-short-description {\n      margin-top: calc(var(--page-margin) / 2);\n      margin-bottom: var(--page-margin);\n      font-size: 14px; }\n\n.travel-details-content .description-row .details-score {\n      display: flex;\n      justify-content: flex-start;\n      margin-bottom: var(--page-margin); }\n\n.travel-details-content .description-row .details-score .score-item {\n        display: flex;\n        align-items: center; }\n\n.travel-details-content .description-row .details-score .score-item:not(:last-child) {\n          padding-right: var(--page-margin); }\n\n.travel-details-content .description-row .details-score .score-item .score-icon {\n          font-size: 24px;\n          color: var(--ion-color-dark-tint); }\n\n.travel-details-content .description-row .details-score .score-item .score-value {\n          font-size: 16px;\n          margin-left: 4px; }\n\n.travel-details-content .description-row .details-tags {\n      --ion-grid-column-padding: 0px;\n      justify-content: center;\n      margin-top: calc(var(--page-tags-vertical-gutter) * -1); }\n\n.travel-details-content .description-row .details-tags .tag-wrapper {\n        padding: var(--page-tags-vertical-gutter) var(--page-tags-horizontal-gutter) var(--page-tags-vertical-gutter) 0px;\n        flex-grow: 0;\n        min-width: -webkit-fit-content;\n        min-width: -moz-fit-content;\n        min-width: fit-content; }\n\n.travel-details-content .description-row .details-tags .tag-wrapper:last-child {\n          padding-right: 0px; }\n\n.travel-details-content .description-row .details-tags .item-tag {\n        display: block;\n        border-radius: var(--app-narrow-radius);\n        border: 1px solid var(--ion-color-light-shade);\n        padding: var(--page-tags-vertical-gutter) var(--page-tags-horizontal-gutter);\n        font-size: 14px;\n        color: var(--ion-color-medium-tint); }\n\n.travel-details-content .description-row .details-description {\n      margin: calc(var(--page-margin) * 2) 0px 0px;\n      line-height: 1.3;\n      font-size: 14px; }\n\n.travel-details-content .detail-title {\n    font-size: 16px;\n    font-weight: 600;\n    color: var(--ion-color-dark-tint);\n    margin: 0px 0px var(--page-margin); }\n\n.travel-details-content .open-hours-wrapper {\n    padding: 0px var(--page-margin) calc(var(--page-margin) * 2); }\n\n.travel-details-content .open-hours-wrapper .schedules-list {\n      list-style: none;\n      margin: 0px;\n      padding: 0px; }\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item {\n        font-size: 14px;\n        color: var(--ion-color-medium-tint); }\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item + .open-hour-item {\n          margin-top: calc(var(--page-margin) / 2); }\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          width: 75%; }\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-day {\n            display: block;\n            padding-right: var(--page-margin);\n            width: 40%;\n            font-size: 14px; }\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours {\n            flex: 1;\n            display: flex;\n            justify-content: flex-end;\n            align-items: center; }\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-separator {\n              margin: 0px var(--page-margin);\n              line-height: 1; }\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-value {\n              flex: 0 1 25%;\n              font-weight: 500; }\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-value:first-child {\n                text-align: start; }\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-value:last-child {\n                text-align: end; }\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-closed {\n              text-transform: uppercase;\n              font-size: 12px; }\n\n.travel-details-content .location-wrapper {\n    padding: 0px 0px calc(var(--page-margin) * 2); }\n\n.travel-details-content .location-wrapper .location-header {\n      padding: 0px var(--page-margin) 0px;\n      margin-bottom: calc(var(--page-margin) / 2); }\n\n.travel-details-content .location-wrapper .detail-title {\n      margin-bottom: 5px; }\n\n.travel-details-content .location-wrapper .location-address {\n      display: block;\n      font-size: 14px;\n      color: var(--ion-color-medium-tint); }\n\n.travel-details-content .detail-alt-title {\n    text-align: center;\n    font-size: 18px;\n    font-weight: 400;\n    text-transform: uppercase;\n    color: var(--ion-color-dark-shade);\n    margin: 0px 0px var(--page-margin); }\n\n.travel-details-content .suggested-places-wrapper {\n    padding: 0px var(--page-margin) calc(var(--page-margin) * 2); }\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row {\n      --ion-grid-column-padding: var(--page-places-gutter);\n      margin-left: calc(var(--page-places-gutter) * -1);\n      margin-right: calc(var(--page-places-gutter) * -1); }\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place {\n        display: flex;\n        flex-direction: column;\n        padding-top: 0px;\n        padding-bottom: 0px; }\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place .place-details {\n          flex: 1;\n          display: flex;\n          flex-direction: column;\n          justify-content: space-between; }\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place .place-details .place-name {\n            font-size: 12px;\n            font-weight: 400;\n            margin: calc(var(--page-margin) / 2) 0px 5px;\n            text-align: center; }\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place .place-details .place-rating {\n            display: flex;\n            justify-content: center;\n            align-items: center; }\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place .place-details .place-rating .rating-icon {\n              color: var(--page-color); }\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place .place-details .place-rating .rating-value {\n              color: var(--page-color);\n              font-size: 14px;\n              margin-left: 4px; }\n\n.travel-details-content .related-activities-wrapper {\n    padding: 0px 0px calc(var(--page-margin) * 2); }\n\n.travel-details-content .related-activities-wrapper .related-activity {\n      --ion-grid-column-padding: 0px; }\n\n.travel-details-content .related-activities-wrapper .related-activity:not(:last-child) {\n        margin-bottom: var(--page-margin); }\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details {\n        text-align: center;\n        position: relative; }\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details .activity-name {\n          margin: 0px;\n          margin-top: 5px;\n          font-size: 14px; }\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details .activity-category {\n          display: block;\n          margin-top: 2px;\n          font-size: 12px; }\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details .activity-rating {\n          position: absolute;\n          top: 0;\n          right: 0;\n          margin-top: 5px;\n          margin-right: var(--page-margin);\n          display: flex;\n          justify-content: center;\n          align-items: center; }\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details .activity-rating .rating-icon {\n            color: var(--page-color); }\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details .activity-rating .rating-value {\n            color: var(--page-color);\n            font-size: 14px;\n            margin-left: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhdmVsL2RldGFpbHMvc3R5bGVzL0M6XFxQcm9qZWN0c1xcQXBwbGljYXRpb25zXFxpb25pYzQtZnVsbC1zdGFydGVyLWFwcC0xLjIvc3JjXFxhcHBcXHRyYXZlbFxcZGV0YWlsc1xcc3R5bGVzXFx0cmF2ZWwtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQ0FBYztFQUNkLHdDQUFrQjtFQUVsQixnQ0FBNEI7RUFDNUIsa0NBQThCO0VBQzlCLHlCQUFxQjtFQUVyQixxQkFBYSxFQUFBOztBQUlmO0VBQ0Usb0NBQWEsRUFBQTs7QUFEZjtJQUlJLDhCQUEwQixFQUFBOztBQUo5QjtNQU9NLGVBQWU7TUFDZixhQUFhO01BQ2IsWUFBWTtNQUNaLHVCQUF1QjtNQUN2QixtQkFBbUIsRUFBQTs7QUFYekI7SUFnQkksOEJBQTBCO0lBRTFCLDJFQUEyRSxFQUFBOztBQWxCL0U7TUFxQk0sV0FBVztNQUNYLGVBQWUsRUFBQTs7QUF0QnJCO01BMEJNLHdDQUF3QztNQUN4QyxpQ0FBaUM7TUFDakMsZUFBZSxFQUFBOztBQTVCckI7TUFnQ00sYUFBYTtNQUNiLDJCQUEyQjtNQUMzQixpQ0FBaUMsRUFBQTs7QUFsQ3ZDO1FBcUNRLGFBQWE7UUFDYixtQkFBbUIsRUFBQTs7QUF0QzNCO1VBeUNVLGlDQUFpQyxFQUFBOztBQXpDM0M7VUE2Q1UsZUFBZTtVQUNmLGlDQUFpQyxFQUFBOztBQTlDM0M7VUFrRFUsZUFBZTtVQUNmLGdCQUFnQixFQUFBOztBQW5EMUI7TUF5RE0sOEJBQTBCO01BRTFCLHVCQUF1QjtNQUN2Qix1REFBdUQsRUFBQTs7QUE1RDdEO1FBK0RRLGlIQUFpSDtRQUNqSCxZQUFZO1FBQ1osOEJBQXNCO1FBQXRCLDJCQUFzQjtRQUF0QixzQkFBc0IsRUFBQTs7QUFqRTlCO1VBb0VVLGtCQUFrQixFQUFBOztBQXBFNUI7UUF5RVEsY0FBYztRQUNkLHVDQUF1QztRQUN2Qyw4Q0FBOEM7UUFDOUMsNEVBQTRFO1FBQzVFLGVBQWU7UUFDZixtQ0FBbUMsRUFBQTs7QUE5RTNDO01BbUZNLDRDQUE0QztNQUM1QyxnQkFBZ0I7TUFDaEIsZUFBZSxFQUFBOztBQXJGckI7SUEwRkksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsa0NBQWtDLEVBQUE7O0FBN0Z0QztJQWlHSSw0REFBNEQsRUFBQTs7QUFqR2hFO01Bb0dNLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsWUFBWSxFQUFBOztBQXRHbEI7UUF5R1EsZUFBZTtRQUNmLG1DQUFtQyxFQUFBOztBQTFHM0M7VUE2R1Usd0NBQXdDLEVBQUE7O0FBN0dsRDtVQWlIVSxhQUFhO1VBQ2IsbUJBQW1CO1VBQ25CLDhCQUE4QjtVQUM5QixVQUFVLEVBQUE7O0FBcEhwQjtZQXVIWSxjQUFjO1lBQ2QsaUNBQWlDO1lBQ2pDLFVBQVU7WUFDVixlQUFlLEVBQUE7O0FBMUgzQjtZQThIWSxPQUFPO1lBQ1AsYUFBYTtZQUNiLHlCQUF5QjtZQUN6QixtQkFBbUIsRUFBQTs7QUFqSS9CO2NBb0ljLDhCQUE4QjtjQUM5QixjQUFjLEVBQUE7O0FBckk1QjtjQXlJYyxhQUFhO2NBQ2IsZ0JBQWdCLEVBQUE7O0FBMUk5QjtnQkE2SWdCLGlCQUFpQixFQUFBOztBQTdJakM7Z0JBZ0pnQixlQUFlLEVBQUE7O0FBaEovQjtjQXFKYyx5QkFBeUI7Y0FDekIsZUFBZSxFQUFBOztBQXRKN0I7SUErSkksNkNBQTZDLEVBQUE7O0FBL0pqRDtNQWtLTSxtQ0FBbUM7TUFDbkMsMkNBQTJDLEVBQUE7O0FBbktqRDtNQXVLTSxrQkFBa0IsRUFBQTs7QUF2S3hCO01BMktNLGNBQWM7TUFDZCxlQUFlO01BQ2YsbUNBQW1DLEVBQUE7O0FBN0t6QztJQWtMSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsa0NBQWtDO0lBQ2xDLGtDQUFrQyxFQUFBOztBQXZMdEM7SUEyTEksNERBQTRELEVBQUE7O0FBM0xoRTtNQThMTSxvREFBMEI7TUFFMUIsaURBQWlEO01BQ2pELGtEQUFrRCxFQUFBOztBQWpNeEQ7UUFvTVEsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixnQkFBZ0I7UUFDaEIsbUJBQW1CLEVBQUE7O0FBdk0zQjtVQTBNVSxPQUFPO1VBQ1AsYUFBYTtVQUNiLHNCQUFzQjtVQUN0Qiw4QkFBOEIsRUFBQTs7QUE3TXhDO1lBZ05ZLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsNENBQTRDO1lBQzVDLGtCQUFrQixFQUFBOztBQW5OOUI7WUF1TlksYUFBYTtZQUNiLHVCQUF1QjtZQUN2QixtQkFBbUIsRUFBQTs7QUF6Ti9CO2NBNE5jLHdCQUF3QixFQUFBOztBQTVOdEM7Y0FnT2Msd0JBQXdCO2NBQ3hCLGVBQWU7Y0FDZixnQkFBZ0IsRUFBQTs7QUFsTzlCO0lBMk9JLDZDQUE2QyxFQUFBOztBQTNPakQ7TUE4T00sOEJBQTBCLEVBQUE7O0FBOU9oQztRQWlQUSxpQ0FBaUMsRUFBQTs7QUFqUHpDO1FBcVBRLGtCQUFrQjtRQUNsQixrQkFBa0IsRUFBQTs7QUF0UDFCO1VBeVBVLFdBQVc7VUFDWCxlQUFlO1VBQ2YsZUFBZSxFQUFBOztBQTNQekI7VUErUFUsY0FBYztVQUNkLGVBQWU7VUFDZixlQUFlLEVBQUE7O0FBalF6QjtVQXFRVSxrQkFBa0I7VUFDbEIsTUFBTTtVQUNOLFFBQVE7VUFDUixlQUFlO1VBQ2YsZ0NBQWdDO1VBRWhDLGFBQWE7VUFDYix1QkFBdUI7VUFDdkIsbUJBQW1CLEVBQUE7O0FBN1E3QjtZQWdSWSx3QkFBd0IsRUFBQTs7QUFoUnBDO1lBb1JZLHdCQUF3QjtZQUN4QixlQUFlO1lBQ2YsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90cmF2ZWwvZGV0YWlscy9zdHlsZXMvdHJhdmVsLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xyXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuOmhvc3Qge1xyXG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XHJcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcclxuXHJcbiAgLS1wYWdlLXRhZ3MtdmVydGljYWwtZ3V0dGVyOiAycHg7XHJcbiAgLS1wYWdlLXRhZ3MtaG9yaXpvbnRhbC1ndXR0ZXI6IDRweDtcclxuICAtLXBhZ2UtcGxhY2VzLWd1dHRlcjogNXB4O1xyXG5cclxuICAtLXBhZ2UtY29sb3I6ICMwMEFGRkY7XHJcbn1cclxuXHJcbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG4udHJhdmVsLWRldGFpbHMtY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG5cclxuICAuaW1hZ2Utcm93IHtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuXHJcbiAgICAuaWNvbi13cmFwcGVyIHtcclxuICAgICAgbWFyZ2luOiAwcHggMTUlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRlc2NyaXB0aW9uLXJvdyB7XHJcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xyXG5cclxuICAgIC5kZXRhaWxzLW5hbWUge1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXRhaWxzLXNob3J0LWRlc2NyaXB0aW9uIHtcclxuICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRldGFpbHMtc2NvcmUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuXHJcbiAgICAgIC5zY29yZS1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2NvcmUtaWNvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2NvcmUtdmFsdWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGV0YWlscy10YWdzIHtcclxuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xyXG5cclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS10YWdzLXZlcnRpY2FsLWd1dHRlcikgKiAtMSk7XHJcblxyXG4gICAgICAudGFnLXdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtdGFncy1ob3Jpem9udGFsLWd1dHRlcikgdmFyKC0tcGFnZS10YWdzLXZlcnRpY2FsLWd1dHRlcikgMHB4O1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMDtcclxuICAgICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xyXG5cclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLml0ZW0tdGFnIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLXRhZ3MtdmVydGljYWwtZ3V0dGVyKSB2YXIoLS1wYWdlLXRhZ3MtaG9yaXpvbnRhbC1ndXR0ZXIpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kZXRhaWxzLWRlc2NyaXB0aW9uIHtcclxuICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIDBweCAwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kZXRhaWwtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcclxuICAgIG1hcmdpbjogMHB4IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgfVxyXG5cclxuICAub3Blbi1ob3Vycy13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcclxuXHJcbiAgICAuc2NoZWR1bGVzLWxpc3Qge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG5cclxuICAgICAgLm9wZW4taG91ci1pdGVtIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XHJcblxyXG4gICAgICAgICYgKyAub3Blbi1ob3VyLWl0ZW0ge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zY2hlZHVsZS1vdXRlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIHdpZHRoOiA3NSU7XHJcblxyXG4gICAgICAgICAgLnNjaGVkdWxlLWRheSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2NoZWR1bGUtaG91cnMge1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgLnNjaGVkdWxlLXNlcGFyYXRvciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2NoZWR1bGUtdmFsdWUge1xyXG4gICAgICAgICAgICAgIGZsZXg6IDAgMSAyNSU7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zY2hlZHVsZS1jbG9zZWQge1xyXG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubG9jYXRpb24td3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XHJcblxyXG4gICAgLmxvY2F0aW9uLWhlYWRlciB7XHJcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXRhaWwtdGl0bGUge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvY2F0aW9uLWFkZHJlc3Mge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kZXRhaWwtYWx0LXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcclxuICAgIG1hcmdpbjogMHB4IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgfVxyXG5cclxuICAuc3VnZ2VzdGVkLXBsYWNlcy13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcclxuXHJcbiAgICAuc3VnZ2VzdGVkLXBsYWNlcy1yb3cge1xyXG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiB2YXIoLS1wYWdlLXBsYWNlcy1ndXR0ZXIpO1xyXG5cclxuICAgICAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1wbGFjZXMtZ3V0dGVyKSAqIC0xKTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtcGxhY2VzLWd1dHRlcikgKiAtMSk7XHJcblxyXG4gICAgICAuc3VnZ2VzdGVkLXBsYWNlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG5cclxuICAgICAgICAucGxhY2UtZGV0YWlscyB7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICAgLnBsYWNlLW5hbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHggNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnBsYWNlLXJhdGluZyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgLnJhdGluZy1pY29uIHtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5yYXRpbmctdmFsdWUge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJlbGF0ZWQtYWN0aXZpdGllcy13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcclxuXHJcbiAgICAucmVsYXRlZC1hY3Rpdml0eSB7XHJcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuXHJcbiAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWN0aXZpdHktZGV0YWlscyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgLmFjdGl2aXR5LW5hbWUge1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWN0aXZpdHktY2F0ZWdvcnkge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWN0aXZpdHktcmF0aW5nIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcblxyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAucmF0aW5nLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnJhdGluZy12YWx1ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/travel/details/styles/travel-details.shell.scss":
/*!*****************************************************************!*\
  !*** ./src/app/travel/details/styles/travel-details.shell.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --shell-color: #00AFFF;\n  --shell-color-rgb: 0,175,255; }\n\napp-image-shell.details-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-overlay-background: rgba(var(--ion-color-dark-rgb), .40);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25); }\n\napp-image-shell.details-icon {\n  --image-shell-loading-background: transparent; }\n\n.details-name > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 20px; }\n\n.details-short-description > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 80%; }\n\n.details-short-description > app-text-shell.text-loaded {\n    max-width: inherit; }\n\n.score-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 30px; }\n\n.score-value > app-text-shell.text-loaded {\n    min-width: 0px; }\n\n.item-tag > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 50px; }\n\n.item-tag > app-text-shell.text-loaded {\n    min-width: 0px; }\n\n.details-description > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px; }\n\n.schedule-day > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 90%; }\n\n.schedule-day > app-text-shell.text-loaded {\n    max-width: inherit; }\n\n.schedule-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 100%; }\n\n.schedule-value > app-text-shell.text-loaded {\n    max-width: inherit; }\n\n.location-address > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 60%; }\n\n.location-address > app-text-shell.text-loaded {\n    max-width: inherit; }\n\napp-image-shell.location-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25); }\n\napp-image-shell.place-picture {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .05);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .15); }\n\n.place-name > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 12px; }\n\n.rating-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .05);\n  --text-shell-line-height: 14px;\n  min-width: 30px; }\n\n.rating-value > app-text-shell.text-loaded {\n    min-width: 0px; }\n\napp-image-shell.related-activity-picture {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .05);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .15); }\n\n.activity-name > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n  max-width: 25%;\n  margin: 0px auto; }\n\n.activity-name > app-text-shell.text-loaded {\n    max-width: inherit;\n    margin: 0px; }\n\n.activity-category > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 12px;\n  max-width: 45%;\n  margin: 0px auto; }\n\n.activity-category > app-text-shell.text-loaded {\n    max-width: inherit;\n    margin: 0px; }\n\n.rating-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 30px; }\n\n.rating-value > app-text-shell.text-loaded {\n    min-width: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhdmVsL2RldGFpbHMvc3R5bGVzL0M6XFxQcm9qZWN0c1xcQXBwbGljYXRpb25zXFxpb25pYzQtZnVsbC1zdGFydGVyLWFwcC0xLjIvc3JjXFxhcHBcXHRyYXZlbFxcZGV0YWlsc1xcc3R5bGVzXFx0cmF2ZWwtZGV0YWlscy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQWM7RUFDZCw0QkFBa0IsRUFBQTs7QUFVcEI7RUFDRSxtRUFBaUM7RUFDakMsc0VBQWlDO0VBQ2pDLDhEQUE0QixFQUFBOztBQUc5QjtFQUNFLDZDQUFpQyxFQUFBOztBQUduQztFQUNFLDBEQUF3QjtFQUN4Qiw4QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSwwREFBd0I7RUFDeEIsOEJBQXlCO0VBQ3pCLGNBQWMsRUFBQTs7QUFIaEI7SUFNSSxrQkFBa0IsRUFBQTs7QUFJdEI7RUFDRSwwREFBd0I7RUFDeEIsOEJBQXlCO0VBQ3pCLGVBQWUsRUFBQTs7QUFIakI7SUFNSSxjQUFjLEVBQUE7O0FBSWxCO0VBQ0UsMERBQXdCO0VBQ3hCLDhCQUF5QjtFQUN6QixlQUFlLEVBQUE7O0FBSGpCO0lBTUksY0FBYyxFQUFBOztBQUlsQjtFQUNFLDBEQUF3QjtFQUN4Qiw4QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSwwREFBd0I7RUFDeEIsOEJBQXlCO0VBQ3pCLGNBQWMsRUFBQTs7QUFIaEI7SUFNSSxrQkFBa0IsRUFBQTs7QUFJdEI7RUFDRSwwREFBd0I7RUFDeEIsOEJBQXlCO0VBQ3pCLGVBQWUsRUFBQTs7QUFIakI7SUFNSSxrQkFBa0IsRUFBQTs7QUFJdEI7RUFDRSwwREFBd0I7RUFDeEIsOEJBQXlCO0VBQ3pCLGNBQWMsRUFBQTs7QUFIaEI7SUFNSSxrQkFBa0IsRUFBQTs7QUFJdEI7RUFDRSxtRUFBaUM7RUFDakMsOERBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsbUVBQWlDO0VBQ2pDLDhEQUE0QixFQUFBOztBQUc5QjtFQUNFLDBEQUF3QjtFQUN4Qiw4QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSwwREFBd0I7RUFDeEIsOEJBQXlCO0VBQ3pCLGVBQWUsRUFBQTs7QUFIakI7SUFNSSxjQUFjLEVBQUE7O0FBSWxCO0VBQ0UsbUVBQWlDO0VBQ2pDLDhEQUE0QixFQUFBOztBQUc5QjtFQUNFLDBEQUF3QjtFQUN4Qiw4QkFBeUI7RUFDekIsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUpsQjtJQU9JLGtCQUFrQjtJQUNsQixXQUFXLEVBQUE7O0FBSWY7RUFDRSwwREFBd0I7RUFDeEIsOEJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFKbEI7SUFPSSxrQkFBa0I7SUFDbEIsV0FBVyxFQUFBOztBQUlmO0VBQ0UsMERBQXdCO0VBQ3hCLDhCQUF5QjtFQUN6QixlQUFlLEVBQUE7O0FBSGpCO0lBTUksY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdHJhdmVsL2RldGFpbHMvc3R5bGVzL3RyYXZlbC1kZXRhaWxzLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXHJcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG46aG9zdCB7XHJcbiAgLS1zaGVsbC1jb2xvcjogIzAwQUZGRjtcclxuICAtLXNoZWxsLWNvbG9yLXJnYjogMCwxNzUsMjU1O1xyXG59XHJcblxyXG4vLyBZb3UgY2FuIGFsc28gYXBwbHkgc2hlZWwgc3R5bGVzIHRvIHRoZSBlbnRpcmUgcGFnZVxyXG46aG9zdCguaXMtc2hlbGwpIHtcclxuICAvLyBpb24tY29udGVudCB7XHJcbiAgLy8gICBvcGFjaXR5OiAwLjg7XHJcbiAgLy8gfVxyXG59XHJcblxyXG5hcHAtaW1hZ2Utc2hlbGwuZGV0YWlscy1pbWFnZSB7XHJcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcclxuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAuNDApO1xyXG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xyXG59XHJcblxyXG5hcHAtaW1hZ2Utc2hlbGwuZGV0YWlscy1pY29uIHtcclxuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5kZXRhaWxzLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcclxuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5kZXRhaWxzLXNob3J0LWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gIG1heC13aWR0aDogODAlO1xyXG5cclxuICAmLnRleHQtbG9hZGVkIHtcclxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuXHJcbi5zY29yZS12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcclxuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcclxuICBtaW4td2lkdGg6IDMwcHg7XHJcblxyXG4gICYudGV4dC1sb2FkZWQge1xyXG4gICAgbWluLXdpZHRoOiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaXRlbS10YWcgPiBhcHAtdGV4dC1zaGVsbCB7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcclxuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgbWluLXdpZHRoOiA1MHB4O1xyXG5cclxuICAmLnRleHQtbG9hZGVkIHtcclxuICAgIG1pbi13aWR0aDogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmRldGFpbHMtZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCB7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcclxuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XHJcbn1cclxuXHJcbi5zY2hlZHVsZS1kYXkgPiBhcHAtdGV4dC1zaGVsbCB7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcclxuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgbWF4LXdpZHRoOiA5MCU7XHJcblxyXG4gICYudGV4dC1sb2FkZWQge1xyXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xyXG4gIH1cclxufVxyXG5cclxuLnNjaGVkdWxlLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuXHJcbiAgJi50ZXh0LWxvYWRlZCB7XHJcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9jYXRpb24tYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsIHtcclxuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcclxuICBtYXgtd2lkdGg6IDYwJTtcclxuXHJcbiAgJi50ZXh0LWxvYWRlZCB7XHJcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XHJcbiAgfVxyXG59XHJcblxyXG5hcHAtaW1hZ2Utc2hlbGwubG9jYXRpb24taW1hZ2Uge1xyXG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XHJcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XHJcbn1cclxuXHJcbmFwcC1pbWFnZS1zaGVsbC5wbGFjZS1waWN0dXJlIHtcclxuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMDUpO1xyXG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xyXG59XHJcblxyXG4ucGxhY2UtbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcclxuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcclxufVxyXG5cclxuLnJhdGluZy12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcclxuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMDUpO1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcclxuICBtaW4td2lkdGg6IDMwcHg7XHJcblxyXG4gICYudGV4dC1sb2FkZWQge1xyXG4gICAgbWluLXdpZHRoOiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5hcHAtaW1hZ2Utc2hlbGwucmVsYXRlZC1hY3Rpdml0eS1waWN0dXJlIHtcclxuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMDUpO1xyXG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xyXG59XHJcblxyXG4uYWN0aXZpdHktbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcclxuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcclxuICBtYXgtd2lkdGg6IDI1JTtcclxuICBtYXJnaW46IDBweCBhdXRvO1xyXG5cclxuICAmLnRleHQtbG9hZGVkIHtcclxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmFjdGl2aXR5LWNhdGVnb3J5ID4gYXBwLXRleHQtc2hlbGwge1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gIG1heC13aWR0aDogNDUlO1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcblxyXG4gICYudGV4dC1sb2FkZWQge1xyXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucmF0aW5nLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gIG1pbi13aWR0aDogMzBweDtcclxuXHJcbiAgJi50ZXh0LWxvYWRlZCB7XHJcbiAgICBtaW4td2lkdGg6IDBweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/travel/details/travel-details.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/travel/details/travel-details.module.ts ***!
  \*********************************************************/
/*! exports provided: TravelDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelDetailsPageModule", function() { return TravelDetailsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _travel_details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./travel-details.page */ "./src/app/travel/details/travel-details.page.ts");
/* harmony import */ var _travel_details_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./travel-details.resolver */ "./src/app/travel/details/travel-details.resolver.ts");
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
        component: _travel_details_page__WEBPACK_IMPORTED_MODULE_7__["TravelDetailsPage"],
        resolve: {
            data: _travel_details_resolver__WEBPACK_IMPORTED_MODULE_8__["TravelDetailsResolver"]
        }
    }
];
var TravelDetailsPageModule = /** @class */ (function () {
    function TravelDetailsPageModule() {
    }
    TravelDetailsPageModule = __decorate([
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
                _travel_details_page__WEBPACK_IMPORTED_MODULE_7__["TravelDetailsPage"]
            ],
            providers: [
                _travel_details_resolver__WEBPACK_IMPORTED_MODULE_8__["TravelDetailsResolver"],
                _travel_service__WEBPACK_IMPORTED_MODULE_9__["TravelService"]
            ]
        })
    ], TravelDetailsPageModule);
    return TravelDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/travel/details/travel-details.page.html":
/*!*********************************************************!*\
  !*** ./src/app/travel/details/travel-details.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"app/categories/travel\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Travel Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"travel-details-content\">\r\n  <ion-row class=\"image-row\">\r\n    <ion-col size=\"12\">\r\n      <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"add-overlay details-image\" [src]=\"details?.image\">\r\n        <app-aspect-ratio [ratio]=\"{w:64, h:50}\">\r\n          <div class=\"icon-wrapper\">\r\n            <app-aspect-ratio [ratio]=\"{w: 47, h: 25}\">\r\n              <app-image-shell [src]=\"details?.icon\" class=\"details-icon\"></app-image-shell>\r\n            </app-aspect-ratio>\r\n          </div>\r\n        </app-aspect-ratio>\r\n      </app-image-shell>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"description-row\">\r\n    <ion-col size=\"12\">\r\n      <h3 class=\"details-name\">\r\n        <app-text-shell animation=\"bouncing\" [data]=\"details?.name?.concat(' - ', details?.category)\"></app-text-shell>\r\n      </h3>\r\n      <p class=\"details-short-description\">\r\n        <app-text-shell animation=\"bouncing\" [data]=\"details?.shortDescription\"></app-text-shell>\r\n      </p>\r\n    </ion-col>\r\n    <ion-col size=\"12\">\r\n      <div class=\"details-score\">\r\n        <div class=\"score-item\">\r\n          <ion-icon class=\"score-icon\" src=\"./assets/sample-icons/travel/star.svg\"></ion-icon>\r\n          <div class=\"score-value\">\r\n            <app-text-shell [data]=\"details?.rating\"></app-text-shell>\r\n          </div>\r\n        </div>\r\n        <div class=\"score-item\">\r\n          <ion-icon class=\"score-icon\" src=\"./assets/sample-icons/travel/comments.svg\"></ion-icon>\r\n          <div class=\"score-value\">\r\n            <app-text-shell [data]=\"details?.reviewsCount\"></app-text-shell>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"12\">\r\n      <ion-row class=\"details-tags\">\r\n        <ion-col class=\"tag-wrapper\" *ngFor=\"let tag of details?.tags\">\r\n          <span class=\"item-tag\">\r\n            <app-text-shell [data]=\"tag\"></app-text-shell>\r\n          </span>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n    <ion-col size=\"12\">\r\n      <p class=\"details-description\">\r\n        <app-text-shell animation=\"bouncing\" lines=\"6\" [data]=\"details?.fullDescription\"></app-text-shell>\r\n      </p>\r\n    </ion-col>\r\n  </ion-row>\r\n  <div class=\"open-hours-wrapper\">\r\n    <h3 class=\"detail-title\">When?</h3>\r\n    <ul class=\"schedules-list\">\r\n      <li class=\"open-hour-item\" *ngFor=\"let schedule of details?.openHours\">\r\n        <div class=\"schedule-outer\">\r\n          <span class=\"schedule-day\">\r\n            <app-text-shell [data]=\"schedule.day\"></app-text-shell>\r\n          </span>\r\n          <div class=\"schedule-hours\">\r\n            <ng-container *ngIf=\"schedule.open\">\r\n              <span class=\"schedule-value\">\r\n                <app-text-shell [data]=\"schedule.hourFrom\"></app-text-shell>\r\n              </span>\r\n              <span class=\"schedule-separator\">to</span>\r\n              <span class=\"schedule-value\">\r\n                <app-text-shell [data]=\"schedule.hourTo\"></app-text-shell>\r\n              </span>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"!schedule.open\">\r\n              <ion-badge class=\"schedule-closed\" color=\"medium\">closed</ion-badge>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"location-wrapper\">\r\n    <div class=\"location-header\">\r\n      <h3 class=\"detail-title\">Where?</h3>\r\n      <span class=\"location-address\">\r\n        <app-text-shell [data]=\"details.location?.address\"></app-text-shell>\r\n      </span>\r\n    </div>\r\n    <!-- <app-aspect-ratio [ratio]=\"{w: 64, h: 30}\">\r\n      <app-image-shell [src]=\"'https://maps.googleapis.com/maps/api/staticmap?center=' + details.location?.latlng + '&zoom=15&size=640x300&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xd9453a%7C' + details.location?.latlng + '&key=YOUR_KEY_HERE'\">\r\n      </app-image-shell>\r\n    </app-aspect-ratio> -->\r\n    <app-aspect-ratio [ratio]=\"{w: 64, h: 30}\">\r\n      <app-image-shell class=\"location-image\" animation=\"spinner\" [src]=\"details.location?.mapImage\"></app-image-shell>\r\n    </app-aspect-ratio>\r\n  </div>\r\n  <div class=\"suggested-places-wrapper\" *ngIf=\"details?.whereToStay && details.whereToStay.length > 0\">\r\n    <h3 class=\"detail-alt-title\">Need a place to stay?</h3>\r\n    <ion-row class=\"suggested-places-row\">\r\n      <ion-col size=\"4\" class=\"suggested-place\" *ngFor=\"let placeToStay of details?.whereToStay\">\r\n        <app-aspect-ratio [ratio]=\"{w: 18, h: 23}\">\r\n          <app-image-shell class=\"place-picture\" animation=\"spinner\" [src]=\"placeToStay.picture\"></app-image-shell>\r\n        </app-aspect-ratio>\r\n        <div class=\"place-details\">\r\n          <h5 class=\"place-name\">\r\n            <app-text-shell [data]=\"placeToStay.name\"></app-text-shell>\r\n          </h5>\r\n          <div class=\"place-rating\">\r\n            <ion-icon class=\"rating-icon\" name=\"star-outline\"></ion-icon>\r\n            <div class=\"rating-value\">\r\n              <app-text-shell [data]=\"placeToStay.rating\"></app-text-shell>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <div class=\"suggested-places-wrapper\" *ngIf=\"details?.whereToEat && details.whereToEat.length > 0\">\r\n    <h3 class=\"detail-alt-title\">Grab a bite?</h3>\r\n    <ion-row class=\"suggested-places-row\">\r\n      <ion-col size=\"4\" class=\"suggested-place\" *ngFor=\"let placeToEat of details?.whereToEat\">\r\n        <app-aspect-ratio [ratio]=\"{w: 18, h: 23}\">\r\n          <app-image-shell class=\"place-picture\" animation=\"spinner\" [src]=\"placeToEat.picture\"></app-image-shell>\r\n        </app-aspect-ratio>\r\n        <div class=\"place-details\">\r\n          <h5 class=\"place-name\">\r\n            <app-text-shell [data]=\"placeToEat.name\"></app-text-shell>\r\n          </h5>\r\n          <div class=\"place-rating\">\r\n            <ion-icon class=\"rating-icon\" name=\"star-outline\"></ion-icon>\r\n            <div class=\"rating-value\">\r\n              <app-text-shell [data]=\"placeToEat.rating\"></app-text-shell>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <div class=\"related-activities-wrapper\" *ngIf=\"details?.relatedActivities && details.relatedActivities.length > 0\">\r\n    <h3 class=\"detail-alt-title\">More activities?</h3>\r\n    <ion-row class=\"related-activity\" *ngFor=\"let relatedActivity of details?.relatedActivities\">\r\n      <ion-col size=\"12\">\r\n        <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"related-activity-picture\" [src]=\"relatedActivity.picture\">\r\n          <app-aspect-ratio [ratio]=\"{w:64, h:23}\">\r\n          </app-aspect-ratio>\r\n        </app-image-shell>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"activity-details\">\r\n        <h5 class=\"activity-name\">\r\n          <app-text-shell [data]=\"relatedActivity.name\"></app-text-shell>\r\n        </h5>\r\n        <span class=\"activity-category\">\r\n          <app-text-shell [data]=\"relatedActivity.category\"></app-text-shell>\r\n        </span>\r\n        <div class=\"activity-rating\">\r\n          <ion-icon class=\"rating-icon\" name=\"star-outline\"></ion-icon>\r\n          <div class=\"rating-value\">\r\n            <app-text-shell [data]=\"relatedActivity.rating\"></app-text-shell>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/travel/details/travel-details.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/travel/details/travel-details.page.ts ***!
  \*******************************************************/
/*! exports provided: TravelDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelDetailsPage", function() { return TravelDetailsPage; });
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


var TravelDetailsPage = /** @class */ (function () {
    function TravelDetailsPage(route) {
        this.route = route;
    }
    Object.defineProperty(TravelDetailsPage.prototype, "isShell", {
        get: function () {
            return (this.details && this.details.isShell) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    TravelDetailsPage.prototype.ngOnInit = function () {
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
                                _this.details = pageData;
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
    ], TravelDetailsPage.prototype, "isShell", null);
    TravelDetailsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-travel-details',
            template: __webpack_require__(/*! ./travel-details.page.html */ "./src/app/travel/details/travel-details.page.html"),
            styles: [__webpack_require__(/*! ./styles/travel-details.page.scss */ "./src/app/travel/details/styles/travel-details.page.scss"), __webpack_require__(/*! ./styles/travel-details.shell.scss */ "./src/app/travel/details/styles/travel-details.shell.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TravelDetailsPage);
    return TravelDetailsPage;
}());



/***/ }),

/***/ "./src/app/travel/details/travel-details.resolver.ts":
/*!***********************************************************!*\
  !*** ./src/app/travel/details/travel-details.resolver.ts ***!
  \***********************************************************/
/*! exports provided: TravelDetailsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelDetailsResolver", function() { return TravelDetailsResolver; });
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


var TravelDetailsResolver = /** @class */ (function () {
    function TravelDetailsResolver(travelService) {
        this.travelService = travelService;
    }
    TravelDetailsResolver.prototype.resolve = function () {
        // Get the Shell Provider from the service
        var shellProviderObservable = this.travelService.getDetailsDataWithShell();
        // Resolve with Shell Provider
        var observablePromise = new Promise(function (resolve, reject) {
            resolve(shellProviderObservable);
        });
        return observablePromise;
    };
    TravelDetailsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_travel_service__WEBPACK_IMPORTED_MODULE_1__["TravelService"]])
    ], TravelDetailsResolver);
    return TravelDetailsResolver;
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
//# sourceMappingURL=travel-details-travel-details-module.js.map