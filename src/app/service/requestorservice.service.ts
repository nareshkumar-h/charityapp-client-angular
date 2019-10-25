import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestorserviceService {

  constructor
  (
    private http:HttpClient
  ) { }

 // apiUrl= 'https://charityapp-requestor-service.herokuapp.com';
 apiUrl= 'http://localhost:9003';


  listFundRequest(formData:any):any
 {
   return this.http.get(this.apiUrl+'/fundrequest/listCurrentRequest',formData);
 }
}
