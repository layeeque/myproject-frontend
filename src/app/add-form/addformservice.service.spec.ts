import { TestBed, inject } from '@angular/core/testing';

import { AddformserviceService } from './addformservice.service';

describe('AddformserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddformserviceService]
    });
  });

  it('should be created', inject([AddformserviceService], (service: AddformserviceService) => {
    expect(service).toBeTruthy();
  }));
});
