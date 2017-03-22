/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RequestsService } from './requests.service';

describe('RequestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestsService]
    });
  });

  it('should ...', inject([RequestsService], (service: RequestsService) => {
    expect(service).toBeTruthy();
  }));
});
