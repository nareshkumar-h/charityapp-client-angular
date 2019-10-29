import { Component, OnInit } from '@angular/core';
import { DonorserviceService } from 'src/app/service/donorservice.service';
import{ Router} from '@angular/router';

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
      private donor:DonorserviceService,private router:Router
    ) { }
  
    ngOnInit() {
    }
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
