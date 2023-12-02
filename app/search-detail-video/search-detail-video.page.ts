import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from '../models/videos-models';
import { ActivatedRoute } from '@angular/router';
import { MyMoviesService } from '../services/search-videos-detail.service';
import { ReportVideoService } from '../services/report-video.service';
import { Reportvideo } from '../models/report-video-models';
import { Member } from '../models/member-models';
import { Storage } from '@ionic/storage-angular';
import { Videoaction } from '../models/video-action-models';
// Comment
import { CommentService } from '../services/comment.service';
import { CommentVideo } from '../models/comment-models';
// report Comment
import { ReportSpoilerService } from '../services/report-spoiler.service';

@Component({
  selector: 'app-search-detail-video',
  templateUrl: './search-detail-video.page.html',
  styleUrls: ['./search-detail-video.page.scss'],
})
export class SearchDetailVideoPage implements OnInit {
  @ViewChild('videoPlayer', { static: false }) videoplayer: ElementRef;
  ID: any = [];

  VideosID: any;
  reportVDOId: any;

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
  reportvideos: Reportvideo[] = [];
  reportvideo: Reportvideo = {
    reportvideoID: '',
    member_id: 0,
    video_id: '',
    reason: '',
    status: ''
  };
  members: Member[] = [];
  member: Member = {
    id: 0,
    username: '',
    fname: '',
    lname: '',
    email: '',
    password: '',
    profile_pic: '',
  };
    // Comment
    commentMessage: string = '';
    // VideosID:any;
    commentID:any;
    commentVideos: CommentVideo[] = [];
    commentVideo: CommentVideo = {
      commentID: 0 ,
      member_id: 0,
      video_id: 0,
      message:'',
  };
  reportReason: string = '';

  constructor(private activate: ActivatedRoute,
    private MyMoviesService: MyMoviesService,
    private reportvideoservice: ReportVideoService,
    private storage: Storage,
    private CommentService:CommentService,
    private ReportSpoilerService:ReportSpoilerService)
     { this.VideosID = this.activate.snapshot.paramMap.get('VideosREID'); }

  async ngOnInit() {
    await this.storage.create();
  }

  async ionViewWillEnter() {
    this.MyMoviesService.VideoVideoDetail(this.VideosID).subscribe((response) => {
      if (response.status != 'success') {
        return;
      }
      this.video = response.video;
      console.log(this.videos);
    });
    this.member = await this.storage.get('loginProfile');
  }

  toggleVideo() {
    if (this.videoplayer.nativeElement.paused) {
      this.videoplayer.nativeElement.play();
    } else {
      this.videoplayer.nativeElement.pause();
    }
  }

  //รายงานวิดีโอ
  ReportVDOAlert(VideosID: any) {
    this.reportVDOId = VideosID;
    this.OpentReportVDOAlert = true;
  }

  setOpentReportVDOAlert(isOpent: boolean) {
    this.OpentReportVDOAlert = isOpent;
  }

  OpentReportVDOAlert = false;
  public alertButtons = [
    {
      text: 'ยกเลิก',
      role: 'cancel',
      handler: () => {
        this.setOpentReportVDOAlert(false);
      },
    },
    {
      text: 'รายงาน',
      role: 'confirm',
      handler: (reason: any) => {
        // console.log(reason);
        this.sendReportVideo(reason);
      },
    },
  ];
  public alertInputsS = [
    {
      label: 'ใช้คำไม่สุภาพ',
      type: 'radio',
      value: 'ใช้คำไม่สุภาพ',
      checked: true,
    },
    {
      label: 'ประเด็นทางกฎหมาย',
      type: 'radio',
      value: 'ประเด็นทางกฎหมาย',
    },
    {
      label: 'ให้ข้อมูลไม่ถูกต้อง',
      type: 'radio',
      value: 'ให้ข้อมูลไม่ถูกต้อง',
    },
  ];
  ReportVideo() {
    this.reportvideoservice
      .sendReportVideo(
        this.member.id,
        this.video.videosID,
        this.reportReason
      )
      .subscribe((response) => {
        if (response.status != 'success') {
          return;
        }
      });
  }

