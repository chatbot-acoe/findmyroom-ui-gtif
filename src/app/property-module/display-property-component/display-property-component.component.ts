import { Component, OnInit } from '@angular/core';
import { ResultserviceService } from "src/app/shared/flatservices/resultservice.service";

import { PgDetails } from "src/app/shared/pgservices/pgdetails";
import { PgresultserviceService } from "src/app/shared/pgservices/pgresultservice.service";
import { Router } from "@angular/router";
import { FlatDetails } from "src/app/flatdetails";
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-display-property-component',
  templateUrl: './display-property-component.component.html',
  styleUrls: ['./display-property-component.component.scss']
})
export class DisplayPropertyComponentComponent implements OnInit {

  filterItems = { furnished: false, semifurnished: false, bhk1: false, bhk2: false, bhk3: false }
  pgFilterItems = { oneSharing: false, twoSharing: false }
  owner: string;
  ownerPhoneNo: number;
  pgOwner: string;
  pgOwnerPhoneNo: number;
  flats: FlatDetails[] = [];
  filterFlats: FlatDetails[] = [];
  flatsForDisplay: FlatDetails[] = [];
  pgDetails: PgDetails[];
  pgForDisplay: PgDetails[];
  filterPgs: PgDetails[];
  dataFetched: boolean = false;
  specialcharacter: boolean = false;
  category: String;
  property1: FlatDetails;
  property2: FlatDetails;

  pgProperty1: PgDetails;
  pgProperty2: PgDetails;

  //Filter Options
  filterTypeFurnished: boolean
  filterTypeSemiFurnished: boolean

  constructor(private flatservice: ResultserviceService, private pgservices: PgresultserviceService, private router: Router, private spinner: NgxSpinnerService,private route:ActivatedRoute) {


  }



  ngOnInit() {

    this.spinner.show();
    this.category = sessionStorage.getItem('category');
    if (sessionStorage.getItem('specialcharacters') == 'true') {
      this.specialcharacter = true;
      this.spinner.hide();
    }
    else if (this.category == 'flat') {


      this.flatservice.getFlatDetails(sessionStorage.getItem('city'), sessionStorage.getItem('location'), sessionStorage.getItem('purpose')).subscribe(data => { this.flats = data; this.flatsForDisplay = data; this.dataFetched = true; this.spinner.hide(); });
    }
    else if (this.category == 'pg') {
      this.pgservices.getpgdetails(sessionStorage.getItem('city'), sessionStorage.getItem('location')).subscribe(data => { this.pgDetails = data; this.pgForDisplay = data; this.dataFetched = true; this.spinner.hide(); })
    }

  }

  detailedinformation(f: FlatDetails) {
    console.log(f.id);
    var n: any = f.id;
    sessionStorage.setItem('id', n)
    //window.open('display-individual-details'); 
    this.router.navigate(['/display-individual-details']);

  }
  detailedinform(p: PgDetails) {
    var n: any = p.pgID;
    console.log(n);
    sessionStorage.setItem('id', n);
    console.log('in pgs');
    //window.open('display-individual-details');
    this.router.navigate(['/display-individual-details']);
  }

  contact(f:any,propertyCategory:string) {
    if (!(localStorage.getItem('isLoggedIn'))) {
      console.log("This is ",this.route.pathFromRoot[1].snapshot.url[0].path)
      localStorage.setItem("redirectTo",this.route.pathFromRoot[1].snapshot.url[0].path)
      this.router.navigate(['/login']);
      swal({
        title: "Please Login",
        icon: "warning"
      }).then(() => window.location.reload())
    }
    else if(propertyCategory == 'flat') {
    console.log(f);
    this.owner = f.ownerName;
    this.ownerPhoneNo = f.ownerPhone;
    }
    else{
      console.log(f);
      this.pgOwner = f.ownerName;
      this.pgOwnerPhoneNo = f.ownerPhoneNumber;
    }
  }



