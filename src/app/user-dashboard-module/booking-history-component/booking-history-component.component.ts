import { Component, OnInit } from '@angular/core';
import { UserDashboardServiceService } from "src/app/user-dashboard-module/user-dashboard-service.service";
import { flatbuydto } from '../flatbuydto';
import { pgrentdto } from '../pgrentdto';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-booking-history-component',
  templateUrl: './booking-history-component.component.html',
  styleUrls: ['./booking-history-component.component.scss']
})
export class BookingHistoryComponentComponent implements OnInit {
  pgrent: pgrentdto[];
  flatbuy: flatbuydto[];
datafetched:boolean=false;
datafetched1:boolean=false;
count:number=0;
count1:number=0;

  constructor(private userdashboard: UserDashboardServiceService,private spinner: NgxSpinnerService) { }
  ngOnInit() {
    this.spinner.show();
    console.log(localStorage.getItem('useId'));
    this.userdashboard.getflatbuydetails(localStorage.getItem('useId')).subscribe(data => {
      this.flatbuy = data;
      console.log(data);
      for(var i=0;i<1;i++){if(this.flatbuy[i]){this.count++;}};
      this.datafetched=true;
      this.spinner.hide();
    });
    this.userdashboard.getpgbuydetails(localStorage.getItem('useId')).subscribe(dat => {
      this.pgrent = dat;
      console.log(dat);
      this.datafetched1=true;
      for(var i=0;i<1;i++){if(this.pgrent[i]){this.count1++;}};
      this.spinner.hide();
    }
    );
  }
}
