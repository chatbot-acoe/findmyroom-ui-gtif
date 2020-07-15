import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from "@angular/router";
import { DisplayPropertyComponentComponent } from "src/app/property-module/display-property-component/display-property-component.component";
import { ResultserviceService } from "src/app/shared/flatservices/resultservice.service";
import { PgresultserviceService } from "src/app/shared/pgservices/pgresultservice.service";
import swal from 'sweetalert';

@Component({
  selector: 'app-carousal-search-component',
  templateUrl: './carousal-search-component.component.html',
  styleUrls: ['./carousal-search-component.component.scss']
})
export class CarousalSearchComponentComponent implements OnInit {

  constructor(private route:Router,private flatservice:ResultserviceService, private pgservice: PgresultserviceService) { }
  b:boolean=false;
  r:boolean=false;
  h:boolean=false;
  ngOnInit() {
  }
  rent()
  {
    this.r=true;
    this.b=false;
    this.h=false;
  }
  book()
  {
    this.h=true;
    this.r=false;
    this.b=false;
  }
  buy()
  {
    this.b=true;
    this.r=false;
    this.h=false;
  }
  search(searchdata:any)
  {
    //this.route.navigate(['display-property'])
    console.log(searchdata)
    if(!searchdata.purpose&&!searchdata.city&&!searchdata.search&&!searchdata.category)
      {
        swal({
          icon: "warning",
          title: "Select all fields"
        });
      }
      else if(!searchdata.purpose)
        {
          swal({
            icon: "warning",
            title: "Select Buy or Rent or Book"
          }); 
          
        }
        else if(!searchdata.city)
          {
              swal({
                icon: "warning",
                title: "Select City"
              });
          }
          else if(!searchdata.search)
            {
                swal({
                  icon: "warning",
                  title: "Enter Location"
                });

            }
            else if(!searchdata.category)
              {
                if(searchdata.purpose=='Rent')
                  {
                    swal({
                      icon: "warning",
                      title: "Select Flat or PG"
                    });
                  }
                  else if(searchdata.purpose=='buy')
                    {
                      swal({
                        icon: "warning",
                        title: "Select Flat"
                      });
                        
                    
                    }
                    else if(searchdata.purpose=='Book')
                      {
                        swal({
                          icon: "warning",
                          title: "Select Hotel"
                        });
                      }
              }
              else if(searchdata.category=='flat')
              {
                  console.log('hai iam  flat')
                var lenght:number= searchdata.search.length;
                  var i:number;
                  var flag:number=1;
        
                  
                        for(i=0;i<lenght;i++)
                          {
                            if((searchdata.search.charAt(i)=='.')||(searchdata.search.charAt(i)=='`')||(searchdata.search.charAt(i)=='~')||(searchdata.search.charAt(i)=='@')||(searchdata.search.charAt(i)=='#')||(searchdata.search.charAt(i)=='$')||(searchdata.search.charAt(i)=='%')||(searchdata.search.charAt(i)=='^')||(searchdata.search.charAt(i)=='&')||(searchdata.search.charAt(i)=='*')||(searchdata.search.charAt(i)=='(')||(searchdata.search.charAt(i)==')')||(searchdata.search.charAt(i)=='_')||(searchdata.search.charAt(i)=='-')||(searchdata.search.charAt(i)=='+')||(searchdata.search.charAt(i)=='=')||(searchdata.search.charAt(i)=='{')||(searchdata.search.charAt(i)=='}')||(searchdata.search.charAt(i)=='[')||(searchdata.search.charAt(i)==']')||(searchdata.search.charAt(i)=='|')||(searchdata.search.charAt(i)=='\\')||searchdata.search.charAt(i)==';'||searchdata.search.charAt(i)==':'||searchdata.search.charAt(i)=='"'||searchdata.search.charAt(i)=='<'||searchdata.search.charAt(i)=='>'||searchdata.search.charAt(i)==','||searchdata.search.charAt(i)=='?'||searchdata.search.charAt(i)=='/')
                              {
                                flag=0;
                                break;
                              }
                          }
                
                          if(flag!=0)
                            {
                              sessionStorage.setItem('category',searchdata.category);
                              sessionStorage.setItem('city',searchdata.city);
                              sessionStorage.setItem('location',searchdata.search);
                              sessionStorage.setItem('purpose',searchdata.purpose);
                              sessionStorage.setItem('specialcharacters','false');
                              this.route.navigate(['property-module'])
                             
                            }
                            else{
                              
                                sessionStorage.setItem('specialcharacters','true');
                                this.route.navigate(['property-module'])
                            }
                  
              }
              else if(searchdata.category=='pg')
                {
                  var lenght:number= searchdata.search.length;
                  var i:number;
                  var flag:number=1;
                  for(i=0;i<lenght;i++)
                    {
                      if((searchdata.search.charAt(i)=='.')||(searchdata.search.charAt(i)=='`')||(searchdata.search.charAt(i)=='~')||(searchdata.search.charAt(i)=='@')||(searchdata.search.charAt(i)=='#')||(searchdata.search.charAt(i)=='$')||(searchdata.search.charAt(i)=='%')||(searchdata.search.charAt(i)=='^')||(searchdata.search.charAt(i)=='&')||(searchdata.search.charAt(i)=='*')||(searchdata.search.charAt(i)=='(')||(searchdata.search.charAt(i)==')')||(searchdata.search.charAt(i)=='_')||(searchdata.search.charAt(i)=='-')||(searchdata.search.charAt(i)=='+')||(searchdata.search.charAt(i)=='=')||(searchdata.search.charAt(i)=='{')||(searchdata.search.charAt(i)=='}')||(searchdata.search.charAt(i)=='[')||(searchdata.search.charAt(i)==']')||(searchdata.search.charAt(i)=='|')||(searchdata.search.charAt(i)=='\\')||searchdata.search.charAt(i)==';'||searchdata.search.charAt(i)==':'||searchdata.search.charAt(i)=='"'||searchdata.search.charAt(i)=='<'||searchdata.search.charAt(i)=='>'||searchdata.search.charAt(i)==','||searchdata.search.charAt(i)=='?'||searchdata.search.charAt(i)=='/')
                        {
                          flag=0;
                          break;
                        }
                    }

                    if(flag!=0)
                      {
                            sessionStorage.setItem('category',searchdata.category);
                            sessionStorage.setItem('city',searchdata.city);
                            sessionStorage.setItem('location',searchdata.search);
                            sessionStorage.setItem('specialcharacters','false');
                            this.route.navigate(['property-module'])
                      }
                      else{
                        
                          sessionStorage.setItem('specialcharacters','true');
                          this.route.navigate(['property-module'])
                      }
                 
                }

  }
}
