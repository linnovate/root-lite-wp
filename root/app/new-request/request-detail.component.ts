import { Component, Input } from '@angular/core';
import { Request } from './request';
import { RequestsService } from '../_services/requests.service'
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
  selector: 'request-detail',
  template: `
    <div *ngIf="request" #requestForm (submit)="onSubmit()">
        <div class="request-name">{{request.name}}</div>
        <form>
         <div>
            <label for="subject">Request subject</label>
            <div class="subject">
              <input type="text" [(ngModel)]="request.subject" id="subject" name="subject" required>
              <div>A brief description of the request</div>
            </div>
          </div>
          <div>
            <label for="description">Description</label>
            <div class="description">
             <textarea type="text" [(ngModel)]="request.description" id="description" name="description"></textarea>
             <div>Describe in detail the request</div>
            </div>
          </div>
          <div>
            <label for="date">Should be completed before</label>
            <div>
             <input type="date" [(ngModel)]="request.date" id="date" name="date">
             <div>Describe in detail the request</div>
            </div>
          </div>
           <div class="document">
            <label for="document">Upload document</label>
            <div>
             <label>                          
                <md-icon svgSrc="/wp-content/plugins/root/images/attach_file.svg"></md-icon> 
                <span>{{request.file}}</span>             
                <input type="file" name="file"
                    (change)="handleInputChange($event)">
            </label>
            </div>
          </div>
          <button type="submit">Send</button>
        </form>
    </div>
  `
})
export class RequestDetailComponent {
  @Input()
  request: Request;
  documentName: string;

  constructor(private requestsService: RequestsService) { }

  onSubmit(): void {
      const data = {
        'watchers': []
      }

      this.request.subject && (data.title = this.request.subject);
      this.request.description && (data.title = this.request.description);
      this.request.due && (data.title = this.request.date);
      
      this.requestsService.post(data)
                     .subscribe(
                       task =>  {                         
                         console.log('A new task has been created . Its id: ' +  task.id);    
                       });
     this.request = new Request('entrance pass','','','','','');

  }
   handleInputChange(e) {
        let file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        // this.request.file = file.name;
    }


}

// <input type="file" ng2FileSelect [uploader]="uploader"/>
//               <button type="button" class="btn btn-success btn-s"
//                         (click)="uploader.uploadAll()">
//                     <span class="glyphicon glyphicon-upload"></span> Upload all
//                 </button>