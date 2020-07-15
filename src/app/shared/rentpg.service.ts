import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {PgDetails} from '../shared/pgservices/pgdetails';
import { Router } from "@angular/router";
import {Url} from '../apis';
@Injectable({
  providedIn: 'root'
})
export class RentpgService {
pgd : PgDetails;
  constructor(private http : HttpClient) { }

  buypg(pgd : PgDetails,userEmail : String):Observable<any>
  {
    return this.http.post(Url.buypg + `${userEmail}`,pgd);
  }
}
