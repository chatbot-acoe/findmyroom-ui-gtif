import { environment } from '../environments/environment';

//const baseurl='https://javafindmyroomapi.azurewebsites.net/dev/';
//const baseurl='https://java-findmyroom-api-qa.azurewebsites.net/dev/';
// const baseurl='http://localhost:8070/';
 // Change the ng build --prod configuration. Automatically it will shift to localhost
 const baseurl = environment.baseUrl;
 
export const Url={

    flatDetails:baseurl+'Flat/flatdetails/',
    flatDetailsbyid:baseurl+'Flat/flatdetailsById/',
    pgDetails:baseurl+'pg/pgdetails/',
    usersignup:baseurl+'users/signup',
    userlogin:baseurl+'users/login',
    getuserDetails:baseurl+'userDashboard/getUserDetails/',
    updatepassword:baseurl+'userDashboard/updatePassword/',
    editProfile:baseurl+'userDashboard/updateUserDetails/',
    forgotPassword:baseurl+'sendmail',
    addPg:baseurl+'pg/register/',
    addFlats:baseurl+'Flat/addflat/',
    getPartnerFlats:baseurl+'Flat/partnerFlats/',
    deleteFlat:baseurl+'Flat/deleteFlat/',
    deletePg:baseurl+'pg/delete/',
    getPartnerPgs:baseurl+'pg/get/',
    updatePgs:baseurl+'pg/update/',
    updateFlat:baseurl+'Flat/updateFlat/',
    getPartnerDetails:baseurl+'adminDashboard/getPartnerDetails',
    refermail : baseurl + 'refer/',
    getpgrentdetails : baseurl + 'refer/pg/',
    getflatbuydetails : baseurl+'refer/flat/',
    buyflat : baseurl+'FlatBuy/flat/',
    buypg : baseurl+'PGRent/pgrent/',
    deletepartner: baseurl+'adminDashboard/deletePartner/',
    verifypartner: baseurl+'adminDashboard/verifyPartner/'
}
