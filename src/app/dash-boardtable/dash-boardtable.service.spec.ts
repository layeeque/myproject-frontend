import { TestBed, inject } from '@angular/core/testing';

import { DashBoardtableService } from './dash-boardtable.service';

describe('DashBoardtableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashBoardtableService]
    });
  });

  it('should be created', inject([DashBoardtableService], (service: DashBoardtableService) => {
    expect(service).toBeTruthy();
  }));
});
