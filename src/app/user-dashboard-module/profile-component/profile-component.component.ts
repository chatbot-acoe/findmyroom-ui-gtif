import { Component, OnInit } from '@angular/core';
import { UserDashboardServiceService } from "src/app/user-dashboard-module/user-dashboard-service.service";
import { UserData } from "src/app/user-dashboard-module/User";
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import swal from 'sweetalert';
import { NgxSpinnerService } from "ngx-spinner";
import {Router} from '@angular/router';
@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.scss']
})
export class ProfileComponentComponent implements OnInit {
referForm: FormGroup;
patternEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z_\-\.])+\.([A-Za-z]{2,3})$/;
userEmailId : String;
n : any ;
  user= new UserData() ;
  userrId : number;
  constructor(private route : Router,private userDetails:UserDashboardServiceService,private fb:FormBuilder, private spinner: NgxSpinnerService) { }

  ngOnInit() {

   this.userDetails.getUserDetails().subscribe(users=>(this.user=users,console.log(users)
  , this.n= this.user.userId,
  console.log(this.n),
  localStorage.setItem('useId',this.n),
  console.log(this.n)));
   this.referForm = this.fb.group({
    userEmailId: new FormControl('', Validators.compose([
      Validators.required, Validators.pattern(this.patternEmail)
    ]))
  });
 
  }
  refer()
  {
    console.log("hi");
    console.log(this.referForm.controls.userEmailId.value);
    this.userDetails.sendmail(this.user.userFirstName,this.user.userEmail,this.user.userReferral,this.referForm.controls.userEmailId.value).subscribe(
      data => {
        
         console.log(data);
         this.spinner.hide();
         swal({
           title: "Successfully Sent",
           icon: "success"
         });
       
     }, error => {
       console.log(error);
       console.log("Invalid Email or Password");
       this.spinner.hide();
       swal({
         title: "Oops!!",
         text: "EmailId Already Present",
         icon: "warning"
       });
  });
  }
}
