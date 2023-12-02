import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from '../services/comment.service';
import { ActivatedRoute } from '@angular/router';
import { SpoilerServiceService } from '../services/spoiler-service.service';
import { Spoiler } from '../models/movie-models';
import { Member } from '../models/member-models';
import { Comment } from '../models/comment-models';
import { MemberServiceService } from '../services/member-service.service';
import { MySpoiler } from '../models/myspoiler-detail-modela';
import { Storage } from '@ionic/storage-angular';
import { ReportSpoilerService } from '../services/report-spoiler.service';
import { reportspoiler } from '../models/report_poiler-models';
@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.page.html',
  styleUrls: ['./search-detail.page.scss'],
})
export class SearchDetailPage implements OnInit {
  MovieID : any;
  // comments : Comment[] = [];
  commentMessage: string = '';

  commentID:any;
  Comment:any;
  comments: Comment[] = [];
  comment: Comment = {
    commentID: 0 ,
    member_id: 0,
    movie_id: 0,
    message:'',
};

  spoilers: Spoiler[] = [];
  id: any;
  Myspoilers: MySpoiler[] = [];

  reportspoilerID : any ;
  reportspoiler : any ;
  reportspoilers: reportspoiler[] = [];
  reportReason: string = '';

  spoiler: Spoiler = {
    spoilerID: '',
    spoiler_name:'',
    spoiler_category: '',
    spoiler_details:'',
    spoiler_img:  '',
    actor:'', 
    director:'',
    member_id: 0,
    username:'',
    profile_pic:'',
};

members : Member[] = [] ;
member: Member = {
  id: 0,
  username: '',
  fname: '',
  lname: '',
  email: '',
  password: '',
  profile_pic: '',
}

  constructor(private router: Router,
    private CommentService :CommentService,
    private activate: ActivatedRoute,
    private spoilerServiceService:SpoilerServiceService,
    private memberserviceservice:MemberServiceService,
    private storage : Storage,
    private ReportSpoilerService:ReportSpoilerService) 
    {this.MovieID = this.activate.snapshot.paramMap.get('MovieID');
    this.reportspoiler = this.activate.snapshot.paramMap.get('reportspoilerID'); }

    async ngOnInit() {
      await this.storage.create();
    }

    async ionViewWillEnter() {
    this.spoilerServiceService.MyMoviesDetail(this.MovieID).subscribe((response) => {
      if (response.status != 'success') {
        return;
      }
      this.spoiler = response.spoiler;
      console.log(this.spoilers);
    });
    this.member = await this.storage.get('loginProfile');
    this.loadComents();
    
  }
 
  
  loadSpoiler() {
    this.spoilerServiceService
      .inquirySpoilerSearchDetail(this.MovieID)
      .subscribe((response) => {
        if (response.status != 'success') {
          return;
        }

        this.Myspoilers = response.Myspoilers;
        console.log(this.Myspoilers);
      });
  }

    // ความคิดเห็นทั้งหมด
    loadComents() {
      this.CommentService
        .inquiryCommentSpoiler(this.MovieID)
        .subscribe((response) => {
          if (response.status != 'success') {
            return;
          }
  
          this.comments = response.comments;
          console.log('value of this.comments');
          console.log(this.comments);
        });
    }
  
  // ส่งความคิดเห็น
    sendComment() {
      console.log('[commentMessage] => ', this.commentMessage);
      console.log('[member.id] => ', this.member.id);
      console.log('[this.MovieID] => ', this.MovieID);
  
      this.CommentService
        .createCommentSpoiler(
          this.member.id,
          this.MovieID,
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

    //รายงานภาพยนตร์
    ReportSpoilerAlert(MovieID : any){
      this.reportSpoilerId = MovieID;
      this.OpentReportSpoilerAlert = true;
    }

    setOpentReportSpoilerAlert(isOpent : boolean){
      this.OpentReportSpoilerAlert = isOpent;
    }

    OpentReportSpoilerAlert = false;
     reportSpoilerId : any;
    public alertButtons = [
    {
      text: 'ยกเลิก',
      role: 'cancel',
      handler: () => {
        this.setOpentReportSpoilerAlert(false);
      },
    },
    {
      text: 'รายงาน',
      role: 'confirm',
      handler: (reason : any) => {
        // console.log(reason);
        this.sendReportSpoiler(reason);
      },
    },
  ];
    public alertInputsS = [
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
        label: 'เนื้อหาแสดงความเกลียดชังหรือการล่วงละเมิด',
        type: 'radio',
        value: 'เนื้อหาแสดงความเกลียดชังหรือการล่วงละเมิด',
      },
    ];
// ลงตารางdatabast
    ReportSpoiler() {
      this.ReportSpoilerService
        .sendReportSpoiler(
          this.member.id,
          this.spoiler.spoilerID,
          this.reportReason
        )
        .subscribe((response) => {
          if (response.status != 'success') {
            // display alert
            return;
          }
        });
    }

  //  รายงานภาพยนตร์ แบบเขียน
    sendReportSpoiler(season:string){
      console.log('spoiler_id : ', this.reportSpoilerId);
      console.log('member_id : ', this.member.id);
      console.log('season : ', season);

      this.ReportSpoilerService
      .sendReportSpoiler(
        this.member.id,
        this.reportSpoilerId,
        season)
        .subscribe((Response) =>{
        if (Response.status != 'success'){
          return;
        }
        this.resetCommentForm();
        this.loadComents();
      })
    }
    
    //รายงานความคิดเห็น Alert
  ReportSpoilerAlertComment(MySpoilerDetail : any){
    this.commentId = MySpoilerDetail;
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
        this.sendReportComment(reason);
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
    ReportSpoilerComment() {
      this.ReportSpoilerService
        .sendReportComment(
          this.member.id,
          this.comment.commentID,
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
    sendReportComment(season:string){
      console.log('season : ', season);
      console.log('comment_id : ', this.commentId);
      console.log('member_id : ', this.member.id);

      this.ReportSpoilerService
      .sendReportComment(
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
