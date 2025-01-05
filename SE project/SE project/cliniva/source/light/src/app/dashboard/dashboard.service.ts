import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });
  constructor(private _authHttp: HttpClient) { }

  // Disease API
  
  public getDiease(data: any): Observable<any> {
    return this._authHttp.get<any>('http://127.0.0.1:8000/disease/', data).pipe(
      map(response => response),
      catchError(this.handleErrorPromise)
    );
  }

  public addDiease(data: any): Observable<any> {
    return this._authHttp.post<any>('http://127.0.0.1:8000/disease/', data).pipe(
      map(response => response),
      catchError(this.handleErrorPromise)
    );
  }

  public deleteDiease(data: any): Observable<any> {
    return this._authHttp.delete<any>('http://127.0.0.1:8000/disease/'+data,{}).pipe(
      map(response => response),
      catchError(this.handleErrorPromise)
    );
  }

  public updateDiease(data: any): Observable<any> {
    return this._authHttp.put<any>('http://127.0.0.1:8000/disease/1',data).pipe(
      map(response => response),
      catchError(this.handleErrorPromise)
    );
  }

  // Symptom API

  public getSymptom(data: any): Observable<any> {
    return this._authHttp.get<any>('http://127.0.0.1:8000/symptom/', data).pipe(
      map(response => response),
      catchError(this.handleErrorPromise)
    );
  }

  public addSymptom(data: any): Observable<any> {
    return this._authHttp.post<any>('http://127.0.0.1:8000/symptom/', data).pipe(
      map(response => response),
      catchError(this.handleErrorPromise)
    );
  }

  public deleteSymptom(data: string): Observable<any> {
    return this._authHttp.delete<any>('http://127.0.0.1:8000/symptom/'+data,{}).pipe(
      map(response => response),
      catchError(this.handleErrorPromise)
    );
  }

  public updateSymptom(data: any): Observable<any> {
    return this._authHttp.put<any>('http://127.0.0.1:8000/symptom/1',data).pipe(
      map(response => response),
      catchError(this.handleErrorPromise)
    );
  }

// question API

public getQuestion(data: any): Observable<any> {
  return this._authHttp.get<any>('http://127.0.0.1:8000/question/', data).pipe(
    map(response => response),
    catchError(this.handleErrorPromise)
  );
}

public addQuestion(data: any): Observable<any> {
  return this._authHttp.post<any>('http://127.0.0.1:8000/question/', data).pipe(
    map(response => response),
    catchError(this.handleErrorPromise)
  );
}

public deleteQuestion(data: string): Observable<any> {
  return this._authHttp.delete<any>('http://127.0.0.1:8000/question/'+data,{}).pipe(
    map(response => response),
    catchError(this.handleErrorPromise)
  );
}

public updateQuestion(data: any): Observable<any> {
  return this._authHttp.put<any>('http://127.0.0.1:8000/question/1',data).pipe(
    map(response => response),
    catchError(this.handleErrorPromise)
  );
}

// Diease Prediction

public predictDisease(data: any): Observable<any> {
  return this._authHttp.post<any>('http://127.0.0.1:8000/predictdisease/', data).pipe(
    map(response => response),
    catchError(this.handleErrorPromise)
  );
}

public predictInsurance(data: any): Observable<any> {
  return this._authHttp.post<any>('http://127.0.0.1:8000/predictinsurance/', data).pipe(
    map(response => response),
    catchError(this.handleErrorPromise)
  );
}

// precautions

public precautions(data: any): Observable<any> {
  return this._authHttp.post<any>('http://127.0.0.1:8000/precautions/', data).pipe(
    map(response => response),
    catchError(this.handleErrorPromise)
  );
}

// doctor 

public getDoctor(data: any): Observable<any> {
  return this._authHttp.get<any>('http://127.0.0.1:8000/doctor/', data).pipe(
    map(response => response),
    catchError(this.handleErrorPromise)
  );
}

public addDoctor(data: any): Observable<any> {
  return this._authHttp.post<any>('http://127.0.0.1:8000/doctor/', data).pipe(
    map(response => response),
    catchError(this.handleErrorPromise)
  );
}

public deleteDoctor(data: string): Observable<any> {
  return this._authHttp.delete<any>('http://127.0.0.1:8000/doctor/'+data,{}).pipe(
    map(response => response),
    catchError(this.handleErrorPromise)
  );
}

public updateDoctor(data: any): Observable<any> {
  return this._authHttp.put<any>('http://127.0.0.1:8000/doctor/1',data).pipe(
    map(response => response),
    catchError(this.handleErrorPromise)
  );
}

// patient

public getPatient(data: any): Observable<any> {
  return this._authHttp.get<any>('http://127.0.0.1:8000/patient/', data).pipe(
    map(response => response),
    catchError(this.handleErrorPromise)
  );
}

public addPatient(data: any): Observable<any> {
  return this._authHttp.post<any>('http://127.0.0.1:8000/patient/', data).pipe(
    map(response => response),
    catchError(this.handleErrorPromise)
  );
}

public deletePatient(data: string): Observable<any> {
  return this._authHttp.delete<any>('http://127.0.0.1:8000/patient/'+data,{}).pipe(
    map(response => response),
    catchError(this.handleErrorPromise)
  );
}

public updatePatient(data: any): Observable<any> {
  return this._authHttp.put<any>('http://127.0.0.1:8000/patient/1',data).pipe(
    map(response => response),
    catchError(this.handleErrorPromise)
  );
}

// Feedback
public addFeedback(data: any): Observable<any> {
  return this._authHttp.post<any>('http://127.0.0.1:8000/feedback/', data).pipe(
    map(response => response),
    catchError(this.handleErrorPromise)
  );
}

// appointment

public getAppionment(data: any): Observable<any> {
  return this._authHttp.get<any>('http://127.0.0.1:8000/appionment/', data).pipe(
    map(response => response),
    catchError(this.handleErrorPromise)
  );
}

public addAppionment(data: any): Observable<any> {
  return this._authHttp.post<any>('http://127.0.0.1:8000/appionment/', data).pipe(
    map(response => response),
    catchError(this.handleErrorPromise)
  );
}

public deleteAppionment(data: string): Observable<any> {
  return this._authHttp.delete<any>('http://127.0.0.1:8000/appionment/'+data,{}).pipe(
    map(response => response),
    catchError(this.handleErrorPromise)
  );
}

public updateAppionment(data: any): Observable<any> {
  return this._authHttp.put<any>('http://127.0.0.1:8000/appionment/1',data).pipe(
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
