import { Component, OnInit } from '@angular/core';
import { DonorserviceService } from 'src/app/service/donorservice.service';

@Component({
  selector: 'app-donorcontribute',
  templateUrl: './donorcontribute.component.html',
  styleUrls: ['./donorcontribute.component.css']
})
export class DonorcontributeComponent implements OnInit {
  
  requestId:any;
  userId:any;
  amount:any;
    
  constructor(
      private donor:DonorserviceService
    ) { }
  
    ngOnInit() {
    }
    addContribute()
    {
      let formData :any= {
        
   'requestId':this.requestId,
   'userId':this.userId,
   'amount':this.amount
      
  };
      this.donor.addcontribute(formData).subscribe( (res) => {
        console.log(JSON.stringify(res));
        alert('success');
      }, (err) =>{
        console.log('error=>'+JSON.stringify(err));
      });
    }
 
}
