// import {Injectable} from '@angular/core';
// @Injectable(
//   {
//     providedIn:'root'

//   }
// )
export class UserData{

   userId:number;
   userName: String ;
   userEmail:  String ;	
   userPassword: String ;
   userPhone:number ;		
   userCity:String;
   userStreet: String;
   postalCode: String;
   userFirstName: String ;
   userLastName: String ;
   userType: String;
   userReferral:String ;
   userWallet: String;
   userVerify:boolean;
getUserPassword():String{
    return this.userPassword;
}

}