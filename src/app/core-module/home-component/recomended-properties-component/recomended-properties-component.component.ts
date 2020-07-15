import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-recomended-properties-component',
  templateUrl: './recomended-properties-component.component.html',
  styleUrls: ['./recomended-properties-component.component.scss']
})
export class RecomendedPropertiesComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loggedIn(){
    if(!localStorage.getItem('isLoggedIn')){
      this.router.navigate(['/login'])
    }
  }
}
