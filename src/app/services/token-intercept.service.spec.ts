import { TestBed, inject } from '@angular/core/testing';

import { TokenInterceptService } from './token-intercept.service';

describe('TokenInterceptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenInterceptService]
    });
  });

  it('should be created', inject([TokenInterceptService], (service: TokenInterceptService) => {
    expect(service).toBeTruthy();
  }));
});
