import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInformation } from "src/app/core-module/login-module/UserEntity";
import { UserService } from "src/app/core-module/login-module/user.service";
import { Router } from "@angular/router";
import swal from 'sweetalert';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-sign-up-component',
  templateUrl: './sign-up-component.component.html',
  styleUrls: ['./sign-up-component.component.scss']
})
export class SignUpComponentComponent implements OnInit {

  user = new UserInformation();
  url: string;
  namePattern = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
  streetPattern = /^([a-zA-Z0-9]+(\s)?)*[a-zA-Z]+(\s)?$/;
  firstNamePattern = /^[a-zA-Z]+$/;
  patternEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z_\-\.])+\.([A-Za-z]{2,3})$/;
  patternPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/

  phonePattern = /^(1|2|3|4|5|6|7|8|9)\d{9}$/;
  postalPattern = /^(1|2|3|4|5|6|7|8)\d{5}$/;


  constructor(private formbuilder: FormBuilder,private userService:UserService,private router: Router,private spinner: NgxSpinnerService) { }

  signupForm = this.formbuilder.group({
    userFirstName: new FormControl('',Validators.compose([
      Validators.required,Validators.pattern(this.firstNamePattern),Validators.maxLength(50)
    ])),
    userLastName: new FormControl('',Validators.compose([
      Validators.pattern(this.firstNamePattern),,Validators.maxLength(50)
    ])),
    userEmail: new FormControl('',Validators.compose([
      Validators.required,Validators.pattern(this.patternEmail),Validators.maxLength(255)
    ])),
    userPassword: new FormControl('',Validators.compose([
      Validators.required,Validators.pattern(this.patternPassword),Validators.minLength(6),Validators.maxLength(15)
    ])),
    userConfirmPassword: new FormControl('',Validators.compose([
      Validators.required, Validators.pattern(this.patternPassword), Validators.minLength(6), Validators.maxLength(15),
    ])),
    userPhone: new FormControl('',Validators.compose([
      Validators.required,Validators.pattern(this.phonePattern),Validators.maxLength(10)
    ])),
    userCity: new FormControl('',Validators.compose([
      Validators.required,Validators.pattern(this.namePattern),Validators.minLength(3),Validators.maxLength(50)
    ])),
    userStreet: new FormControl('',Validators.compose([
      Validators.required,Validators.pattern(this.streetPattern),Validators.maxLength(50)
    ])),
    userPostalCode: new FormControl('',Validators.compose([
      Validators.required,Validators.pattern(this.postalPattern),Validators.maxLength(6)
    ])),
    userType: new FormControl('customer',Validators.compose([
      Validators.required
    ]))
  }, {validator: this.MustMatch('userPassword','userConfirmPassword')}


);



  MustMatch(controlName: string, matchingControlName: string) {
    return (signupForm: FormGroup) => {
        const control = signupForm.controls[controlName];
        const matchingControl = signupForm.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

EmailInvalid(controlName:string){
  return (signupForm: FormGroup) => {
    const control = signupForm.controls[controlName];
    if(control.value === 'adminfindmyroom@gmail.com'){
      control.setErrors({emailvalid: true})
    } else{
      control.setErrors(null);
    }
  }
}

  ngOnInit() {
    console.log('hello');

  }


  Signup(){
    this.spinner.show();
   this.user.userFirstName = this.signupForm.controls.userFirstName.value;
   this.user.userLastName = this.signupForm.controls.userLastName.value;
   this.user.userEmail = this.signupForm.controls.userEmail.value;
   this.user.userPassword = this.signupForm.controls.userPassword.value;
   this.user.userPhone = this.signupForm.controls.userPhone.value;
   this.user.userCity = this.signupForm.controls.userCity.value;
   this.user.userStreet = this.signupForm.controls.userStreet.value;
   this.user.postalCode = this.signupForm.controls.userPostalCode.value;
   this.user.userType = this.signupForm.controls.userType.value;

   if(this.user.userEmail === 'adminFindMyRoom@gmail.com'){
    this.spinner.hide();
    swal({
      title: "Oops!!",
      text: "Email alreday Taken",
      icon: "warning"
    });

    this.signupForm.reset();
    // window.location.reload();
     return;
   }

   this.userService.register(this.user)
   .subscribe(data => { if (data === 'success')
      {
        console.log(data);
        console.log("hello");
        this.spinner.hide();
        swal({
          title: "Successfully Registered",
          icon: "success"
        }).then(() => window.location.reload());
        this.signupForm.reset();



      } else{
        console.log(data);
        console.log("hello");
        swal({
          title: "Oops!!",
          text: "Already Registered",
          icon: "warning"
        });
        this.router.navigateByUrl(this.url);
      }
    }, error => {
        //console.log(error);

        console.log("hi");
        this.spinner.hide();
        //alert("Alread")
        swal({
          title: "Oops!!",
          text: "Already Registered",
          icon: "warning"
        });
        this.signupForm.reset();
        //window.location.reload();

    }
  );
    this.user = new UserInformation();
  }

}
