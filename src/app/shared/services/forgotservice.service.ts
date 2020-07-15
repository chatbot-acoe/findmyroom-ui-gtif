import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { Url } from "src/app/apis";

const GET_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  responseType: 'text' as 'json'
};

@Injectable({
  providedIn: 'root'
})
export class ForgotserviceService {

  constructor(private http : HttpClient) { }
  sendmail(emailid:string)
  {
    return this.http.post( Url.forgotPassword + '/' + `${emailid}`,emailid,GET_HEADERS)
    .pipe(catchError(this.handleError));
  }

  private handleError (errorResponse: HttpErrorResponse) {
    if(errorResponse.error instanceof ErrorEvent){
      //console.error("Client Side Error", errorResponse.error.message);
    } else {
      //console.error("Server Side Error",errorResponse);
    }
    return throwError('There is a problem with service');
  }

}
