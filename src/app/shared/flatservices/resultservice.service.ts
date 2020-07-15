import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Router } from "@angular/router";
import { FlatDetails } from "src/app/flatdetails";
import { Url } from "src/app/apis";


@Injectable({
  providedIn: 'root'
})
export class ResultserviceService {

  constructor(private http: HttpClient, private route: Router
  ) { }


  getFlatDetails(city: any, location: any, purpose: any): Observable<FlatDetails[]> {
    console.log(Url.flatDetails+city+'/'+location+'/'+purpose);
    return this.http.get<FlatDetails[]>(Url.flatDetails+city+'/'+location+'/'+purpose);

  }


  getFlatById(id: any): Observable<FlatDetails> {
    return this.http.get<FlatDetails>(Url.flatDetailsbyid+id);
  }

  addFlats(formdata:FormData):Observable<any>
  {
    return this.http.post(Url.addFlats+localStorage.getItem('userEmailId'),formdata);
  }

  getPartnerProperties():Observable<FlatDetails[]>
  {
    return this.http.get<FlatDetails[]>(Url.getPartnerFlats+localStorage.getItem('userEmailId'));
  }

  deleteFlats(id:any)
  {
    return this.http.delete(Url.deleteFlat+localStorage.getItem('userEmailId')+'/'+id,{responseType:'text'});
  }

  updateFlats(formdata:FormData)
  {
    return this.http.put(Url.updateFlat+localStorage.getItem('userEmailId')+'/'+sessionStorage.getItem('fupdate'),formdata,{responseType:'text'});
  }
}
