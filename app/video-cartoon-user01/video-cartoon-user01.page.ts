import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoCartoonServiceser } from '../services/video-cartoon.service';
import { VideoUserService } from '../services/video-user.service';
import { Video } from '../models/video-cartoon-models';
@Component({
  selector: 'app-video-cartoon-user01',
  templateUrl: './video-cartoon-user01.page.html',
  styleUrls: ['./video-cartoon-user01.page.scss'],
})
export class VideoCartoonUser01Page implements OnInit {
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
  constructor(private router: Router,
              private videouserservice:VideoUserService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.videouserservice.VideoCartoonUser().subscribe((response) => {
      if(response.status != 'success'){
        return;
      }
    this.video = response.video;
    console.log(this.video);
    });
  }
}
