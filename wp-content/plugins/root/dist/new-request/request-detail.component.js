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
var URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
var RequestDetailComponent = (function () {
    function RequestDetailComponent() {
    }
    RequestDetailComponent.prototype.onSubmit = function () {
        console.log("re", this.request);
    };
    RequestDetailComponent.prototype.handleInputChange = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        this.request.file = file.name;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', request_1.Request)
    ], RequestDetailComponent.prototype, "request", void 0);
    RequestDetailComponent = __decorate([
        core_1.Component({
            selector: 'request-detail',
            template: "\n    <div *ngIf=\"request\" #requestForm (submit)=\"onSubmit()\">\n        <div class=\"request-name\">{{request.name}}</div>\n        <form>\n         <div>\n            <label for=\"subject\">Request subject</label>\n            <div class=\"subject\">\n              <input type=\"text\" [(ngModel)]=\"request.subject\" id=\"subject\" name=\"subject\" required>\n              <div>A brief description of the request</div>\n            </div>\n          </div>\n          <div>\n            <label for=\"description\">Description</label>\n            <div class=\"description\">\n             <textarea type=\"text\" [(ngModel)]=\"request.description\" id=\"description\" name=\"description\"></textarea>\n             <div>Describe in detail the request</div>\n            </div>\n          </div>\n          <div>\n            <label for=\"date\">Should be completed before</label>\n            <div>\n             <input type=\"date\" [(ngModel)]=\"request.date\" id=\"date\" name=\"date\">\n             <div>Describe in detail the request</div>\n            </div>\n          </div>\n           <div class=\"document\">\n            <label for=\"document\">Upload document</label>\n            <div>\n             <label>                          \n                <md-icon svgSrc=\"/wp-content/plugins/root/images/attach_file.svg\"></md-icon> \n                <span>{{request.file}}</span>             \n                <input type=\"file\" name=\"file\"\n                    (change)=\"handleInputChange($event)\">\n            </label>\n            </div>\n          </div>\n          <button type=\"submit\">Send</button>\n        </form>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], RequestDetailComponent);
    return RequestDetailComponent;
}());
exports.RequestDetailComponent = RequestDetailComponent;
// <input type="file" ng2FileSelect [uploader]="uploader"/>
//               <button type="button" class="btn btn-success btn-s"
//                         (click)="uploader.uploadAll()">
//                     <span class="glyphicon glyphicon-upload"></span> Upload all
//                 </button> 
//# sourceMappingURL=request-detail.component.js.map