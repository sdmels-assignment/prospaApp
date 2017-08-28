import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDurationComponent } from './loan-duration.component';

describe('LoanDurationComponent', () => {
  let component: LoanDurationComponent;
  let fixture: ComponentFixture<LoanDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanDurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
