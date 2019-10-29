import { Component, OnInit } from '@angular/core';
import { DonorloginService } from 'src/app/service/donorlogin.service';
import{ Router} from '@angular/router';
@Component({
  selector: 'app-donorregister',
  templateUrl: './donorregister.component.html',
  styleUrls: ['./donorregister.component.css']
})
export class DonorregisterComponent implements OnInit {
  name:any;
  email:any;
  password:any;


  constructor( private donorlogin:DonorloginService,private router:Router) { }

  ngOnInit() {
  }
  register()
  {
    let formData :any= {
      'name':this.name,
      'email':this.email,
      'password':this.password
    };
    

  
    this.donorlogin.donorregister(formData).subscribe( (res) => {
      console.log(JSON.stringify(res));
this.router.navigate(['adminlogin']);
      alert('successfully registered');
    }, (err) =>{
      console.log('error=>'+JSON.stringify(err));
      alert('meassage'+err.error.message);
    });
  
  }
}