import { ApplicationService } from '../application.service';
import { Component, OnInit} from '@angular/core';
import { DurationAndInterestRateServiceService } from '../duration-and-interest-rate-service.service';
import { RepaymentCalculationService } from '../repayment-calculation.service';

@Component({
  selector: 'prospa-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss']
})
export class LoanFormComponent implements OnInit {

  public durationAndInterests = [];
  public errorMsg: String;
  public requiredLoanAmount;
  public selectedDurationAndRate: any;

  constructor(private _durationAndInterestRateService: DurationAndInterestRateServiceService,
    private _repaymentCalculationService: RepaymentCalculationService,
  private _applicationService: ApplicationService) { }

  ngOnInit() {
    this.getDurationAndInterestRate();
  }

  getDurationAndInterestRate() {
    this._durationAndInterestRateService.getDurationAndInterestRates()
    .subscribe(successResponseData => this.durationAndInterests = successResponseData, 
      errorResponseData => this.errorMsg = errorResponseData);
  }

  getDurationRange() {
    return this.durationAndInterests.map( (durationAndInterest) => durationAndInterest.duration);
  }

  updateRate(duration) {
    const rateForSelectedDuration = this.durationAndInterests
      .filter((durationAndRate) => {
        return durationAndRate.duration === duration;
      });

    if (rateForSelectedDuration.length === 0) {
      this._repaymentCalculationService.setRate(0);
    } else {
      this._repaymentCalculationService.setRate(rateForSelectedDuration[0].rate);
    }
  }

  onSubmit(formPersonalData){
    console.log(this);
    this._applicationService.submit(formPersonalData);
  }
}
