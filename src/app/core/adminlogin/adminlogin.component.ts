import { Component, OnInit } from '@angular/core';
import { DonorloginService } from 'src/app/service/donorlogin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  email:any;
  password:any;

  constructor(
    private donorlogin:DonorloginService
  ) { }

  ngOnInit() {
  }
  login()
  {
    let formData :any= {
      'email':this.email,
      'password':this.password
    };
    
    this.donorlogin.donorLogin(formData).subscribe( (res) => {
      console.log(JSON.stringify(res));
      alert('success');
    }, (err) =>{
      console.log('error=>'+JSON.stringify(err));
    });
  }

}
