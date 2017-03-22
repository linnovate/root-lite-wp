import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SearchRequestComponent } from './search-request.component';
import { RequestDetailsComponent } from '../request-details/request-details.component';

import { RequestsService } from '../_services/requests.service'

@NgModule({
  declarations: [
    SearchRequestComponent,
    RequestDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    RequestsService
  ],
  bootstrap: [SearchRequestComponent]
})
export class SearchRequestModule { }