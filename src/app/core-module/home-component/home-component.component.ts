import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log("I am Here");
    // if(localStorage.getItem('token') != 'customer'){
    //   localStorage.setItem('token','guest');
    // }

    if(localStorage.getItem('token') == 'partner'){
      this.router.navigate(['/partnerdashboard']);
    }
  }

}
