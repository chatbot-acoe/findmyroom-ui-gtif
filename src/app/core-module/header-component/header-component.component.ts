import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthServiceService } from "src/app/shared/services/auth-service.service";
import { UserDashboardServiceService } from "src/app/user-dashboard-module/user-dashboard-service.service";

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {

  emailId: string;
  constructor(private router: Router,private userDashboard: UserDashboardServiceService) { }

  ngOnInit() {
  }

  logedIn(){
    if(localStorage.getItem('userEmailId'))
      {
        this.emailId = localStorage.getItem('userEmailId');
        let x = this.emailId.split("@");
        let s = x[0].replace(/\d+/g, '');
        this.emailId = s;
      }
    
    return localStorage.getItem('isLoggedIn');
    
  }

  logout(): void {
    console.log("Logout");
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('token');
    localStorage.removeItem('userEmailId');
    localStorage.removeItem('redirectTo');

    localStorage.removeItem('useId');
    this.router.navigate(['/']);
    window.location.reload();
  }

  profile(){
    if(localStorage.getItem('token') == 'customer'){
      this.router.navigate(['/customerdashboard']);
      //window.location.reload();
    }
    else if(localStorage.getItem('token') == 'partner'){
      this.router.navigate(['/partnerdashboard']);
    }
    else{
      this.router.navigate(['/admin-dashboard']);
    }
  }

}
