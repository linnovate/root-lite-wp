"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./new-request/app.module');
var app_module_2 = require('./search-request/app.module');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
if (document.URL.indexOf('search') !== -1) {
    platform.bootstrapModule(app_module_2.SearchRequestModule);
}
else {
    platform.bootstrapModule(app_module_1.AppModule);
}
//# sourceMappingURL=main.js.map