import { Component, OnInit } from '@angular/core';
import { PartnerData } from "src/app/admin-dashboard-module/Partner";
import { AdminDashboardServiceService } from "src/app/admin-dashboard-module/admin-dashboard-service.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
 partnerData:PartnerData[]=[];
  constructor(private partnerDetails:AdminDashboardServiceService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
   this.partnerDetails.getPartnerDetails().subscribe(partners=>{console.log(partners)
    this.partnerData=partners
    this.spinner.hide();
  });
    

  }

  removepartner(data:any)
  {
    this.spinner.show();
    console.log(data);
   this.partnerDetails.deletepartnerdetailservice(data)
   .subscribe(data => {
    console.log(data);
    this.spinner.hide();
    swal("deleted Successfully").then(() => window.location.reload());

  }, error => {
    
    console.log("error");
    this.spinner.hide();
    swal("partner's property already purchased u cant delete  it").then(() => window.location.reload());
  });
  }


  verifypartner(data:any)
  {
    this.spinner.show();
    console.log(data);
    this.partnerDetails.verifypartnerdetails(data)
    .subscribe(data => {
      console.log(data);
      this.spinner.hide();
      swal(" Verified Successfully").then(() => window.location.reload());
  
    }, error => {
      this.spinner.hide();
      console.log(error);
      swal("Verification failed. Try again..").then(() => window.location.reload());
    });
  }

  verifycheck(verify:boolean)
  {
    console.log(!verify);
    
    return (!verify);
    
  }
}
