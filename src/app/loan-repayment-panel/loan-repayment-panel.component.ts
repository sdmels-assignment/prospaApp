import { Component, OnInit } from '@angular/core';
import { RepaymentCalculationService } from '../repayment-calculation.service';

@Component({
  selector: 'prospa-loan-repayment-panel',
  templateUrl: './loan-repayment-panel.component.html',
  styleUrls: ['./loan-repayment-panel.component.scss']
})
export class LoanRepaymentPanelComponent implements OnInit {

  public repaymentNumbers: number;
  public loanAmount;
  public duration;
  constructor(private _repaymentCalculationService: RepaymentCalculationService) { }

  ngOnInit() {
    this.updateTotalRepayment();
    this.updateLoanAmountAndDuration();
  }

  updateTotalRepayment() {
    this._repaymentCalculationService.getTotalRepaymentInDaysEmitter()
      .subscribe( (repaymentNumber) => {
        this.repaymentNumbers = repaymentNumber;
        this.updateLoanAmountAndDuration();
      });
  }

  getRepaymentAmount() {
    return this._repaymentCalculationService.getDailyRepayment();
  }

  updateLoanAmountAndDuration() {
    this.loanAmount = this._repaymentCalculationService.getLoanAmount();
    this.duration = this._repaymentCalculationService.getDuration();
  }
}
