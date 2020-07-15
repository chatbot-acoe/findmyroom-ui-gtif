import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserData } from "src/app/user-dashboard-module/User";
import { Observable, throwError } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { Url } from "src/app/apis";
import {flatbuydto} from './flatbuydto';
import {pgrentdto} from './pgrentdto';
const GET_HEADERS = {

  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  responseType: 'text' as 'json'
};


@Injectable({
  providedIn: 'root'
})
export class UserDashboardServiceService {

  emailId: string = localStorage.getItem('userEmailId');
 // changpasswordurl: String = `https://javafindmyroomapi.azurewebsites.net/dev/userDashboard/updatePassword/${this.emailId}`;
 // editprofileurl: String = `'https://javafindmyroomapi.azurewebsites.net/dev/userDashboard/updateUserDetails'/${this.emailId}`;


  constructor(private httprequest: HttpClient) { }
  //method to print details
  getUserDetails(): Observable<UserData> {
    this.emailId = localStorage.getItem('userEmailId');
    //console.log("HelloService");
    return this.httprequest.get<UserData>(Url.getuserDetails+this.emailId);
  }
  //method to change password
  changepasswordService(OLP: String, NWP1: String) {
    //console.log("hey");
    this.emailId = localStorage.getItem('userEmailId');
 //   const url = `${this.changpasswordurl}/${OLP}/${NWP1}`;
    //console.log("heyy");
    //console.log(Url.updatepassword+this.emailId+'/'+OLP+'/'+NWP1)
    return (this.httprequest.put(Url.updatepassword+this.emailId+'/'+OLP+'/'+NWP1, "password", { responseType: 'text' }).pipe(catchError(this.handleError)));
  }
  //method to edit profile
  editprofileService(Phn: number, city: String, street: String, postalcode: String) {
    //console.log(Phn);
    //console.log("hey");
    this.emailId = localStorage.getItem('userEmailId');
    //const url1 = `${this.editprofileurl}/${Phn}/${city}/${street}/${postalcode}`;
    return this.httprequest.put(Url.editProfile+this.emailId+'/'+Phn+'/'+city+'/'+street+'/'+postalcode, "details", { responseType: 'text' });
  }
sendmail(userName: String ,userEmail:String ,userReferral:String ,	userEmailId:String) : Observable<any>
{
  console.log("i");
  return this.httprequest.post(Url.refermail + `${userName}`+ '/' +  `${userEmail}` + '/' + `${userReferral}`+ '/' + `${userEmailId}` ,null,GET_HEADERS)
  .pipe(catchError(this.handleError));

}
getflatbuydetails(useId : any) : Observable<any>
{
return this.httprequest.get<any>(Url.getflatbuydetails +useId );
}

getpgbuydetails(useId :any) : Observable<any>
{
return this.httprequest.get<any>(Url.getpgrentdetails +useId );
}
  

  getUserDetails1(): Observable<UserData> {
    this.emailId = localStorage.getItem('userEmailId');
        //console.log("HelloService");
        return this.httprequest.get<UserData>(Url.getuserDetails+localStorage.getItem('userEmailId'));
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
