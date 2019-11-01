import { Component, OnInit } from '@angular/core';
import{ Router, ActivatedRoute} from '@angular/router';
import { RequestorserviceService } from 'src/app/service/requestorservice.service';
import { DonorserviceService } from 'src/app/service/donorservice.service';


@Component({
  selector: 'app-viewrequest',
  templateUrl: './viewrequest.component.html',
  styleUrls: ['./viewrequest.component.css']
})
export class ViewrequestComponent implements OnInit {

  requestId:any;

  
constructor(private requestor:RequestorserviceService,private route: ActivatedRoute,  private router: Router,private donor:DonorserviceService) {
    this.route.params.subscribe ( params => {
      console.log(params['id']);
      this.requestId = params['id'];
    });
  }
  ngOnInit() {
    this.viewRequest(this.requestId);
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
    addContribute()
    {
      var user = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
      let formData :any= {
        
   'requestId':this.requestId,
   'userId':user.id,
   'amount':this.amount
      
  };
      this.donor.addcontribute(formData).subscribe( (res) => {
        console.log(JSON.stringify(res));
        alert('contributed successfully');
        this.router.navigate(['donortransaction']);
      }, (err) =>{
        console.log('error=>'+JSON.stringify(err));
      });
    }
 }
