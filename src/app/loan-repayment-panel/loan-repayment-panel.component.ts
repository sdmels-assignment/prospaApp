import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RepaymentCalculationService } from '../repayment-calculation.service';

@Component({
  selector: 'prospa-loan-repayment-panel',
  templateUrl: './loan-repayment-panel.component.html',
  styleUrls: ['./loan-repayment-panel.component.scss']
})
export class LoanRepaymentPanelComponent implements OnInit {

  private repaymentNumbers: number;

  constructor(private _repaymentCalculationService: RepaymentCalculationService) { }

  ngOnInit() {
    this.updateTotalRepayment();
  }

  updateTotalRepayment() {
    this._repaymentCalculationService.getTotalRepaymentInDaysEmitter()
      .subscribe( (repaymentNumber) => {
        this.repaymentNumbers = repaymentNumber;
      });
  }

  getRepmentAmount() {
    return this._repaymentCalculationService.getDailyRepayment();
  }
}
