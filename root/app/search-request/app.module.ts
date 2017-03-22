import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { SearchRequestComponent }  from './app.component';
import { RequestDetailComponent } from './request-detail.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    SearchRequestComponent,
    RequestDetailComponent,
  ],
  bootstrap: [ SearchRequestComponent ],
})
export class SearchRequestModule { }





