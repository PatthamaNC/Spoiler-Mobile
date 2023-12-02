import { Component, OnInit } from '@angular/core';
import { Video } from '../models/videos-models';
import { VideoCartoonServiceser } from '../services/video-cartoon.service'; 
import { Router } from '@angular/router';
import { SpoilerServiceService } from '../services/spoiler-service.service';
import { VideoUserService } from '../services/video-user.service';
@Component({
  selector: 'app-video-cartoon001',
  templateUrl: './video-cartoon001.page.html',
  styleUrls: ['./video-cartoon001.page.scss'],
})
export class VideoCartoon001Page implements OnInit {
  videos: Video[] = [];
  video: Video = {
    videosID: '',
    name:'',
    category: '',
    details:'',
    actor:'', 
    director:'',
    videos:'',
    img:  '',
  };



  constructor(private videouserservice:VideoUserService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.videouserservice.VideoCartoon().subscribe((response) => {
      if(response.status != 'success'){
        return;
      }
    this.videos = response.videos;
    console.log(this.videos);
    });
  }
  
  
}
