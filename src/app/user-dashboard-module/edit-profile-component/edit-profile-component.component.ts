import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators,NgForm} from '@angular/forms'
import { UserDashboardServiceService } from "src/app/user-dashboard-module/user-dashboard-service.service";
import { UserData } from "src/app/user-dashboard-module/User";
@Component({
  selector: 'app-edit-profile-component',
  templateUrl: './edit-profile-component.component.html',
  styleUrls: ['./edit-profile-component.component.scss']
})
export class EditProfileComponentComponent implements OnInit {

  user= new UserData() ;
  phonePattern = /^(6|7|8|9)\d{9}/;
  postalPattern = /^(1|2|3|4|5|6|7|8)\d{5}/; 
  cityPattern = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
  streetPattern = /^([a-zA-Z0-9]+(\s)?)*[a-zA-Z]+(\s)?$/; 

  editForm:FormGroup;  
  Phn:number=0;  
  city:string="";  
  street:string=""; 
  postalcode:string=""; 


  constructor(private frmbuilder:FormBuilder,private userDetailsE:UserDashboardServiceService,private userDetails:UserDashboardServiceService) {

    this.editForm=frmbuilder.group({  
      Phn:[this.user.userPhone,Validators.compose([Validators.maxLength(10),Validators.minLength(10),Validators.pattern(this.phonePattern)])],  
      city:['',Validators.compose([Validators.maxLength(50),Validators.minLength(3),Validators.pattern(this.cityPattern)])],  
      street:['',Validators.compose([Validators.maxLength(50),Validators.minLength(5),Validators.pattern(this.streetPattern)])], 
      postalcode:['',Validators.compose([Validators.maxLength(6),Validators.minLength(6),Validators.pattern(this.postalPattern)])]  
      }); 


   }

  ngOnInit() {
    this.userDetails.getUserDetails().subscribe(users=>(this.user=users,console.log(users)));


  }
 

  editprofile(event)
  {
    event.preventDefault();
    const target = event.target;
    console.log(target);
    this.user.userPhone = target.querySelector('#Phn').value;
    this.user.userCity = target.querySelector('#city').value;
    this.user.userStreet = target.querySelector('#street').value;
    this.user.postalCode = target.querySelector('#postalcode').value;
   this.userDetailsE.editprofileService(this.user.userPhone,this.user.userCity,this.user.userStreet,this.user.postalCode)
   .subscribe(data => {
    console.log(data);
    swal(" profile updated Successfully");

  }, error => {
    console.log("error");
    swal("profile not updated ");
  });


  }

}
