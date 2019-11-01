import { Component, OnInit } from '@angular/core';
import { DonorloginService } from 'src/app/service/donorlogin.service';
import{ Router} from '@angular/router';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  [x: string]: any;
  email:any;
  password:any;

  constructor(
    private donorlogin:DonorloginService,private router:Router
  ) { }

  ngOnInit() {
  }
  login()
  {
    let formData :any= {
      'email':this.email,
      'password':this.password
    };
    
/*
    var user = { "id" : 1 , "name":"Pradeepa"};
       localStorage.setItem("LOGGED_IN_USER", JSON.stringify(user));
       console.log(user);
       this.router.navigate(['listrequest']);
*/
  
    this.donorlogin.donorLogin(formData).subscribe( (res) => {
      console.log(JSON.stringify(res));
      localStorage.setItem("LOGGED_IN_USER", JSON.stringify(res));
console.log("LOGGED_IN_USER");
this.router.navigate(['listrequest']);
      alert('success');
    }, (err) =>{
      console.log('error=>'+JSON.stringify(err));
      alert(err.error.message);
    });
  
  }
}