  filterFlatsData() {

    /*console.log("Got ",);
    for(var i =0;i< this.flats.length;i++){
      if(this.flats[i]['faltType'] == "furnished" && this.filterItems.furnished){
        console.log("I have",this.flats[i]['faltType'])
        this.filterFlats.push(this.flats[i]);
      }
    }
    
    console.log("BEfore filter = ",this.flats.length)
    this.flats = this.filterFlats;
    
    console.log("AFter filter = ",this.flats.length)
    */



    /*
    for(var i =0;i< this.flats.length;i++){
      if((this.flats[i]['faltType'] == "furnished" && this.filterItems.furnished)){
        console.log("I have",this.flats[i]['faltType'])
        this.filterFlats.push(this.flats[i]);
      }
      else if((this.flats[i]['faltType'] == "semifurnished" && this.filterItems.semifurnished)){
        console.log("I have",this.flats[i]['faltType'])
        this.filterFlats.push(this.flats[i]);
      }
    }*/

    this.flatsForDisplay = this.flats;
    this.filterFlats = this.flatsForDisplay.filter(x =>
      ((x.faltType.toLowerCase() == "furnished" && this.filterItems.furnished)
        || (x.faltType.toLowerCase() == "semifurnished" && this.filterItems.semifurnished)) || (
        (x.flatRooms.toLowerCase() == "1bhk" && this.filterItems.bhk1)
        || (x.flatRooms.toLowerCase() == "2bhk" && this.filterItems.bhk2)
        || (x.flatRooms.toLowerCase() == "3bhk" && this.filterItems.bhk3))
    );
    console.log("The filter items",this.filterItems)
    this.flatsForDisplay = this.filterFlats
    if (this.flatsForDisplay.length == 0 && (this.filterItems.furnished || this.filterItems.semifurnished || this.filterItems.bhk1 || this.filterItems.bhk2 || this.filterItems.bhk3)) {
      swal({
        icon: "warning",
        title: "No results found",
      }).then(() => window.location.reload())
      //this.route.navigate(['/property-module'])
      //window.location.reload();

    }
    if (this.flatsForDisplay.length == 0) {
      this.flatsForDisplay = this.flats
    }
    else {
      this.flatsForDisplay = this.filterFlats
    }

    console.log("Contents of this.flatsForDisplay = ", this.flatsForDisplay)
  }


  filterPgData() {
    this.pgForDisplay = this.pgDetails;
    this.filterPgs = this.pgForDisplay.filter(y =>
      (y.oneSharingBeds >= 1 && this.pgFilterItems.oneSharing)
      || (y.twoSharingBeds >= 1 && this.pgFilterItems.twoSharing)
    );
    this.pgForDisplay = this.filterPgs;

    if(this.pgForDisplay.length == 0 && (this.pgFilterItems.oneSharing || this.pgFilterItems.twoSharing)){
      swal({
        icon: "warning",
        title: "No results found",
      }).then(() => window.location.reload())

    }
    if (this.pgForDisplay.length == 0) {
      this.pgForDisplay = this.pgDetails
    }
    else {
      this.pgForDisplay = this.filterPgs
    }

  }

  sortByPrice(sortCategoty: number,propertytype: string){
    switch (sortCategoty) {
      case 1: 
        if(propertytype == 'flat'){
          this.flatsForDisplay = this.flatsForDisplay.sort((property1, property2) => {
            return (property1.flatPrice - property2.flatPrice);
          });
        }
        if(propertytype == 'pg'){
          this.pgForDisplay = this.pgForDisplay.sort((pgProperty1,pgProperty2) => {
            return (pgProperty1.pgPrice - pgProperty2.pgPrice)
          });
        }
        break;
      case 2:
      if(propertytype == 'flat'){
        this.flatsForDisplay = this.flatsForDisplay.sort((property1, property2) => {
          return -(property1.flatPrice - property2.flatPrice);
        });
      }
      if(propertytype == 'pg'){
        this.pgForDisplay = this.pgForDisplay.sort((pgProperty1,pgProperty2) => {
          return -(pgProperty1.pgPrice - pgProperty2.pgPrice)
        });
      }
      break;
    
      default:
        break;
    }

  }

}
