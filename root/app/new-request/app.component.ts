import { Component } from '@angular/core';
import { Request } from './request';


const REQUESTS: Request[] = [
    {name: 'entrance pass', title:'', description: '',date: '', subject: '', icon: 'verification', },
    {name: 'IT support', title:'', description: '',date: '', subject: '',  icon: 'support'},
    {name: 'document distribution', title:'', description: '',date: '', subject: '', icon: 'document'},
    {name: 'maintenance', title:'', description: '',date: '', subject: '',  icon: 'maintenance'},
    {name: 'holiday approvals', title:'', description: '',date: '', subject: '', icon: 'vacation'},
    {name: 'clinic', title:'', description: '',date: '', subject: '',  icon: 'medical'},
    {name: 'Shift scheduling', title:'', description: '',date: '', subject: '',  icon: 'schedule'},
    {name: 'rotations', title:'', description: '',date: '', subject: '',  icon: 'food'}    
];

@Component({
  selector: 'new-request',
  template: `
    <div class="main-content">
      <div>
        <div class="header">
          <div>ROOT</div>
        </div>
        <div class="sub-header">
          Opening a new request
        </div>
        <div class="requests-icon-buttons">
          <div *ngFor="let request of requests"
            (click)="onSelect(request)">
            <div [ngClass]="{'active': selectedRequest.name === request.name}">
              <md-icon svgSrc="/wp-content/plugins/root/images/icons_{{request.icon}}.svg"></md-icon>
            </div>
            <div>{{request.name}}</div>
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
export class NewRequestComponent {
    requests = REQUESTS;
    selectedRequest =  this.requests[0];
    isRequestActive = false;

    onSelect(request: Request): void {
      this.selectedRequest = new Request(request.name, '', '','' ,'', request.icon);
    }
 }