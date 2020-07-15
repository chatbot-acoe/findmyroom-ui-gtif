import { Component, OnInit } from '@angular/core';
import { PgresultserviceService } from "src/app/shared/pgservices/pgresultservice.service";
import { NgForm } from '@angular/forms';
import { PgDetails } from "src/app/shared/pgservices/pgdetails";

import { FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-updatepgcomponent',
  templateUrl: './updatepgcomponent.component.html',
  styleUrls: ['./updatepgcomponent.component.scss']
})
export class UpdatepgcomponentComponent implements OnInit {
  pgs: PgDetails[] = [];
  id:any;
  pg:PgDetails;
  msg:String;
  namePattern = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
  postalPattern = /^(1|2|3|4|5|6|7|8)\d{5}$/;
  flatarea = /^([a-zA-Z0-9]+(\s)?)*[a-zA-Z]+(\s)?$/;
  pricePattern = /^([1-9]*[0-9])/;

  constructor(private pgservice: PgresultserviceService,private formbuilder: FormBuilder, private route: Router) { }
  count: number = 0;
  selectedFiles: FileList;
  selectedFiles2: FileList;
  selectedFiles3: FileList;
  selectedFiles4: FileList;
  selectedFiles5: FileList;
  currentFileUpload: File;
  currentFileUpload2: File;
  currentFileUpload3: File;
  currentFileUpload4: File;
  currentFileUpload5: File;
  f1: boolean = false;
  f2: boolean = false;
  f3: boolean = false;
  f4: boolean = false;
  f5: boolean = false;
  enable: boolean = false;
  uploadpic:boolean = false;
  property: string;
  one:boolean;
  two:boolean;

  onOne()
  {
    this.one=true;
    this.two=false;
    console.log('in one');
  }

  onTwo()
  {
    this.one=false;
    this.two=true;
    console.log('in two');
  }

  ngOnInit() {
    this.one=true;
    this.two=false;
    this.id=localStorage.getItem('pgId');
    if (sessionStorage.getItem('partnerSearch') == 'pg') {
      this.pgservice.getPgs().subscribe(datapg => { this.pgs = datapg })
    }
    //this.pg=this.pgs.filter();
  }

  addpgForm = this.formbuilder.group({
    pgname: new FormControl('', Validators.compose([
      Validators.required, Validators.pattern(this.namePattern)
    ])),
    city: new FormControl('', Validators.compose([Validators.required])),
    location: new FormControl('', Validators.compose([
      Validators.required, Validators.pattern(this.namePattern), Validators.maxLength(50)
    ])),
    Price: new FormControl('', Validators.compose([
      Validators.required,Validators.pattern(this.pricePattern)
    ])),
    Typeofrooms: new FormControl('1Sharing', Validators.compose([
      Validators.required
    ])),
    postalcode: new FormControl('', Validators.compose([
      Validators.required, Validators.pattern(this.postalPattern), Validators.maxLength(6), Validators.minLength(6)
    ])),
    Description: new FormControl('', Validators.compose([
      Validators.required, Validators.maxLength(255)
    ])),
    SharingBeds: new FormControl('0', Validators.compose([
      Validators.pattern(this.pricePattern)
    ])),
    // twoSahringBeds: new FormControl('0', Validators.compose([
    //   Validators.pattern(this.pricePattern)
    // ]))
  });

  selectFile(event) {
    this.f1=true;
    if(this.f1&&this.f2&&this.f3&&this.f4&&this.f5)
      {
        this.enable=true;
      }
    this.selectedFiles = event.target.files;

  }
  selectFile2(event) {
    this.f2=true
    if(this.f1&&this.f2&&this.f3&&this.f4&&this.f5)
      {
        this.enable=true;
      }
    this.selectedFiles2 = event.target.files;

  } selectFile3(event) {
    this.f3=true;
    if(this.f1&&this.f2&&this.f3&&this.f4&&this.f5)
      {
        this.enable=true;
      }
    this.selectedFiles3 = event.target.files;

  } selectFile4(event) {

    this.f4=true;
    if(this.f1&&this.f2&&this.f3&&this.f4&&this.f5)
      {
        this.enable=true;
      }
    this.selectedFiles4 = event.target.files;

  } selectFile5(event) {

    this.f5=true;
    if(this.f1&&this.f2&&this.f3&&this.f4&&this.f5)
      {
        this.enable=true;
      }
    this.selectedFiles5 = event.target.files;
  }

  upload() {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.currentFileUpload2 = this.selectedFiles2.item(0);
    this.currentFileUpload3 = this.selectedFiles3.item(0);
    this.currentFileUpload4 = this.selectedFiles4.item(0);
    this.currentFileUpload5 = this.selectedFiles5.item(0);
    this.uploadpic=true;
    this.property = "images uploaded";
  }

  submitpg() {
    const formdata: FormData = new FormData();
    formdata.append('pgname', this.addpgForm.controls.pgname.value);
    formdata.append('pgcity', this.addpgForm.controls.city.value);
    formdata.append('location', this.addpgForm.controls.location.value);
    formdata.append('pgdescription', this.addpgForm.controls.Description.value);
    formdata.append('pgtypeofroom', this.addpgForm.controls.Typeofrooms.value);
    if (this.addpgForm.controls.Typeofrooms.value == "2Sharing") {
      formdata.append('oneSharingBeds', '0');
      formdata.append('twoSharingBeds', this.addpgForm.controls.SharingBeds.value)
    }
    if (this.addpgForm.controls.Typeofrooms.value == "1Sharing") {
      formdata.append('twoSharingBeds', '0');
      formdata.append('oneSharingBeds', this.addpgForm.controls.SharingBeds.value)
    }
    formdata.append('pgprice', this.addpgForm.controls.Price.value);
    formdata.append('pgpostalcode', this.addpgForm.controls.postalcode.value);
    formdata.append('file1', this.currentFileUpload);
    formdata.append('file2', this.currentFileUpload2);
    formdata.append('file3', this.currentFileUpload3);
    formdata.append('file4', this.currentFileUpload4);
    formdata.append('file5', this.currentFileUpload5);
    this.pgservice.updatePgs(formdata).subscribe(data=>{console.log(data),this.addpgForm.reset(),
      swal({
        title: 'updated Successfully',
        icon: 'success'

    }),this.route.navigate(['/partnerdashboard/editproperty']);

  });
}

}
