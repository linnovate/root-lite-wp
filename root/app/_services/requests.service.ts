import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Request } from '../_classes/request';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RequestsService {

  private requestsUrl = 'http://root.hrm.demo.linnovate.net/api/tasks';  // URL to web API

  constructor(private http: Http) { }

  post (data): Observable<any> {

    const token = 'eyJhbGciOiJIUzI1NiJ9.JTdCJTIyX192JTIyOjAsJTIyaWQlMjI6JTIyc2FyYXJAbGlubm92YXRlLm5ldCUyMiwlMjJuYW1lJTIyOiUyMndwLXJvb3QlMjIsJTIyZW1haWwlMjI6JTIyc2FyYXJAbGlubm92YXRlLm5ldCUyMiwlMjJ1c2VybmFtZSUyMjolMjJ3cC1yb290JTIyLCUyMl9pZCUyMjolMjI1OGQyYTY2MDU1YjdjMzEyMDA1YWRiNTglMjIsJTIycHJvdmlkZXIlMjI6JTIybG9jYWwlMjIsJTIycm9sZXMlMjI6JTVCJTIyYXV0aGVudGljYXRlZCUyMiU1RCU3RA.ZsR_tPe06wErG5PJP4hBYu5xkTK1H3CxM164CexfLU0';

    const headers = new Headers({'Authorization': 'Bearer ' + token});
    
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.requestsUrl, data, options)
    .map(this.extractData)
    .catch(this.handleError);
  }


  get (): Observable<Request[]> {

const token = 'eyJhbGciOiJIUzI1NiJ9.JTdCJTIyX192JTIyOjAsJTIyaWQlMjI6JTIyc2FyYXJAbGlubm92YXRlLm5ldCUyMiwlMjJuYW1lJTIyOiUyMndwLXJvb3QlMjIsJTIyZW1haWwlMjI6JTIyc2FyYXJAbGlubm92YXRlLm5ldCUyMiwlMjJ1c2VybmFtZSUyMjolMjJ3cC1yb290JTIyLCUyMl9pZCUyMjolMjI1OGQyYTY2MDU1YjdjMzEyMDA1YWRiNTglMjIsJTIycHJvdmlkZXIlMjI6JTIybG9jYWwlMjIsJTIycm9sZXMlMjI6JTVCJTIyYXV0aGVudGljYXRlZCUyMiU1RCU3RA.ZsR_tPe06wErG5PJP4hBYu5xkTK1H3CxM164CexfLU0';

const headers = new Headers();
    
    headers.append('Authorization', 'Bearer ' + token);
    return this.http.get(this.requestsUrl, { headers})
    .map(this.extractData)
    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || [];
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      console.log('sara' , err);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
