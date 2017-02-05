import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { NewRequestComponent }  from './app.component';
import { RequestDetailComponent } from './request-detail.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    NewRequestComponent,
    RequestDetailComponent,
  ],
  bootstrap: [ NewRequestComponent ],
})
export class AppModule { }

