import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { PartnerdashboardRoutingModule } from './partnerdashboard-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdatepropertyComponent } from './updateproperty/updateproperty.component';
//import { NgForm } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UpdatepgcomponentComponent } from './updatepgcomponent/updatepgcomponent.component';
import { DisplaypropertiesComponent } from './displayproperties/displayproperties.component';


@NgModule({
  declarations: [SidenavComponent, AddpropertyComponent, ChangepasswordComponent, EditprofileComponent, ProfileComponent, UpdatepropertyComponent, DisplaypropertiesComponent,UpdatepgcomponentComponent],
  imports: [
    CommonModule,
    PartnerdashboardRoutingModule,
    TabViewModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxSpinnerModule
  ]
})
export class PartnerdashboardModule { }
