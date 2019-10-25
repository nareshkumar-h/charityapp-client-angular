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

  apiUrl='https://charityapp-user-service.herokuapp.com';
  //apiUrl= 'http://localhost:9000';
  
  donorLogin(formData:any):any
  {
    return this.http.post(this.apiUrl+'/donor/login',formData);
  }
 }






