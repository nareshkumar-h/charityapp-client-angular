import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestorserviceService } from 'src/app/service/requestorservice.service';
import { DonorserviceService } from 'src/app/service/donorservice.service';

@Component({
  selector: 'app-list-request-contribution',
  templateUrl: './list-request-contribution.component.html',
  styleUrls: ['./list-request-contribution.component.css']
})
export class ListRequestContributionComponent implements OnInit {
  
  requestId:any;

  
constructor(private requestor:RequestorserviceService,private route: ActivatedRoute,  
  private router: Router,private donor:DonorserviceService) {
    this.route.params.subscribe ( params => {
      console.log(params['id']);
      this.requestId = params['id'];
    });
  }
  ngOnInit() {
    this.viewRequest(this.requestId);
    this.listDonorByRequest(this.requestId);
    
    this.viewAmountByRequest(this.requestId);
  }
  donationlist:any;

  listDonorByRequest(requestId){
    console.log(requestId);
    this.donor.listContributionByRequest(requestId).subscribe ( (res) =>{
      console.log(JSON.stringify(res));
      this.donationlist = res;
    });
  }

  request:any;

  viewRequest(requestId){
    console.log(requestId);
    this.requestor.findOne(requestId).subscribe ( (res) =>{
      console.log(res);
      this.request = res;
    });
  }

  amount:any;

  viewAmountByRequest(requestId){
    console.log(requestId);
    this.donor.ContributedAmountByRequest(requestId).subscribe ( (res) =>{
      console.log(res);
      console.log(JSON.stringify(res));
      this.amount = res;
    });
  }

  getPercentage(requestedAmount, amountfunded) {
    return Math.floor( 100*(amountfunded/requestedAmount));
  }
  
}