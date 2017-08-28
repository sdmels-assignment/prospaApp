import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { LoanSliderComponent } from './loan-slider/loan-slider.component';
import { LoanDurationComponent } from './loan-duration/loan-duration.component';
import { LoanRepaymentPanelComponent } from './loan-repayment-panel/loan-repayment-panel.component';

import { DurationAndInterestRateServiceService } from './duration-and-interest-rate-service.service';
import { RepaymentCalculationService } from './repayment-calculation.service';
import { ApplicationService } from './application.service';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    LoanFormComponent,
    LoanSliderComponent,
    LoanDurationComponent,
    LoanRepaymentPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ DurationAndInterestRateServiceService, RepaymentCalculationService, ApplicationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
