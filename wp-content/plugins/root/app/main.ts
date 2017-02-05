import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './new-request/app.module';
import { SearchRequestModule } from './search-request/app.module';
const platform = platformBrowserDynamic();
if (document.URL.indexOf('search') !== -1 ) {
    platform.bootstrapModule(SearchRequestModule);
}
else {
    platform.bootstrapModule(AppModule);
}

