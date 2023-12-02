import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { videohorror } from '../models/video-horror-models';
import { VideoHorrorService } from '../services/video-horror.service';

@Component({
  selector: 'app-video-horror-user02',
  templateUrl: './video-horror-user02.page.html',
  styleUrls: ['./video-horror-user02.page.scss'],
})
export class VideoHorrorUser02Page implements OnInit {
  @ViewChild('videoPlayer', {static:false}) videoplayer:ElementRef;
  videohorrors: videohorror[] = [];
  ID: any =[];

  videohorror: videohorror = {
    videohorrorID :  '',
    horror_name:  '',
    horror_category:  '',
    horror_details:  '',
    actor:  '',
    director:  '',
    video_horror:  '',
    horror_img:  '',
};
  constructor(private activate: ActivatedRoute,
    private router:Router,
    private VideoHorrorService:VideoHorrorService) 
    {this.ID = this.activate.snapshot.paramMap.get('VideohorrorID'); }

  ngOnInit() {
  }
  // VideoHorrorDetail
  async ionViewWillEnter() {
    this.VideoHorrorService.VideoHorrorDetail(this.ID).subscribe((response) => {
      if (response.status != 'success') {
        return; 
      }
      this.videohorror = response.videohorror;
      console.log(this.videohorror);
    });
  }

    // เล่นวิดีโอ
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
