import { Injectable } from '@angular/core';
import { RepaymentCalculationService } from './repayment-calculation.service';

@Injectable()
export class ApplicationService {
  
  private application: Object= {};
  constructor(private _repaymentCalculationService: RepaymentCalculationService) { }

  updateApplicationLoanDetails() {
    this.application['loanAmount'] = this._repaymentCalculationService.getLoanAmount();
    this.application['duration'] = this._repaymentCalculationService.getLoanAmount();
    this.application['rate'] = this._repaymentCalculationService.getLoanAmount();
    this.application['repayment'] = this._repaymentCalculationService.getDailyRepayment();

    this._repaymentCalculationService.getTotalRepaymentInDaysEmitter()
    .subscribe( (repaymentNumber) => {
      this.application['totalRepayment'] = repaymentNumber;
    });

  }

  updateApplicationPersoanlDetails(persoanlData) {
    this.application['fullName'] = persoanlData.fullName;
    this.application['email'] = persoanlData.email;
  }

  submit(formData) {
    if (formData.fullName === '' && formData.email === '') {
      return false;
    }

    this.updateApplicationLoanDetails();
    this.updateApplicationPersoanlDetails(formData);

    console.log(this.application);
  }

}
