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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var card_1 = require('@angular2-material/card');
var button_1 = require('@angular2-material/button');
var icon_1 = require('@angular2-material/icon');
var icon_2 = require('@angular2-material/icon');
var app_component_1 = require('./new-request/app.component');
var app_component_2 = require('./search-request/app.component');
var ng2_file_upload_1 = require('ng2-file-upload');
var request_detail_component_1 = require('./new-request/request-detail.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                card_1.MdCardModule, button_1.MdButtonModule, icon_1.MdIconModule
            ],
            declarations: [
                app_component_1.AppComponent,
                app_component_2.SearchRequestComponent,
                request_detail_component_1.RequestDetailComponent,
                ng2_file_upload_1.FileSelectDirective
            ],
            bootstrap: [app_component_2.SearchRequestComponent, app_component_1.AppComponent],
            providers: [icon_2.MdIconRegistry]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map