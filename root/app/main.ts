import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './new-request/app.model';
import { SearchRequestModule } from './search-request/app.model';
const platform = platformBrowserDynamic();
if (document.getElementsByTagName('search-request').length > 0 ) {
    platform.bootstrapModule(SearchRequestModule);
}
if (document.getElementsByTagName('new-request').length > 0 ) {
    platform.bootstrapModule(AppModule);
}

