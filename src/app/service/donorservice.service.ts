import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonorserviceService {

  constructor(
    private http:HttpClient
    ) { }
    apiUrl='http://localhost:9001/';
 
addcontribute(formData:any):any
 {
   console.log(formData);
   return this.http.post(this.apiUrl+'Transaction',formData);
 }
 listtransaction():any
 {
  return this.http.get(this.apiUrl+'Transaction');
 }
 
}

