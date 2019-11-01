import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonorloginService } from 'src/app/service/donorlogin.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  isSendMail:boolean = false;
  email:string;
  constructor(
    private donorlogin:DonorloginService,private router:Router
  ) { }

  ngOnInit() {
  }

  sendMail()
  {
    
    this.donorlogin.forgetPassword(this.email).subscribe( (res) => {
      console.log("Mail send successfulley!");
      this.isSendMail = true;
    }, (err) =>{
      console.log("Mail not send");
    });
  } 
}