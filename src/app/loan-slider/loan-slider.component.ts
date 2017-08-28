import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RepaymentCalculationService } from '../repayment-calculation.service';

@Component({
  selector: 'prospa-loan-slider',
  templateUrl: './loan-slider.component.html',
  styleUrls: ['./loan-slider.component.scss']
})
export class LoanSliderComponent implements OnInit {
  @Input() min: Number;
  @Input() max: Number;
  @Input() step: Number;
  @Input() defaultValue: Number;

  private loanAmountRequested: Number;

  constructor(private _repaymentCalculationService: RepaymentCalculationService) { }

  ngOnInit() {
    if (this.defaultValue === undefined) {
      this.defaultValue = this.min;
    }
    this.onChange(this.defaultValue);
  }

  onChange(loanAmount) {
    this._repaymentCalculationService.setLoanAmount(loanAmount);
  }
}
