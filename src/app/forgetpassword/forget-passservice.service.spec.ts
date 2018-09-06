import { TestBed, inject } from '@angular/core/testing';

import { ForgetPassserviceService } from './forget-passservice.service';

describe('ForgetPassserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForgetPassserviceService]
    });
  });

  it('should be created', inject([ForgetPassserviceService], (service: ForgetPassserviceService) => {
    expect(service).toBeTruthy();
  }));
});
