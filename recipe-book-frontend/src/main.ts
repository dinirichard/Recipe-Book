import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { bulmaCalendar } from '../node_modules/bulma-extensions/bulma-calendar/dist/js/bulma-calendar.min.js';
import { bulmaQuickview } from '../node_modules/bulma-extensions/bulma-quickview/dist/js/bulma-quickview.min.js';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


var quickviews = bulmaQuickview.attach();
