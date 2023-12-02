import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Video } from '../models/videos-models';
import { VideoUserService } from '../services/video-user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-action02',
  templateUrl: './video-action02.page.html',
  styleUrls: ['./video-action02.page.scss'],
})
export class VideoAction02Page implements OnInit {
  @ViewChild('videoPlayer', {static:false}) videoplayer:ElementRef;
  id: any;

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
 
  constructor(private videouserservice:VideoUserService ,
    private activate: ActivatedRoute)
    { this.id = this.activate.snapshot.paramMap.get('VideosID');}

  ngOnInit() {}
  async ionViewWillEnter(){
    console.log(this.id);
    this.videouserservice.VideosDetail(this.id).subscribe((Response) =>{
      if (Response.status != 'success'){
        return;
      }
      this.video= Response.video;
      console.log(this.videos);
      });
  }
  toggleVideo(){
    if (this.videoplayer.nativeElement.paused){
      this.videoplayer.nativeElement.play();
    }else{
      this.videoplayer.nativeElement.pause();
    }
  }
}
