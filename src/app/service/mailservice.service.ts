import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailserviceService {

  constructor
  (private http:HttpClient) 
  { }

apiUrl='https://charity-notification.herokuapp.com/';


donorContributeMail(formData:any):any
{
  return this.http.post(this.apiUrl+'/mail/donationmail',formData);
}

}