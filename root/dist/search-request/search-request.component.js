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
var request_1 = require('../_classes/request');
var requests_service_1 = require('../_services/requests.service');
// const REQUESTS: Request[] = [
//   new Request('entrance pass','סיכום שנתי','Summary Annual Activity northern arena',  'received','15.2.2014'),
//   new Request('IT support','דוח זיצ"פ','', 'completed','15.2.2014'),
//   new Request('document distribution','תיקון מדפסת', '', 'active', '15.2.2014')
// ];
var SearchRequestComponent = (function () {
    function SearchRequestComponent(requestsService) {
        this.requestsService = requestsService;
        this.mode = 'Observable';
        this.master = 'Master';
    }
    SearchRequestComponent.prototype.ngOnInit = function () {
        this.getRequests();
    };
    SearchRequestComponent.prototype.getRequests = function () {
        var _this = this;
        this.requestsService.get()
            .subscribe(function (requests) {
            var _requests = [];
            requests.forEach(function (request) {
                request.due = request.due == '' ? null : request.due;
                _requests.push(new request_1.Request(request.name, request.title, request.description, request.status, request.due, request._id));
            });
            _this.requests = _requests;
            _this.selectedRequest = _this.requests[0];
        }, function (error) { return _this.errorMessage = error; });
    };
    SearchRequestComponent.prototype.onSelect = function (request) {
        this.selectedRequest = request;
    };
    SearchRequestComponent = __decorate([
        core_1.Component({
            selector: 'search-request',
            template: "<div class=\"main-content\">\n  <div>\n    <div class=\"header\">\n      <div>ROOT</div>\n    </div>\n    <div class=\"sub-header\">\n      My requests\n    </div>\n    <div class=\"requests-table\">\n    \n      <div *ngFor=\"let request of requests\" (click)=\"onSelect(request)\" [ngClass]=\"{'active': selectedRequest._id === request._id}\">\n        <div>{{request.title}}</div>\n    <div>{{request.name}}</div>\n    <div [style.color]=\"request.getStatusColor()\">{{request.status}}</div>\n        <div>{{request.due | date:shortDate}}</div>\n        <div>></div>\n      </div>\n    </div>\n  </div>\n  <div>\n    <div></div>\n  \n    <request-details *ngIf=\"selectedRequest\"\n   [request]=\"selectedRequest\"\n   ></request-details>\n  </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [requests_service_1.RequestsService])
    ], SearchRequestComponent);
    return SearchRequestComponent;
}());
exports.SearchRequestComponent = SearchRequestComponent;
//# sourceMappingURL=search-request.component.js.map