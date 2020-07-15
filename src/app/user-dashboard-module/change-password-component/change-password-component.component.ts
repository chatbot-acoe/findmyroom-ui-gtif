import { Component, OnInit } from '@angular/core';
import { UserDashboardServiceService } from "src/app/user-dashboard-module/user-dashboard-service.service";
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms'
@Component({
  selector: 'app-change-password-component',
  templateUrl: './change-password-component.component.html',
  styleUrls: ['./change-password-component.component.scss']
})
export class ChangePasswordComponentComponent implements OnInit {

  patternpassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;

  passwordForm: FormGroup;
  OLP: string = "";
  NWP1: string = "";
  NWP2: string = "";

  constructor(private frmbuilder: FormBuilder, private userDetailsP: UserDashboardServiceService) {

    this.passwordForm = frmbuilder.group({
      OLP: ['', Validators.compose([Validators.required, Validators.maxLength(15), Validators.minLength(6), Validators.pattern(this.patternpassword)])],
      NWP1: ['', Validators.compose([Validators.required, Validators.maxLength(15), Validators.minLength(6), , Validators.pattern(this.patternpassword)])],
      NWP2: ['', Validators.compose([Validators.required, Validators.maxLength(15), Validators.minLength(6), , Validators.pattern(this.patternpassword)])],
    });

  }

  ngOnInit() {
  }

  changepassword() {
    if (!(this.passwordForm.controls.NWP1.value == this.passwordForm.controls.NWP2.value)) {
      swal("re-enter password wrong again try..")
    }
    else {


      this.userDetailsP.changepasswordService(this.passwordForm.controls.OLP.value, this.passwordForm.controls.NWP1.value)
        .subscribe(data => {
          console.log(data);
          swal(" Password Changed Successfully");

        }, error => {
          console.log("error");
          swal("Invalid password Entered");
        });

    }
  }

}
