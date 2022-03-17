import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { Network } from '@ionic-native/network';
import { environmentConstants } from '../../constants/envConstants';
import { loginRequest, loginResponse } from '../../modal/login';
/*
  Generated class for the RestProvider provider.

*/

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class RestProvider {

  loginRequestBody: any;

  constructor(public http: HttpClient, private network: Network, public envConstants: environmentConstants) {
    console.log('Hello RestProvider Provider');
  }

  authUser(): Observable<string[]> {
    return this.http.get(this.envConstants.securityProtocol + this.envConstants.apiUrl + '/login').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public login(username: string, password: string) {

    let loginUrl = this.envConstants.securityProtocol + this.envConstants.apiUrl + '/login';

    this.loginRequestBody = {
      "username": username,
      "password": password,
      "grant_type": "password"
    }

    return this.http.post(loginUrl, this.loginRequestBody, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );

  }


  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;

    if (this.network.type == 'none') {
      errMsg = 'No Internet Connection'
    } else {
      if (error instanceof Response) {
        const err = error || '';
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
