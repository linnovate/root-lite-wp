import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { NewRequestComponent }  from './app.component';
import { RequestDetailComponent } from './request-detail.component';
import { RequestsService } from '../_services/requests.service'
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    HttpModule
  ],
  declarations: [
    NewRequestComponent,
    RequestDetailComponent,
  ],
  providers: [
    RequestsService
  ],
  bootstrap: [ NewRequestComponent ],
})
export class AppModule { }

