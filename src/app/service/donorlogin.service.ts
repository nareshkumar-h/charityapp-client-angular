import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonorloginService {

  constructor
  (
    private http:HttpClient
  ) { }

  apiUrl='https://userapp-v1.herokuapp.com';
  //apiUrl= 'http://localhost:9000';
  
  donorLogin(formData:any):any
  {
    return this.http.post(this.apiUrl+'/user/login',formData);
  }

  donorregister(formData:any):any
  {
    return this.http.post(this.apiUrl+'/user/register',formData);
  }

  forgetPassword(email:string):any
  {
    return this.http.get(this.apiUrl+'/user/forgotpassword?email='+email);
  }
 }






