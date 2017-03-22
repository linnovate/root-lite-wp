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
var URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
var RequestDetailsComponent = (function () {
    function RequestDetailsComponent() {
    }
    RequestDetailsComponent.prototype.onSubmit = function () {
        console.log("re", this.request);
    };
    RequestDetailsComponent.prototype.handleInputChange = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        this.documentName = file.name;
    };
    RequestDetailsComponent.prototype.ngOnInit = function () {
        console.log(this.request, 'sdsadfsdf');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', request_1.Request)
    ], RequestDetailsComponent.prototype, "request", void 0);
    RequestDetailsComponent = __decorate([
        core_1.Component({
            selector: 'request-details',
            template: "<div  #requestForm (submit)=\"onSubmit()\">\n        <div class=\"request-header\">\n            <div>\n                <div class=\"request-title\">{{request.title}}</div>\n                <div class=\"subtitle\">\n                    <div>{{request.title}}</div>\n                    <div>{{request.due | date:shortDate}}</div>\n                </div>\n            </div>\n            <div class=\"request-status\" *ngIf=\"request.status\" [style.background-color]=\"request.getStatusColor()\">{{request.status}}</div>\n        </div>\n        <div class=\"request-desc\">\n            <div>description</div>\n            <textarea type=\"text\">{{request.description}}</textarea>\n        </div>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], RequestDetailsComponent);
    return RequestDetailsComponent;
}());
exports.RequestDetailsComponent = RequestDetailsComponent;
//# sourceMappingURL=request-details.component.js.map