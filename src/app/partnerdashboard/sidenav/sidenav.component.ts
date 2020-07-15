import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  getFlats()
  {
    console.log('hai i am working in partner');
    sessionStorage.setItem('partnerSearch','flat');
    this.route.navigate(['/partnerdashboard/editproperty']);
    window.location.reload();

  }

  getPgs()
  {
    sessionStorage.setItem('partnerSearch','pg');
    this.route.navigate(['/partnerdashboard/editproperty']);
    window.location.reload();
  }
  location(){
    window.location.reload();
  }
  
}
