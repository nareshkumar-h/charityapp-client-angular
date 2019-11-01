import { Component, OnInit } from '@angular/core';
import { DonorserviceService } from '../service/donorservice.service';

@Component({
  selector: 'app-donortransaction',
  templateUrl: './donortransaction.component.html',
  styleUrls: ['./donortransaction.component.css']
})
export class DonortransactionComponent implements OnInit {
  
  constructor
  ( private donor:DonorserviceService) { }
  data:any;
  ngOnInit()
  {
    this.listTransaction();
  }
  listTransaction()
  {
    //alert('enter');
        this.donor.listtransaction().subscribe( (res) => {
          console.log(JSON.stringify(res));
          this.data=res;
      //    alert('data'+res);
        // alert('success');
        }, (err) =>{
          console.log('error=>'+JSON.stringify(err));
          alert(err.error.message);
        });
      }
}
