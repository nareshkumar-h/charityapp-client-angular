import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewRequestorVideoServiceService {

  constructor(private http:HttpClient) { }
  apiUrl='https://charityapp-content-ms.herokuapp.com/'

  
  viewViedoList(requestedId)
  {
    
    return this.http.get(this.apiUrl+'RequestorVideo?requestedId='+ requestedId);
  }
}
