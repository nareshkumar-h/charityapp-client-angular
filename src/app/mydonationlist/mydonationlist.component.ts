import { Component, OnInit } from '@angular/core';
import { DonorserviceService } from '../service/donorservice.service';

@Component({
  selector: 'app-mydonationlist',
  templateUrl: './mydonationlist.component.html',
  styleUrls: ['./mydonationlist.component.css']
})
export class MydonationlistComponent implements OnInit {

  userId:any;
  constructor
  ( private donor:DonorserviceService) { }
  data:any;
  ngOnInit()
  {
    this.listmydonation();
  }
  listmydonation(){
    let user = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
   

    let userId = user.id;
  
    //alert('enter');
        this.donor.listmytransaction(userId).subscribe( (res) => {
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

