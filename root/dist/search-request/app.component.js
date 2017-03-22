"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var request_1 = require('./request');
var REQUESTS = [
    new request_1.Request('entrance pass', 'סיכום שנתי', 'Summary Annual Activity northern arena', 'received', '15.2.2014'),
    new request_1.Request('IT support', 'דוח זיצ"פ', '', 'completed', '15.2.2014'),
    new request_1.Request('document distribution', 'תיקון מדפסת', '', 'active', '15.2.2014')
];
var SearchRequestComponent = (function () {
    function SearchRequestComponent() {
        this.requests = REQUESTS;
        this.selectedRequest = this.requests[0];
    }
    SearchRequestComponent.prototype.onSelect = function (request) {
        ;
        this.selectedRequest = request;
    };
    SearchRequestComponent = __decorate([
        core_1.Component({
            selector: 'search-request',
            template: "\n    <div class=\"main-content\">\n      <div>\n        <div class=\"header\">\n          <div>ROOT</div>\n        </div>\n        <div class=\"sub-header\">\n          My requests\n        </div>\n        <div class=\"requests-table\">\n          <div *ngFor=\"let request of requests\"\n            (click)=\"onSelect(request)\" [ngClass]=\"{'active': selectedRequest.name === request.name}\">\n              <div>{{request.title}}</div>\n              <div>{{request.name}}</div>\n              <div [style.color]=\"request.getStatusColor()\">{{request.status}}</div>\n               <div>{{request.date}}</div>\n                 <div>></div>\n          </div>\n          </div>\n      </div>\n      <div>\n        <div></div>\n         <request-detail [request]=\"selectedRequest\"></request-detail>\n      </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], SearchRequestComponent);
    return SearchRequestComponent;
}());
exports.SearchRequestComponent = SearchRequestComponent;
//# sourceMappingURL=app.component.js.map