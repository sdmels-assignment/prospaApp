import { TestBed, inject } from '@angular/core/testing';

import { RepaymentCalculationService } from './repayment-calculation.service';

describe('RepaymentCalculationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepaymentCalculationService]
    });
  });

  it('should be created', inject([RepaymentCalculationService], (service: RepaymentCalculationService) => {
    expect(service).toBeTruthy();
  }));
});
