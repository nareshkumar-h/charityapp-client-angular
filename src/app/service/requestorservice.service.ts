import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestorserviceService {
  listContributionByRequest(requestId: any) {
    throw new Error("Method not implemented.");
  }

  constructor
  (
    private http:HttpClient
  ) { }

 // apiUrl= 'https://charityapp-requestor-service.herokuapp.com';
 apiUrl= 'https://charity-requestor.herokuapp.com/';


  listFundRequest():any
 {
   return this.http.get(this.apiUrl+'/fundrequest/listCurrentRequest');
 }

 findOne(categoryId)
 {
   return this.http.get(this.apiUrl+'/fundrequest/'+categoryId);
 }
}
