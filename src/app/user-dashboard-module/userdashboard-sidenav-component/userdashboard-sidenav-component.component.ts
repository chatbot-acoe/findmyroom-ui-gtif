import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdashboard-sidenav-component',
  templateUrl: './userdashboard-sidenav-component.component.html',
  styleUrls: ['./userdashboard-sidenav-component.component.scss']
})
export class UserdashboardSidenavComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   console.log("I am user Here");
   
  }

  location(){
    window.location.reload();
  }
}
