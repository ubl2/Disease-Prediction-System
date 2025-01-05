import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  constructor(private _authHttp: HttpClient) { }

  // Patient

  public regPatient(data: any): Observable<any> {
    return this._authHttp.post<any>('http://127.0.0.1:8000/patient/', data).pipe(
      map(response => response),
      catchError(this.handleErrorPromise)
    );
  }

  public patLogin(data: any): Observable<any> {
    return this._authHttp.post<any>('http://127.0.0.1:8000/patientlogin/', data).pipe(
      map(response => response),
      catchError(this.handleErrorPromise)
    );
  }

  // doctor

  public regDoctor(data: any): Observable<any> {
    return this._authHttp.post<any>('http://127.0.0.1:8000/doctor/', data).pipe(
      map(response => response),
      catchError(this.handleErrorPromise)
    );
  }

  public docLogin(data: any): Observable<any> {
    return this._authHttp.post<any>('http://127.0.0.1:8000/doctorlogin/', data).pipe(
      map(response => response),
      catchError(this.handleErrorPromise)
    );
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  
  private handleErrorPromise(error: Response | any) {

    return Promise.reject(error.message || error);
  }

}
