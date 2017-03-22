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
    { name: 'entrance pass', title: '', description: '', date: '', subject: '', icon: 'verification', },
    { name: 'IT support', title: '', description: '', date: '', subject: '', icon: 'support' },
    { name: 'document distribution', title: '', description: '', date: '', subject: '', icon: 'document' },
    { name: 'maintenance', title: '', description: '', date: '', subject: '', icon: 'maintenance' },
    { name: 'holiday approvals', title: '', description: '', date: '', subject: '', icon: 'vacation' },
    { name: 'clinic', title: '', description: '', date: '', subject: '', icon: 'medical' },
    { name: 'Shift scheduling', title: '', description: '', date: '', subject: '', icon: 'schedule' },
    { name: 'rotations', title: '', description: '', date: '', subject: '', icon: 'food' }
];
var NewRequestComponent = (function () {
    function NewRequestComponent() {
        this.requests = REQUESTS;
        this.selectedRequest = this.requests[0];
        this.isRequestActive = false;
    }
    NewRequestComponent.prototype.onSelect = function (request) {
        this.selectedRequest = new request_1.Request(request.name, '', '', '', '', request.icon);
    };
    NewRequestComponent = __decorate([
        core_1.Component({
            selector: 'new-request',
            template: "\n    <div class=\"main-content\">\n      <div>\n        <div class=\"header\">\n          <div>ROOT</div>\n        </div>\n        <div class=\"sub-header\">\n          Opening a new request\n        </div>\n        <div class=\"requests-icon-buttons\">\n          <div *ngFor=\"let request of requests\"\n            (click)=\"onSelect(request)\">\n            <div [ngClass]=\"{'active': selectedRequest.name === request.name}\">\n              <md-icon svgSrc=\"/wp-content/plugins/root/images/icons_{{request.icon}}.svg\"></md-icon>\n            </div>\n            <div>{{request.name}}</div>\n          </div>\n          </div>\n      </div>\n      <div>\n        <div></div>\n        <request-detail [request]=\"selectedRequest\"></request-detail>\n      </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], NewRequestComponent);
    return NewRequestComponent;
}());
exports.NewRequestComponent = NewRequestComponent;
//# sourceMappingURL=app.component.js.map