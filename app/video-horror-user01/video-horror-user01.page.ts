import { Component, OnInit } from '@angular/core';
import { videohorror } from '../models/video-horror-models';
import { VideoUserService } from '../services/video-user.service';

@Component({
  selector: 'app-video-horror-user01',
  templateUrl: './video-horror-user01.page.html',
  styleUrls: ['./video-horror-user01.page.scss'],
})
export class VideoHorrorUser01Page implements OnInit {
  videohorrors : videohorror[] = [];
  videohorror: videohorror = {
    videohorrorID  : '',
    horror_name:'',
    horror_category: '',
    horror_details:'',
    actor:  '',
    director:  '',
    video_horror:  '',
    horror_img:  '',
};

  constructor(private videouserservice:VideoUserService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.videouserservice.VideoHorrorUser().subscribe((response) => {
      if(response.status != 'success'){
        return;
      }
    this.videohorror = response.videohorror;
    console.log(this.videohorror);
    });
  }
}
