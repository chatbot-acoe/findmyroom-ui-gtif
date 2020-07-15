import { Component, OnInit } from '@angular/core';
import { ResultserviceService } from "src/app/shared/flatservices/resultservice.service";
import {PgDetails} from '../../shared/pgservices/pgdetails';
import {PgresultserviceService} from '../../shared/pgservices/pgresultservice.service';
import { FlatDetails } from "src/app/flatdetails";
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-display-individual-details-component',
  templateUrl: './display-individual-details-component.component.html',
  styleUrls: ['./display-individual-details-component.component.scss']
})
export class DisplayIndividualDetailsComponentComponent implements OnInit {

  constructor(private flatservice:ResultserviceService,private router : Router, private pgservice : PgresultserviceService,private spinner: NgxSpinnerService,private route:ActivatedRoute) { }
  flat:FlatDetails;
  pge : PgDetails;
  category :String;
  specialcharacter:boolean=false;
  ngOnInit() {
    this.category=sessionStorage.getItem('category');
    this.spinner.show();
     if(this.category=='flat')
       {
           this.flatservice.getFlatById(sessionStorage.getItem('id')).subscribe(data=>{this.flat=data;console.log(data) ;console.log(this.category);this.spinner.hide();})
           console.log(sessionStorage.getItem('id'))


       }
       else if(this.category=='pg')
         {
           console.log('individual flat details')
          this.pgservice.getpgbyid(sessionStorage.getItem('id')).subscribe(data=>{this.pge=data;console.log(data);this.spinner.hide();})

   } }

   
   bookpg()
   {
     var n: any = this.pge.pgID;
     var q : any = this.pge.pgPrice;
     console.log(n);
     sessionStorage.setItem('pid',n);
     sessionStorage.setItem('pgdesc', this.pge.pgDescription);
     sessionStorage.setItem('pgnam',this.pge.pgName);
     sessionStorage.setItem('pgcity',this.pge.pgCity);
     sessionStorage.setItem('pgpri',q);
     console.log(q);
     this.router.navigate(['booking-module']);
   }

   loggedIn(){
     return localStorage.getItem('isLoggedIn');
   }

   bookflat()
   {
    var n: any = this.flat.id
    console.log(n);
    var p : any = this.flat.flatPrice
    var m : any = this.flat.flatDescription
    var aa : any = this.flat.flatName
    var ab : any = this.flat.flatCity
    sessionStorage.setItem('fid',n);
    sessionStorage.setItem('flatdesc',m);
    sessionStorage.setItem('flatname',aa);
    sessionStorage.setItem('flatcity',ab);
    sessionStorage.setItem('flatprice', p);
    this.router.navigate(['booking-module']);
   }

   contactowner(){
    if (!(localStorage.getItem('isLoggedIn'))) {
      console.log("This is ",this.route.snapshot.url.join(''))
      localStorage.setItem("redirectTo",this.route.snapshot.url.join(''))
      this.router.navigate(['/login']);
      swal({
        title: "Please Login",
        icon: "warning"
      }).then(() => window.location.reload())
    }
   }

   contactPg(){
    if (!(localStorage.getItem('isLoggedIn'))) {
      console.log("This is ",this.route.snapshot.url.join(''))
      localStorage.setItem("redirectTo",this.route.snapshot.url.join(''))
      this.router.navigate(['/login']);
      swal({
        title: "Please Login",
        icon: "warning"
      }).then(() => window.location.reload())
    }

   }

}
