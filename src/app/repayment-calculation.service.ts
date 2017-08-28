import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export class RepaymentCalculationService {

  private totalDaysInMonth = 30;
  public loanAmount: number;
  public rate: number;
  public duration: number;
  public totalReplaymentInDays: EventEmitter<number> = new EventEmitter();

  getLoanAmount(): number {
    return this.loanAmount;
  }

  getRate(): number {
    return this.rate;
  }

  getDuration(): number {
    return this.duration;
  }

  setLoanAmount(loanAmount) {
    this.loanAmount = loanAmount;
  }

  setRate(rate) {
    this.rate = rate;
    this.calcuateTotalRepayment();
  }

  setDuration(duration) {
    this.duration = duration;
    this.calcuateTotalRepayment();
  }

  getDailyRepayment() {
    if (this.getRate() === undefined || this.getDuration() === undefined) {
      return 0;
    }
    const dailyRate = this.getDailyRate(this.getRate(), this.getDuration());
    return this.getLoanAmount() * dailyRate;
  }

  calcuateTotalRepayment() {
    let totalRepayment = 0;
    if (!!this.getRate()) {
      totalRepayment = this.getRepaymentFrequency(this.getDuration());
    }
    this.totalReplaymentInDays.emit(totalRepayment);
  }

  getTotalRepaymentInDaysEmitter() {
    return this.totalReplaymentInDays;
  }

  getRepaymentFrequency(duration) {
    duration = duration || this.getDuration();
    return duration * this.totalDaysInMonth;
  }

  getDailyRate(rate, duration) {
    const frequency = this.getRepaymentFrequency(duration);
    return rate / (frequency * 100);
  }
}
