import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardtableComponent } from './dash-boardtable.component';

describe('DashBoardtableComponent', () => {
  let component: DashBoardtableComponent;
  let fixture: ComponentFixture<DashBoardtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashBoardtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
