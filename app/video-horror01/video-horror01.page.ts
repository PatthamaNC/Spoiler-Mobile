import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from '../models/videos-models';
import { VideoUserService } from '../services/video-user.service';

@Component({
  selector: 'app-video-horror01',
  templateUrl: './video-horror01.page.html',
  styleUrls: ['./video-horror01.page.scss'],
})
export class VideoHorror01Page implements OnInit {
  videos: Video[] = [];
  video: Video = {
    videosID: '',
    name: '',
    category: '',
    details: '',
    actor: '',
    director: '',
    videos: '',
    img: '',
  };

  constructor(private videouserservice: VideoUserService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.videouserservice.VideoHorror().subscribe((response) => {
      if (response.status != 'success') {
        return;
      }
      this.videos = response.videos;
      console.log(this.videos);
    });
  }
  }

