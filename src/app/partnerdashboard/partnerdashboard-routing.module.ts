import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from "src/app/partnerdashboard/sidenav/sidenav.component";
import { ProfileComponent } from "src/app/partnerdashboard/profile/profile.component";
import { EditprofileComponent } from "src/app/partnerdashboard/editprofile/editprofile.component";
import { ChangepasswordComponent } from "src/app/partnerdashboard/changepassword/changepassword.component";
import { UpdatepropertyComponent } from "src/app/partnerdashboard/updateproperty/updateproperty.component";
import { AddpropertyComponent } from "src/app/partnerdashboard/addproperty/addproperty.component";
import { UpdatepgcomponentComponent } from "src/app/partnerdashboard/updatepgcomponent/updatepgcomponent.component";
import { DisplaypropertiesComponent } from "src/app/partnerdashboard/displayproperties/displayproperties.component";


const routes: Routes = [
  {path:'',component:SidenavComponent,
  children:[
    {path:'',component:ProfileComponent},
    {path:'editprofile',component:EditprofileComponent},
    {path:'changepassword',component:ChangepasswordComponent},
    {path:'updateproperty',component:UpdatepropertyComponent},
    {path:'updatepgproperty',component:UpdatepgcomponentComponent},
    {path:'addproperty',component:AddpropertyComponent},
    {path:'editproperty',component:DisplaypropertiesComponent}
  ]}
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerdashboardRoutingModule { }
