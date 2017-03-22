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
var ng2_file_upload_1 = require('ng2-file-upload');
var request_1 = require('./request');
var URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
var RequestDetailComponent = (function () {
    function RequestDetailComponent() {
        this.uploader = new ng2_file_upload_1.FileUploader({ url: URL });
    }
    RequestDetailComponent.prototype.onSubmit = function () {
        console.log("re", this.request);
    };
    RequestDetailComponent.prototype.handleInputChange = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        this.documentName = file.name;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', request_1.Request)
    ], RequestDetailComponent.prototype, "request", void 0);
    RequestDetailComponent = __decorate([
        core_1.Component({
            selector: 'request-detail',
            template: "\n    <div *ngIf=\"request\" #requestForm (submit)=\"onSubmit()\">\n        <div class=\"request-header\">\n            <div>\n                <div class=\"request-title\">{{request.title}}</div>\n                <div class=\"subtitle\">\n                    <div>{{request.name}}</div>\n                    <div>{{request.date}}</div>\n                </div>\n            </div>\n            <div class=\"request-status\" *ngIf=\"request.status\" [style.background-color]=\"request.getStatusColor()\">{{request.status}}</div>\n        </div>\n        <div class=\"request-desc\">\n            <div>description</div>\n            <textarea type=\"text\">{{request.description}}</textarea>\n        </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], RequestDetailComponent);
    return RequestDetailComponent;
}());
exports.RequestDetailComponent = RequestDetailComponent;
//# sourceMappingURL=request-detail.component.js.map