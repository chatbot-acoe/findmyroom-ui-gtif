import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-contact-us-component',
  templateUrl: './contact-us-component.component.html',
  styleUrls: ['./contact-us-component.component.scss']
})
export class ContactUsComponentComponent implements OnInit {
 
  lat: number = 20.3514;
  lng: number = 85.8004;

 

  constructor() {}

  ngOnInit() {
  }

 



}
