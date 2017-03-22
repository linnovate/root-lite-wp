import { Component, OnInit } from '@angular/core';
import { Request } from '../_classes/request';
import { RequestsService } from '../_services/requests.service'

// const REQUESTS: Request[] = [
//   new Request('entrance pass','סיכום שנתי','Summary Annual Activity northern arena',  'received','15.2.2014'),
//   new Request('IT support','דוח זיצ"פ','', 'completed','15.2.2014'),
//   new Request('document distribution','תיקון מדפסת', '', 'active', '15.2.2014')
// ];

@Component({
  selector: 'search-request',
  template:  `<div class="main-content">
  <div>
    <div class="header">
      <div>ROOT</div>
    </div>
    <div class="sub-header">
      My requests
    </div>
    <div class="requests-table">
    
      <div *ngFor="let request of requests" (click)="onSelect(request)" [ngClass]="{'active': selectedRequest._id === request._id}">
        <div>{{request.title}}</div>
    <div>{{request.name}}</div>
    <div [style.color]="request.getStatusColor()">{{request.status}}</div>
        <div>{{request.due | date:shortDate}}</div>
        <div>></div>
      </div>
    </div>
  </div>
  <div>
    <div></div>
  
    <request-details *ngIf="selectedRequest"
   [request]="selectedRequest"
   ></request-details>
  </div>
</div>
`
})
export class SearchRequestComponent implements OnInit {

  errorMessage: string;
  requests: Request[];
  mode = 'Observable';
  // selectedRequest = {
  //     name: 'string',
  //       title: 'string',
  //       description: 'string',
  //       status: 'string',
  //       date: 'string'
  // };
  selectedRequest: Request;
  master: string = 'Master';

  constructor(private requestsService: RequestsService) { }

  ngOnInit() {
    this.getRequests();
  }

  getRequests() {
    this.requestsService.get()
                     .subscribe(
                       requests =>  {
                         let _requests = [];
                         requests.forEach(function(request) {
                          request.due = request.due == '' ? null : request.due; 
                           _requests.push(new Request(request.name, request.title, request.description, request.status, request.due, request._id));
                         });
                         this.requests = _requests;
                         this.selectedRequest = this.requests[0];
                       },
                       error =>  this.errorMessage = <any>error);
  }

   onSelect(request: Request): void {
      this.selectedRequest = request;
    }

}
