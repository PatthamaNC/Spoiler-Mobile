import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { videoromantic } from '../models/video-romantic-models';
import { VideoRomanticService } from '../services/video-romantic.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-video-romantic-user02',
  templateUrl: './video-romantic-user02.page.html',
  styleUrls: ['./video-romantic-user02.page.scss'],
})
export class VideoRomanticUser02Page implements OnInit {
  @ViewChild('videoPlayer', {static:false}) videoplayer:ElementRef;
  videoromantics : videoromantic[] = [];
  ID: any =[];

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
constructor(private activate: ActivatedRoute,
  private router:Router,
  private VideoRomanticService:VideoRomanticService) 
  { this.ID = this.activate.snapshot.paramMap.get('VideoromanticID');}

  ngOnInit() {
  }
  async ionViewWillEnter() {
    this.VideoRomanticService.VideoRomanticDetail(this.ID).subscribe((response) => {
      if (response.status != 'success') {
        return; 
      }
      this.videoromantic = response.videoromantic;
      console.log(this.videoromantic);
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
