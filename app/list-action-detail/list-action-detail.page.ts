import { Component, OnInit } from '@angular/core';
import { Listspoiler } from '../models/list-spoiler-models';
import { SpoilerServiceService } from '../services/spoiler-service.service';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Member } from '../models/member-models';
import { ReportSpoilerService } from '../services/report-spoiler.service';
import { Comment } from '../models/comment-models';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-list-action-detail',
  templateUrl: './list-action-detail.page.html',
  styleUrls: ['./list-action-detail.page.scss'],
})
export class ListActionDetailPage implements OnInit {
 
  ListSpoilerID:any;
  ID: any;
  listspoilers: Listspoiler[] = [];
  listspoiler: Listspoiler = {
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

reportReason: string = '';


  constructor(private SpoilerServiceService:SpoilerServiceService,
              private activate:ActivatedRoute,
              private storage: Storage,
              private ReportSpoilerService:ReportSpoilerService,
              private commentservice:CommentService) 
  {this.ID = this.activate.snapshot.paramMap.get('ListSpoilerID'); }

  async ngOnInit() {
    await this.storage.create();
  }
 async ionViewWillEnter(){
    console.log(this.ID);
    this.SpoilerServiceService.ListSpoilerDetail(this.ID).subscribe((Response) =>{
      if (Response.status != 'success'){
        return;
      }
      this.listspoiler = Response.listspoiler;
      console.log(this.listspoilers);
      });
      this.member = await this.storage.get('loginProfile');
      this.loadComents();
  }
  // loadSpoiler() {
  //   this.SpoilerServiceService
  //     .inquirySpoilerSearchDetail(this.ID)
  //     .subscribe((response) => {
  //       if (response.status != 'success') {
  //         return;
  //       }

  //       this.listspoilers = response.Myspoilers;
  //       console.log(this.listspoilers);
  //     });
  // }


    // ความคิดเห็นทั้งหมด
    loadComents() {
      this.commentservice
        .inquiryCommentSpoiler(this.ID)
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
        console.log('[this.ListSpoilerID] => ', this.ID);
    
        this.commentservice
          .createCommentSpoiler(
            this.member.id,
            this.ID,
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
            // this.resetCommentForm();
            this.loadComents();
          });
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
          this.listspoiler.spoilerID,
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
}
