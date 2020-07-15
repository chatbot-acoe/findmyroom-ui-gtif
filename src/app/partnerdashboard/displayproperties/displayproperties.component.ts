import { Component, OnInit } from '@angular/core';
import { ResultserviceService } from "src/app/shared/flatservices/resultservice.service";
import { Router } from "@angular/router";
import { FlatDetails } from "src/app/flatdetails";
import { PgresultserviceService } from "src/app/shared/pgservices/pgresultservice.service";
import { PgDetails } from "src/app/shared/pgservices/pgdetails";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-displayproperties',
  templateUrl: './displayproperties.component.html',
  styleUrls: ['./displayproperties.component.scss']
})
export class DisplaypropertiesComponent implements OnInit {

  constructor(private flatservice: ResultserviceService, private route: Router, private pgservice: PgresultserviceService,private spinner: NgxSpinnerService) { }
  flats: FlatDetails[] = [];
  pgs: PgDetails[] = [];
  msg: any;
  type:string;
  datafetched:boolean=false;
  datafetched1:boolean=false;
  count:number=0;

  ngOnInit() {
    this.spinner.show();
    if (sessionStorage.getItem('partnerSearch') == 'flat') {
      this.type=sessionStorage.getItem('partnerSearch');
      this.flatservice.getPartnerProperties().subscribe(data => { this.flats = data; this.spinner.hide(); for(var i=0;i<1;i++){if(this.flats[i]){this.count++;}}; this.datafetched=true; })

    }
    if (sessionStorage.getItem('partnerSearch') == 'pg') {
      this.pgservice.getPgs().subscribe(datapg => { this.pgs = datapg;  this.spinner.hide(); this.datafetched1=true;})

    }
  }
  deleteFlat(f: number) {
    console.log(f);
    this.flatservice.deleteFlats(f).subscribe(data => {

      swal({
        title: 'Deleted Successfully',
        icon: 'success'

      }).then(() => window.location.reload());

    })


  }
  updateFlat(f: any) {
    sessionStorage.setItem('fupdate', f);
    this.route.navigate(['/partnerdashboard/updateproperty']);
  }

  deletePg(pgId: number) {
    this.pgservice.deletePgs(pgId).subscribe(data => {
         swal({
           title: "Successfully Deleted",
           icon: "success"
         }).then(()=> window.location.reload());

     }, error => {
       swal({
         title: "Unable to delete PG because it is rented by customers",
         icon: "warning"
       });

     });
    }

  updatePg(pgID: any) {
    localStorage.setItem('pgId', pgID);
    this.route.navigate(['/partnerdashboard/updatepgproperty']);
  }


}
