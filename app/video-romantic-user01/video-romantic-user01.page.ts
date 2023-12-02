import { Component, OnInit } from '@angular/core';
import { videoromantic } from '../models/video-romantic-models';
import { VideoUserService } from '../services/video-user.service';
import { VideoRomanticService } from '../services/video-romantic.service';
import { Router } from '@angular/router';
import { Videoaction } from '../models/video-action-models';

@Component({
  selector: 'app-video-romantic-user01',
  templateUrl: './video-romantic-user01.page.html',
  styleUrls: ['./video-romantic-user01.page.scss'],
})
export class VideoRomanticUser01Page implements OnInit {
  videoromantics: videoromantic[] = [];
  videoromantic: videoromantic = {
    videoromanticID: '',
    romantic_name:'',
    romantic_category: '',
    romantic_details:'',
    actor:  '',
    director:  '',
    video_romantic:  '',
    romantic_img:  '',
};

videoactions : Videoaction[] = [];
videoaction : Videoaction = {
  videoactionID : '',
  action_name:'',
  action_category: '',
  action_details:'',
  actor:  '',
  director:  '',
  video_action:  '',
  action_img:  '',
};
  constructor(private videouserservice:VideoUserService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.videouserservice.VideoRomanticUser().subscribe((response) => {
      if(response.status != 'success'){
        return;
      }
    this.videoromantic = response.videoromantic;
    console.log(this.videoromantic);
    });
  }
}
