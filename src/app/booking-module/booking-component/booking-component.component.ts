import { Component, OnInit } from '@angular/core';
import { FlatDetails } from "src/app/flatdetails";
import {PgDetails} from '../../shared/pgservices/pgdetails';
import { ResultserviceService } from "src/app/shared/flatservices/resultservice.service";
import { PgresultserviceService } from "src/app/shared/pgservices/pgresultservice.service";
import {FlatbuyService} from '../../shared/flatbuy.service';
import {RentpgService} from '../../shared/rentpg.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
import { Input } from "@angular/core";
import { Router } from "@angular/router";
import swal from 'sweetalert';
@Component({
  selector: 'app-booking-component',
  templateUrl: './booking-component.component.html',
  styleUrls: ['./booking-component.component.scss']
})
export class BookingComponentComponent implements OnInit {
  
  paymentForm : FormGroup;
  category :String;
  userEmail : String;
  userEmailId : String;
  flat:FlatDetails;
  pgd : PgDetails;
  flatdet : boolean=false;
  pgdet :boolean = false;
  nameoncard : String;
  cardnumber : number;
  cvv : number;
  netbankingForm: FormGroup;
  expirydate : number;
  password:String;
  patternpassword = /([A-Za-z0-9!@#$%^&*()]{8,20})$/;
  patternEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z_\-\.])+\.([A-Za-z]{2,3})$/;
  patternname = /([A-Za-z]{3,20})$/;
  patternnumber = /^[1-9]([0-9]{15})$/;
  patterncvv = /^[0-9][0-9][0-9]$/;
  patternexpiry = /^(0[1-9]|1[0-2])\/(1[9]|[2-3][0-9])$/; 
  discpgprice : number;
  discflatprice : number;
  constructor(private buyflatservice : FlatbuyService,private router : Router,private fb : FormBuilder,private rentpgservice : RentpgService,private flatservice:ResultserviceService,private pgservice : PgresultserviceService,) { }
 
  ngOnInit() {
    this.userEmail = localStorage.getItem('userEmailId');
    console.log(this.userEmail);
    this.category=sessionStorage.getItem('category');
    console.log(this.category)
   if(this.category=='flat')
    {
       this.flatdet = true;
       this.flatservice.getFlatById(sessionStorage.getItem('id')).subscribe(data=>{this.flat=data;console.log(data) ;console.log(this.category)});
       console.log(sessionStorage.getItem('id'));
       
      
    }
    else if(this.category== 'pg')
      {
        this.pgdet=true;
        console.log('individual flat details')
        this.pgservice.getpgbyid(sessionStorage.getItem('id')).subscribe(data=>{this.pgd=data;console.log(data);});
     
   
      }
      this.paymentForm = this.fb.group({
      nameoncard: new FormControl('', Validators.compose([
          Validators.required, Validators.pattern(this.patternname)
        ])),
        cardnumber: new FormControl('', Validators.compose([
          Validators.required, Validators.pattern(this.patternnumber)
        ])),
        cvv: new FormControl('', Validators.compose([
          Validators.required, Validators.pattern(this.patterncvv)
        ])),
        expirydate: new FormControl('', Validators.compose([
          Validators.required, Validators.pattern(this.patternexpiry)
        ])),
      });

      this.netbankingForm = this.fb.group({
        userEmailId: new FormControl('', Validators.compose([
          Validators.required, Validators.pattern(this.patternEmail)
        ])),
        password: new FormControl('', Validators.compose([
          Validators.required, Validators.pattern(this.patternpassword)
        ]))
      });
  
    }

    
      buypg()
      {
        console.log("inside buy pg");
        this.rentpgservice.buypg(this.pgd,this.userEmail).subscribe();
        swal({
          title: "Payment Successful , Redirecting to home page",
          icon: "success"
        });
        console.log("buy");
        this.router.navigate(['/']);
        
      }
      buyflat()
      {
        console.log("inside buy flat");
          this.buyflatservice.buyflat(this.flat,this.userEmail).subscribe();
            swal({
              title: "Payment Successful , Redirecting to home page",
              icon: "success"
            });
            console.log("buy");
            this.router.navigate(['/']);
          
      }
  
 
  
}
