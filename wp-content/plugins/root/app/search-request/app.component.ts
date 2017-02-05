import { Component } from '@angular/core';
import { Request } from './request';  

const REQUESTS: Request[] = [
  new Request('entrance pass','סיכום שנתי','Summary Annual Activity northern arena',  'received','15.2.2014'),
  new Request('IT support','דוח זיצ"פ','', 'completed','15.2.2014'),
  new Request('document distribution','תיקון מדפסת', '', 'active', '15.2.2014')
];

@Component({
  selector: 'search-request',
  template: `
    <div class="main-content">
      <div>
        <div class="header">
          <div>ROOT</div>
        </div>
        <div class="sub-header">
          My requests
        </div>
        <div class="requests-table">
          <div *ngFor="let request of requests"
            (click)="onSelect(request)" [ngClass]="{'active': selectedRequest.name === request.name}">
              <div>{{request.title}}</div>
              <div>{{request.name}}</div>
              <div [style.color]="request.getStatusColor()">{{request.status}}</div>
               <div>{{request.date}}</div>
                 <div>></div>
          </div>
          </div>
      </div>
      <div>
        <div></div>
         <request-detail [request]="selectedRequest"></request-detail>
      </div>
    </div>
    `
})
export class SearchRequestComponent {
   requests = REQUESTS;
    selectedRequest =  this.requests[0];
    onSelect(request: Request): void {;
      this.selectedRequest = request;
    }
  //   getStatusColor(status: string) {
  //    switch (status) {
  //       case "completed":
  //       return '#8DC63F';
  //       case "received":
  //       return '#00AEEF';
  //       case "active":
  //       return '#F06EAA';
  //       default:
  //       return '#8DC63F';
  //   }
  // }

 }