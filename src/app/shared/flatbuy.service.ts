import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Url} from '../apis';
import { Router } from "@angular/router";
import { FlatDetails } from "src/app/flatdetails";
@Injectable({
  providedIn: 'root'
})
export class FlatbuyService {
flat : FlatDetails
  constructor(private http:HttpClient) { }
  
buyflat(flat : FlatDetails,userEmail : String):Observable<any>
{
  return this.http.post(Url.buyflat + `${userEmail}`,flat);
}


}
