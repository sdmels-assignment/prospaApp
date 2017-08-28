import { TestBed, inject } from '@angular/core/testing';

import { DurationAndInterestRateServiceService } from './duration-and-interest-rate-service.service';

describe('DurationAndInterestRateServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DurationAndInterestRateServiceService]
    });
  });

  it('should be created', inject([DurationAndInterestRateServiceService], (service: DurationAndInterestRateServiceService) => {
    expect(service).toBeTruthy();
  }));
});
