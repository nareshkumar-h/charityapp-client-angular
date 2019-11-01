import { Component, OnInit } from '@angular/core';
import { RequestorserviceService } from '../service/requestorservice.service';
import { DonorserviceService } from '../service/donorservice.service';

@Component({
  selector: 'app-listrequest',
  templateUrl: './listrequest.component.html',
  styleUrls: ['./listrequest.component.css']
})
export class ListrequestComponent implements OnInit {

  categoryId:any;
  fundNeeded:any;
  requestedBy:any;
  requestId:any;

  constructor(
    private requestor:RequestorserviceService,private donor:DonorserviceService
  ) { }
 data:any;
  ngOnInit() {
    this.listRequest();
  }
  listRequest() {
    
    this.requestor.listFundRequest().subscribe( (res) => {
      console.log(JSON.stringify(res));
      this.data=res;
      //alert('success');
    }, (err) =>{
      console.log('error=>'+JSON.stringify(err));
    });
  }
   
  

  }