  //  รายงานภาพยนตร์ แบบVDO
  sendReportVideo(season: string) {
    // console.log('>>>>> Click');
    console.log('member_id : ', this.member.id);
    console.log('video_id : ', this.reportVDOId);
    console.log('season : ', season);

    this.reportvideoservice
      .sendReportVideo(
        this.member.id,
        this.reportVDOId,
        season)
      .subscribe((Response) => {
        if (Response.status != 'success') {
          return;
        }

      })
    }

     // ความคิดเห็นทั้งหมด
  loadComents() {
    this.CommentService
      .inquiryCommentVideo(this.VideosID)
      .subscribe((response) => {
        if (response.status != 'success') {
          return;
        }

        this.commentVideos = response.commentVideos;
        console.log('value of this.commentVideos');
        console.log(this.commentVideos);
      });
  }
    // ส่งความคิดเห็น
    sendComment() {
      console.log('[commentMessage] => ', this.commentMessage);
      console.log('[member.id] => ', this.member.id);
      console.log('[this.VideosID] => ', this.VideosID);
  
      this.CommentService
        .createCommentVideo(
          this.member.id,
          this.VideosID,
          this.commentMessage
        )
        .subscribe((response) => {
          if (response.status != 'success') {
            // display alert
            return;
          }
  
          this.resetCommentForm();
          this.loadComents();
        });
    }
    resetCommentForm() {
      this.commentMessage = '';
    }

        //รายงานความคิดเห็น Alert
  ReportSpoilerAlertComment(id : any){
    this.commentId = id;
    this.OpentReportSpoilerAlertComment = true;
  }
  // set ค่าตัวแปร Opent ตามค่าที่ส่งมา
  setOpentReportSpoilerAlertComment(isOpent : boolean){
    this.OpentReportSpoilerAlertComment = isOpent;
  }
  OpentReportSpoilerAlertComment = false;
  commentId : any;
    public alertButtonsS = [
    {
      text: 'ปิดหน้าต่างนี้',
      role: 'cancel',
      handler: () => {
        this.setOpentReportSpoilerAlertComment(false);
      },
    },
    {
      text: 'รายงาน',
      role: 'confirm',
      handler: (reason : any) => {
        // console.log(reason);
        // console.log('>>>>Click');
        this.sendReportCommentVideo(reason);
      },
    },
  ];
    public alertInputsSS = [
      {
        label: 'ใช้คำไม่สุภาพ',
        type: 'radio',
        value: 'ใช้คำไม่สุภาพ',
        checked:true,
      },
      {
        label: 'ประเด็นทางกฎหมาย',
        type: 'radio',
        value: 'ประเด็นทางกฎหมาย',
      },
      {
        label: 'เนื้อหากลั่นแกล้ง',
        type: 'radio',
        value: 'เนื้อหากลั่นแกล้ง',
      },
    ];
    ReportSpoilerVideo() {
      this.ReportSpoilerService
        .sendReportCommentVideo(
          this.member.id,
          this.commentVideo.commentID,
          this.reportReason
          
        )
        .subscribe((response) => {
          if (response.status != 'success') {
            // display alert
            return;
          }
        });
    }
    // กดรายงานความคิดเห็น
    sendReportCommentVideo(season:string){
      console.log('season : ', season);
      console.log('comember_id : ', this.commentId);
      console.log('member_id : ', this.member.id);

      this.ReportSpoilerService
      .sendReportCommentVideo(
        this.member.id,
        this.commentId,
        season)
        .subscribe((Response) =>{
          if (Response.status != 'success'){
            return;
          }
          this.resetCommentForm();
          this.loadComents();
        });
    }
}

