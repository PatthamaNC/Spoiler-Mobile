import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Videoaction } from '../models/video-action-models';
import { VideoActionService } from '../services/video-action.service';


@Component({
  selector: 'app-video-action-user02',
  templateUrl: './video-action-user02.page.html',
  styleUrls: ['./video-action-user02.page.scss'],
})
export class VideoActionUser02Page implements OnInit {
  @ViewChild('videoPlayer', {static:false}) videoplayer:ElementRef;
  videoactions: Videoaction[] = [];
  ID: any =[];

  videoaction: Videoaction = {
    videoactionID : '',
    action_name:'',
    action_category: '',
    action_details:'',
    actor:  '',
    director:  '',
    video_action:  '',
    action_img:  ''
};
  constructor(private router: Router,
    private activate: ActivatedRoute,
    private videoactionserveice:VideoActionService) 
    {this.ID = this.activate.snapshot.paramMap.get('VideoactionID'); }

  ngOnInit() {
  }
  // ดึง ID show รายละเอียดของภาพยนตร์เรื่องนั้น
  async ionViewWillEnter() {
    this.videoactionserveice.VideoActionDetail(this.ID).subscribe((response) => {
      if (response.status != 'success') {
        return; 
      }
      this.videoaction = response.videoaction;
      console.log(this.videoaction);
    });
  }
  // ตัวเล่นวิดีโอ
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
