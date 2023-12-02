import { Component, OnInit } from '@angular/core';
import { Video } from '../models/videos-models';
import { VideoUserService } from '../services/video-user.service';

@Component({
  selector: 'app-video-romantic01',
  templateUrl: './video-romantic01.page.html',
  styleUrls: ['./video-romantic01.page.scss'],
})
export class VideoRomantic01Page implements OnInit {

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

  ngOnInit() { }

  ionViewWillEnter() {

    this.videouserservice.VideoRomantic().subscribe((response) => {
      if (response.status != 'success') {
        return;
      }
      this.videos = response.videos;
      console.log(this.videos);
    });
  }
}
