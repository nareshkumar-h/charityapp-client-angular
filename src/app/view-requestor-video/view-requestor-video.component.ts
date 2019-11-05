import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewRequestorVideoServiceService } from '../service/view-requestor-video-service.service';

@Component({
  selector: 'app-view-requestor-video',
  templateUrl: './view-requestor-video.component.html',
  styleUrls: ['./view-requestor-video.component.css']
})
export class ViewRequestorVideoComponent implements OnInit {
  videoList:any;
  requestedId:number;
  constructor(
    private video:ViewRequestorVideoServiceService,private route: ActivatedRoute, private router: Router)
     {  this.route.params.subscribe ( params => {
    console.log(params['requestId']);
    this.requestedId = params['requestId']; });
  }

  ngOnInit() {
    this. viewViedo(this.requestedId);
  }

viewViedo(requestId){
  this.video.viewViedoList(requestId).subscribe( (res) => {
    console.log(JSON.stringify(res));
  
    this.videoList = res;
  }, (err) => {
    console.log(JSON.stringify(err));
  });
}
}
