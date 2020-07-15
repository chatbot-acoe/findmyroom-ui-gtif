import { Component, OnInit } from '@angular/core';
import { UserData } from "src/app/user-dashboard-module/User";
import { UserDashboardServiceService } from "src/app/user-dashboard-module/user-dashboard-service.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private userDetails:UserDashboardServiceService) { }
  user= new UserData() ;
  ngOnInit() {
    this.userDetails.getUserDetails1().subscribe(users=>(this.user=users,console.log(users)));
  }

}
