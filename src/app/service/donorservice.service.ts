import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonorserviceService {

  constructor(
    private http:HttpClient
    ) { }
    apiUrl='https://charityapp-donor.herokuapp.com/';
 
addcontribute(formData:any):any
 {
   console.log(formData);
   return this.http.post(this.apiUrl+'Transaction',formData);
 }
 listtransaction():any
 {
  return this.http.get(this.apiUrl+'Transaction/AllDonation');
 }
 
 listmytransaction(userId:any):any
 {
  return this.http.get(this.apiUrl+'Transaction/MyDonation?userId=' + userId);
 }
 
 listContributionByRequest(requestId:any):any
 {
  return this.http.get(this.apiUrl+'Transaction/DonationByRequestId?requestId=' + requestId);
 }

 ContributedAmountByRequest(requestId:any):any
 {
  return this.http.get(this.apiUrl+'Transaction/TotalAmountById?requestId=' + requestId);
 }
}

