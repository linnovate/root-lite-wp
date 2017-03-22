"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var RequestsService = (function () {
    function RequestsService(http) {
        this.http = http;
        this.requestsUrl = 'http://root.hrm.demo.linnovate.net/api/tasks'; // URL to web API
    }
    RequestsService.prototype.post = function (data) {
        var token = 'eyJhbGciOiJIUzI1NiJ9.JTdCJTIyX192JTIyOjAsJTIyaWQlMjI6JTIyc2FyYXJAbGlubm92YXRlLm5ldCUyMiwlMjJuYW1lJTIyOiUyMndwLXJvb3QlMjIsJTIyZW1haWwlMjI6JTIyc2FyYXJAbGlubm92YXRlLm5ldCUyMiwlMjJ1c2VybmFtZSUyMjolMjJ3cC1yb290JTIyLCUyMl9pZCUyMjolMjI1OGQyYTY2MDU1YjdjMzEyMDA1YWRiNTglMjIsJTIycHJvdmlkZXIlMjI6JTIybG9jYWwlMjIsJTIycm9sZXMlMjI6JTVCJTIyYXV0aGVudGljYXRlZCUyMiU1RCU3RA.ZsR_tPe06wErG5PJP4hBYu5xkTK1H3CxM164CexfLU0';
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + token });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.requestsUrl, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RequestsService.prototype.get = function () {
        var token = 'eyJhbGciOiJIUzI1NiJ9.JTdCJTIyX192JTIyOjAsJTIyaWQlMjI6JTIyc2FyYXJAbGlubm92YXRlLm5ldCUyMiwlMjJuYW1lJTIyOiUyMndwLXJvb3QlMjIsJTIyZW1haWwlMjI6JTIyc2FyYXJAbGlubm92YXRlLm5ldCUyMiwlMjJ1c2VybmFtZSUyMjolMjJ3cC1yb290JTIyLCUyMl9pZCUyMjolMjI1OGQyYTY2MDU1YjdjMzEyMDA1YWRiNTglMjIsJTIycHJvdmlkZXIlMjI6JTIybG9jYWwlMjIsJTIycm9sZXMlMjI6JTVCJTIyYXV0aGVudGljYXRlZCUyMiU1RCU3RA.ZsR_tPe06wErG5PJP4hBYu5xkTK1H3CxM164CexfLU0';
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Bearer ' + token);
        return this.http.get(this.requestsUrl, { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    RequestsService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    RequestsService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            console.log('sara', err);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    RequestsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RequestsService);
    return RequestsService;
}());
exports.RequestsService = RequestsService;
//# sourceMappingURL=requests.service.js.map