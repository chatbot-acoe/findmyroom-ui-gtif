import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserData } from "src/app/user-dashboard-module/User";
import { Observable, throwError } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { Url } from "src/app/apis";
import { PartnerData } from "src/app/admin-dashboard-module/Partner";

const GET_HEADERS = {
  
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    responseType: 'text' as 'json'
  };
  

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardServiceService {



  constructor(private httprequest: HttpClient) { }
  getPartnerDetails():Observable<PartnerData[]> {
    
        console.log("HelloService");
        return this.httprequest.get<PartnerData[]>(Url.getPartnerDetails);
      }

      deletepartnerdetailservice(data:any)
      {
        console.log(data);
        return (this.httprequest.delete(Url.deletepartner+data,{ responseType: 'text' }).pipe(catchError(this.handleError)));
      }

     verifypartnerdetails(data:any)
     {
      console.log(data);
      return (this.httprequest.put(Url.verifypartner+data,"verified",{ responseType: 'text' }).pipe(catchError(this.handleError)));
     }



      private handleError(errorResponse: HttpErrorResponse) {
        return throwError('there is a problem with service');
      }

}
