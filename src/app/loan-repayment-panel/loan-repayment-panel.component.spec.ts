import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanRepaymentPanelComponent } from './loan-repayment-panel.component';

describe('LoanRepaymentPanelComponent', () => {
  let component: LoanRepaymentPanelComponent;
  let fixture: ComponentFixture<LoanRepaymentPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanRepaymentPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanRepaymentPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
