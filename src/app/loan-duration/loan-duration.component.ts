import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RepaymentCalculationService } from '../repayment-calculation.service';

@Component({
  selector: 'prospa-loan-duration',
  templateUrl: './loan-duration.component.html',
  styleUrls: ['./loan-duration.component.scss']
})
export class LoanDurationComponent implements OnInit {

  @Input() durations;
  @Output() onDurationChanged = new EventEmitter();

  public selectedDuration: number;
  constructor(private _repaymentCalculationService: RepaymentCalculationService) { }

  ngOnInit() {
    this.selectedDuration = this.durations.length > 0 && this.durations[0] || 3;
    this.onSelectDuration(this.selectedDuration, null);
  }

  onSelectDuration(duration, event) {
    if (event) {
      event.preventDefault();
    }
    this.selectedDuration = duration;
    this._repaymentCalculationService.setDuration(duration);
    this.onDurationChanged.emit(duration);
  }
}
