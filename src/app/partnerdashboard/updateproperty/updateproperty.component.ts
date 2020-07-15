import { Component, OnInit } from '@angular/core';
import { ResultserviceService } from "src/app/shared/flatservices/resultservice.service";
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-updateproperty',
  templateUrl: './updateproperty.component.html',
  styleUrls: ['./updateproperty.component.scss']
})
export class UpdatepropertyComponent implements OnInit {
  namePattern = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
  postalPattern = /^(1|2|3|4|5|6|7|8)\d{5}$/;
  flatarea = /^([1-9][0-9]+(\s)?)*[a-zA-Z]+(\s[a-zA-Z]+)?$/;
  pricePattern = /^([1-9][0-9]*)$/;
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
  disable: boolean = false;
  property: string;
  f1:boolean=false;
  f2:boolean=false;
  f3:boolean=false;
  f4:boolean=false;
  f5:boolean=false;

  constructor(private flatservice:ResultserviceService,private formbuilder:FormBuilder,private route:Router,private spinner: NgxSpinnerService) { }
  addForm = this.formbuilder.group({
    flatname: new FormControl('',Validators.compose([
      Validators.required,Validators.pattern(this.namePattern)
    ])),
    city:new FormControl('',Validators.compose([Validators.required])),
    location:new FormControl('',Validators.compose([
      Validators.required,Validators.pattern(this.namePattern),Validators.maxLength(50)
    ])),
    Price:new FormControl('',Validators.compose([
      Validators.required,Validators.pattern(this.pricePattern)])),
      furnish:new FormControl('Furnished',Validators.compose([
        Validators.required])),
        purpose:new FormControl('buy',Validators.compose([
          Validators.required])),
          rooms:new FormControl('1BHK',Validators.compose([
            Validators.required])),
            available:new FormControl('true',Validators.compose([
              Validators.required])),
    pincode: new FormControl('',Validators.compose([
      Validators.required,Validators.pattern(this.postalPattern),Validators.maxLength(6),Validators.minLength(6)
    ])),
    area: new FormControl('',Validators.compose([
      Validators.required,Validators.pattern(this.flatarea)
    ])),
    Description: new FormControl('',Validators.compose([
      Validators.required,Validators.maxLength(50)
    ]))
    });
  ngOnInit() {
  }
  selectFile(event) {
    this.f1=true;
    if(this.f1&&this.f2&&this.f3&&this.f4&&this.f5)
      {
        this.disable=true;
      }
    this.selectedFiles = event.target.files;

  }
  selectFile2(event) {
    this.f2=true
    if(this.f1&&this.f2&&this.f3&&this.f4&&this.f5)
      {
        this.disable=true;
      }
    this.selectedFiles2 = event.target.files;

  } selectFile3(event) {
    this.f3=true;
    if(this.f1&&this.f2&&this.f3&&this.f4&&this.f5)
      {
        this.disable=true;
      }
    this.selectedFiles3 = event.target.files;

  } selectFile4(event) {

    this.f4=true;
    if(this.f1&&this.f2&&this.f3&&this.f4&&this.f5)
      {
        this.disable=true;
      }
    this.selectedFiles4 = event.target.files;

  } selectFile5(event) {

    this.f5=true;
    if(this.f1&&this.f2&&this.f3&&this.f4&&this.f5)
      {
        this.disable=true;
      }
    this.selectedFiles5 = event.target.files;
  }

  submit() {
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
    this.flatservice.updateFlats(formdata).subscribe(data=>{console.log(data),this.addForm.reset(),
      swal({
        title: 'updated Successfully',
        icon: 'success'

    }),this.route.navigate(['/partnerdashboard/editproperty']);

    });


  }
}
