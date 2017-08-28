import { ErrorHandler } from 'protractor/built/exitCodes';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class DurationAndInterestRateServiceService {
  private _url = 'http://www.mocky.io/v2/5955dc852900001e01cd70b7';

  constructor(private _http: Http) { }

  getDurationAndInterestRates() {
    return this._http.get(this._url)
      .map( (response: Response) => response.json())
      .catch(this.errorHandler);
  }

  errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server Error');
  }
}
