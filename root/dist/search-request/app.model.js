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
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var search_request_component_1 = require('./search-request.component');
var request_details_component_1 = require('../request-details/request-details.component');
var requests_service_1 = require('../_services/requests.service');
var SearchRequestModule = (function () {
    function SearchRequestModule() {
    }
    SearchRequestModule = __decorate([
        core_1.NgModule({
            declarations: [
                search_request_component_1.SearchRequestComponent,
                request_details_component_1.RequestDetailsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
            ],
            providers: [
                requests_service_1.RequestsService
            ],
            bootstrap: [search_request_component_1.SearchRequestComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchRequestModule);
    return SearchRequestModule;
}());
exports.SearchRequestModule = SearchRequestModule;
//# sourceMappingURL=app.model.js.map