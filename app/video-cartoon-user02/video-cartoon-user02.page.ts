import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';
import { Video } from '../models/video-cartoon-models';
import { VideoCartoonServiceser } from '../services/video-cartoon.service';
import {  Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-video-cartoon-user02',
  templateUrl: './video-cartoon-user02.page.html',
  styleUrls: ['./video-cartoon-user02.page.scss'],
})
export class VideoCartoonUser02Page implements OnInit {
  @ViewChild('videoPlayer', {static:false}) videoplayer:ElementRef;
  videos: Video[] = [];
  id: any =[];

  video : Video = {
    videoID: '',
    video_name: '',
    video_genra: '',
    video_subtitles: '',
    actor: '',
    director: '',
    videocartoon: '',
    videoimg: ''
  };
  constructor(private router: Router,
    private VideoCartoonService: VideoCartoonServiceser,
    private activate: ActivatedRoute,
  ) { this.id = this.activate.snapshot.paramMap.get('VideoID'); }

  ngOnInit() { }
  async ionViewWillEnter() {
    this.VideoCartoonService.VideoCartoonDetail(this.id).subscribe((response) => {
      if (response.status != 'success') {
        return;
      }
      this.video = response.video;
      console.log(this.video);
    });
  }

  toggleVideo(){
    if (this.videoplayer.nativeElement.paused){
      this.videoplayer.nativeElement.play();
    }else{
      this.videoplayer.nativeElement.pause();
    }
  }

  public alertButtons = [
    {
      text: 'ยกเลิก',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'สมัครสมาชิก',
      cssClass: 'alert-button-confirm',
      handler: ()=>{
            console.log("สมัครสมาชิก");
            this.router.navigate(['/register-member'])
            }
    },
  ];
}
