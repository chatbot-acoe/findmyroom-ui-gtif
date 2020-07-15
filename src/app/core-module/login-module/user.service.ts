import { Injectable } from '@angular/core';
import { UserInformation } from "src/app/core-module/login-module/UserEntity";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { UserDto } from "src/app/core-module/login-module/userDto";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
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

export class UserService {
  // baseUrl: string = "https://javafindmyroomapi.azurewebsites.net/dev/users/"



  
  constructor(private http: HttpClient) { }

  register(user: UserInformation){
   
    return this.http.post(Url.usersignup,user, {responseType: 'text'})
      .pipe(catchError(this.handleError));
  }

  signin(userdto: UserDto){
    return this.http.post(Url.userlogin,userdto, GET_HEADERS)
    .pipe(catchError(this.handleError));
  }


  private handleError (errorResponse: HttpErrorResponse) {
    if(errorResponse.error instanceof ErrorEvent){
      //console.error("Client Side Error", errorResponse.error.message);
    } else {
      console.error("Server Side Error",errorResponse);
    }
    return throwError('There is a problem with service');
  }

}
