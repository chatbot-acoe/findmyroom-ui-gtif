import { Component, OnInit } from '@angular/core';
import { PgresultserviceService } from "src/app/shared/pgservices/pgresultservice.service";

import { NgForm } from '@angular/forms';
import { ResultserviceService } from "src/app/shared/flatservices/resultservice.service";
import { FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.scss']
})
export class AddpropertyComponent implements OnInit {


  namePattern = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
  postalPattern = /^(1|2|3|4|5|6|7|8)\d{5}$/;
  flatarea = /^([1-9][0-9]+(\s)?)*[a-zA-Z]+(\s[a-zA-Z]+)?$/;
  pricePattern = /^([1-9][0-9]*)$/;

  constructor(private pgservice: PgresultserviceService, private flatservice: ResultserviceService, private formbuilder: FormBuilder, private route: Router,private spinner: NgxSpinnerService) { }
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
  uploadpic: boolean = false;
  one:boolean;
  two:boolean;
  property: String;
  addForm = this.formbuilder.group({
    flatname: new FormControl('', Validators.compose([
      Validators.required, Validators.pattern(this.namePattern)
    ])),
    city: new FormControl('', Validators.compose([Validators.required])),
    location: new FormControl('', Validators.compose([
      Validators.required, Validators.pattern(this.namePattern), Validators.maxLength(50)
    ])),
    Price: new FormControl('', Validators.compose([
      Validators.required, Validators.pattern(this.pricePattern)])),
    furnish: new FormControl('Furnished', Validators.compose([
      Validators.required])),
    purpose: new FormControl('buy', Validators.compose([
      Validators.required])),
    rooms: new FormControl('1BHK', Validators.compose([
      Validators.required])),
    available: new FormControl('true', Validators.compose([
      Validators.required])),
    pincode: new FormControl('', Validators.compose([
      Validators.required, Validators.pattern(this.postalPattern), Validators.maxLength(6), Validators.minLength(6)
    ])),
    area: new FormControl('', Validators.compose([
      Validators.required, Validators.pattern(this.flatarea)
    ])),
    Description: new FormControl('', Validators.compose([
      Validators.required, Validators.maxLength(255)
    ]))
  });

  addpgForm = this.formbuilder.group({
    pgname: new FormControl('', Validators.compose([
      Validators.required, Validators.pattern(this.namePattern)
    ])),
    city: new FormControl('', Validators.compose([Validators.required])),
    location: new FormControl('', Validators.compose([
      Validators.required, Validators.pattern(this.namePattern), Validators.maxLength(50)
    ])),
    Price: new FormControl('', Validators.compose([
      Validators.required, Validators.pattern(this.pricePattern)
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



  onOne()
  {
    this.one=true;
    this.two=false;

  }

  onTwo()
  {
    this.one=false;
    this.two=true;

  }

  ngOnInit() {
    this.one=true;
    this.two=false;
  }

  selectFile(event) {
    this.f1 = true;
    if (this.f1 && this.f2 && this.f3 && this.f4 && this.f5) {
      this.enable = true;
    }
    this.selectedFiles = event.target.files;

  }
  selectFile2(event) {
    this.f2 = true
    if (this.f1 && this.f2 && this.f3 && this.f4 && this.f5) {
      this.enable = true;
    }
    this.selectedFiles2 = event.target.files;

  } selectFile3(event) {
    this.f3 = true;
    if (this.f1 && this.f2 && this.f3 && this.f4 && this.f5) {
      this.enable = true;
    }
    this.selectedFiles3 = event.target.files;

  } selectFile4(event) {

    this.f4 = true;
    if (this.f1 && this.f2 && this.f3 && this.f4 && this.f5) {
      this.enable = true;
    }
    this.selectedFiles4 = event.target.files;

  } selectFile5(event) {

    this.f5 = true;
    if (this.f1 && this.f2 && this.f3 && this.f4 && this.f5) {
      this.enable = true;
    }
    this.selectedFiles5 = event.target.files;
  }

  upload() {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.currentFileUpload2 = this.selectedFiles2.item(0);
    this.currentFileUpload3 = this.selectedFiles3.item(0);
    this.currentFileUpload4 = this.selectedFiles4.item(0);
    this.currentFileUpload5 = this.selectedFiles5.item(0);
    this.uploadpic = true;
    this.property = "images uploaded";
  }

  submit() {
    this.spinner.show();
    this.currentFileUpload = this.selectedFiles.item(0);
    this.currentFileUpload2 = this.selectedFiles2.item(0);
    this.currentFileUpload3 = this.selectedFiles3.item(0);
    this.currentFileUpload4 = this.selectedFiles4.item(0);
    this.currentFileUpload5 = this.selectedFiles5.item(0);
    const formdata: FormData = new FormData();
    formdata.append('flatName', this.addForm.controls.flatname.value);
    formdata.append('flatCity', this.addForm.controls.city.value);
    formdata.append('flatLocation', this.addForm.controls.location.value);
    formdata.append('flatPrice', this.addForm.controls.Price.value);
    formdata.append('faltType', this.addForm.controls.furnish.value);
    formdata.append('faltCategory', this.addForm.controls.purpose.value);
    formdata.append('flatRooms', this.addForm.controls.rooms.value);
    formdata.append('isAvailable', this.addForm.controls.available.value);
    formdata.append('flatPostalCode', this.addForm.controls.pincode.value);
    formdata.append('flatArea', this.addForm.controls.area.value);
    formdata.append('flatDescription', this.addForm.controls.Description.value);
    formdata.append('file1', this.currentFileUpload);
    formdata.append('file2', this.currentFileUpload2);
    formdata.append('file3', this.currentFileUpload3);
    formdata.append('file4', this.currentFileUpload4);
    formdata.append('file5', this.currentFileUpload5);
    console.log(this.addForm.value);
    this.flatservice.addFlats(formdata).subscribe();
    this.spinner.hide()
    swal({
      title: 'Added Successfully',
      icon: 'success'

    })
    this.addForm.reset();
  }

  submitpg() {
    this.spinner.show();
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
    this.pgservice.addPgs(formdata).subscribe();
    this.spinner.hide();
    swal({
      title: 'Added Successfully',
      icon: 'success'

    })
    this.addpgForm.reset();
  }
}
