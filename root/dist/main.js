"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_model_1 = require('./new-request/app.model');
var app_model_2 = require('./search-request/app.model');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
if (document.getElementsByTagName('search-request').length > 0) {
    platform.bootstrapModule(app_model_2.SearchRequestModule);
}
if (document.getElementsByTagName('new-request').length > 0) {
    platform.bootstrapModule(app_model_1.AppModule);
}
//# sourceMappingURL=main.js.map