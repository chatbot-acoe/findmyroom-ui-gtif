import { Injectable } from '@angular/core';
import { PgDetails } from "src/app/shared/pgservices/pgdetails";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Url } from "src/app/apis";

@Injectable({
  providedIn: 'root'
})
export class PgresultserviceService {

  constructor(private http: HttpClient, private router: Router) { }

  getpgdetails(city: string,location:string):Observable<PgDetails[]>
  {
    return this.http.get<PgDetails[]>(Url.pgDetails+city+'/'+location);
  }

  getpgbyid(id :any):Observable<PgDetails>
  {
  return this.http.get<PgDetails>(Url.pgDetails+id);
  }

  addPgs(pgdata: any){
    return this.http.post(Url.addPg+localStorage.getItem('userEmailId'),pgdata);
  }

  getPgs():Observable<PgDetails[]>
  {
    return this.http.get<PgDetails[]>(Url.getPartnerPgs+localStorage.getItem('userEmailId'));
  }

  deletePgs(id:any):Observable<any>
  {
    return this.http.delete(Url.deletePg+localStorage.getItem('userEmailId')+"/"+id,{responseType:'text'});
  }

  updatePgs(pgdata: any)
  {
      return this.http.put(Url.updatePgs+localStorage.getItem('userEmailId')+"/"+localStorage.getItem('pgId'),pgdata,{responseType:'text'});
  }
}
