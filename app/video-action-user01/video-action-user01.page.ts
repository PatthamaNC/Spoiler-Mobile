import { Component, OnInit } from '@angular/core';
import { Videoaction } from '../models/video-action-models';
import { VideoActionService } from '../services/video-action.service';
import { Router } from '@angular/router';
import { VideoUserService } from '../services/video-user.service';
import { Video } from '../models/video-cartoon-models';
@Component({
  selector: 'app-video-action-user01',
  templateUrl: './video-action-user01.page.html',
  styleUrls: ['./video-action-user01.page.scss'],
})
export class VideoActionUser01Page implements OnInit {
  videos: Video[] = [];
  video: Video = {
    videoID: '',
    video_name:'',
    video_genra: '',
    video_subtitles:'',
    actor:  '',
    director:  '',
    videocartoon:  '',
    videoimg:  '',
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
  // 
  // ionViewWillEnter(){
  //   this.videouserservice.VideoActionUser().subscribe((response) => {
  //     if(response.status != 'success'){
  //       return;
  //     }
  //   this.videoaction = response.videoaction;
  //   console.log(this.videoaction);
  //   });
  // }
  ionViewWillEnter(){
    this.videouserservice.VideoCartoonUser().subscribe((response) => {
      if(response.status != 'success'){
        return;
      }
    this.video = response.video;
    console.log(this.video);
    });

    
      this.videouserservice.VideoActionUser().subscribe((response) => {
      if(response.status != 'success'){
        return;
      }
    this.videoaction = response.videoaction;
    console.log(this.videoaction);
    });
    // this.videouserservice.VideoActionUser().subscribe((response) => {
    //   if(response.status != 'success'){
    //     return;
    //   }
    // this.videoaction = response.videoaction;
    // console.log(this.videoaction);
    // });
  }

}
