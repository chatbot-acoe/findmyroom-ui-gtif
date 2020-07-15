import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserDto } from "src/app/core-module/login-module/userDto";
import { UserService } from "src/app/core-module/login-module/user.service";
import { Router } from "@angular/router";
import { AuthServiceService } from "src/app/shared/services/auth-service.service";
import { ForgotserviceService } from '../../../shared/services/forgotservice.service';
import swal from 'sweetalert';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-sign-in-component',
  templateUrl: './sign-in-component.component.html',
  styleUrls: ['./sign-in-component.component.scss']
})
export class SignInComponentComponent implements OnInit {
  userRole: any;
  emailid: string;
  userdto = new UserDto();
  model: UserDto = { userEmail: "adminfindmyroom@gmail.com", userPassword: "admin123456Aa@" };
  loginForm: FormGroup;
  forgotForm: FormGroup;
  patternEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z_\-\.])+\.([A-Za-z]{2,3})$/;
  patternPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/
  constructor(public forgotservice: ForgotserviceService, public fb: FormBuilder, private userService: UserService, private router: Router, public authService: AuthServiceService, private spinner: NgxSpinnerService) { }



  ngOnInit() {
    if (localStorage.getItem('isLoggedIn')) {
      this.router.navigate(['/']);
    }


    this.loginForm = this.fb.group({
      userEmail: new FormControl('', Validators.compose([
        Validators.required, Validators.pattern(this.patternEmail), Validators.maxLength(255)
      ])),
      userPassword: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(6), Validators.maxLength(15)
      ]))
    });

    this.forgotForm = this.fb.group({
      userEmailId: new FormControl('', Validators.compose([
        Validators.required, Validators.pattern(this.patternEmail)
      ]))
    });

  }

  login() {
    this.spinner.show();
    this.userdto.userEmail = this.loginForm.controls.userEmail.value;
    this.userdto.userPassword = this.loginForm.controls.userPassword.value;
    localStorage.setItem



    if (this.loginForm.controls.userEmail.value.toLowerCase() === this.model.userEmail && this.loginForm.controls.userPassword.value == this.model.userPassword) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('token', 'admin');
      localStorage.setItem('userEmailId',this.loginForm.controls.userEmail.value);
      console.log("I am Admin");

      this.router.navigate(['/admin-dashboard'])
      //window.location.reload();
    } else {

      this.userService.signin(this.userdto)
        .subscribe(data => {
          this.userRole = data

          console.log(data);
          this.loginAuthenticate(this.userRole)
          this.spinner.hide();
          

        }, error => {
          //console.log(error);
          console.log("Invalid Email or password");
          this.spinner.hide();
          swal({
            title: "Oops!!",
            text: "Invalid email or password",
            icon: "warning"
          });
          this.loginForm.reset();
          //window.location.reload();
        });

    }

    //console.log(this.userRole);
  }

  loginAuthenticate(userType: string) {
    console.log(userType);

    localStorage.setItem('userEmailId', this.loginForm.controls.userEmail.value)
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('token', userType);
    if (localStorage.getItem('token') == 'customer') {
      console.log("I am Customer");

      //this.router.navigate(['/']);
      if(localStorage.getItem("redirectTo"))
        {
          this.router.navigate([localStorage.getItem("redirectTo")])
        }
      else
        {
          this.router.navigate(['/']);
        }
    }
    else if (localStorage.getItem('token') == 'partner') {
      console.log("I am Partner");

      // this.router.navigate(['/partner-dashboard']);
      this.router.navigate(['/partnerdashboard']);
    }

  }

  forgot() {
    this.spinner.show();
    //console.log(localStorage.getItem('userEmailId'));
    console.log(this.emailid);
    this.forgotservice.sendmail(this.emailid).subscribe(data => {
       
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
        text: "Invalid email",
        icon: "warning"
      });
      //window.location.reload();
    });
  }

}
