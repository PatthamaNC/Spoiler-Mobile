import { Component, OnInit } from '@angular/core';
import { Spoiler } from '../models/movie-models';
import { Router } from '@angular/router';
import { MemberServiceService } from '../services/member-service.service';
import { SpoilerServiceService } from '../services/spoiler-service.service';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../models/member-models';
import { Storage } from '@ionic/storage-angular';
import { Comment } from '../models/comment-models';
import { CommentService } from '../services/comment.service';
import { Mymovies } from '../models/mymovies-modela';
import { Myspoilerdetail } from '../models/myspoiler-detail-modela';
import { reportcomment } from '../models/report-comment-models';
import { ReportSpoilerService } from '../services/report-spoiler.service';



@Component({
  selector: 'app-my-movies-two',
  templateUrl: './my-movies-two.page.html',
  styleUrls: ['./my-movies-two.page.scss'],
})
export class MyMoviesTwoPage implements OnInit {
  MovieID : any = [];
  ID: any =[];
  commentMessage: string = '';
  sID:any;
  commentID:any;
  // comments: Comment[] = [];
  comments: Comment[] = [];
  Comment:any;
  comment: Comment = {
    commentID: 0 ,
    member_id: 0,
    movie_id: 0,
    message:'',
};

  reportspoilerID : any ;
  repoctcommentID:any;
  reportcomment:any;
  reportcomments: reportcomment[] = [];
  reportReason: string
  

  MySpoilerDetail:any;

  spoilers: Spoiler[] = [];
  id: any;

  mymoviess: Mymovies[] = [];

  mymovie: Mymovies = {
    username : '',
    spoiler_name :'',
    spoiler_category : '',
    spoiler_details :'',
    spoiler_img : '',
    actor:'', 
    director:'',
    member_id:'',
    spoilerID:''
};

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
  myspoilerdetail: Myspoilerdetail = {
    spoilerID: '',
    spoiler_name:'',
    spoiler_category: '',
    spoiler_details:'',
    spoiler_img:  '',
    actor:'', 
    director:'',
    member_id: 0,
};
  member: Member = {
    id: 0,
    username: '',
    fname: '',
    lname: '',
    email: '',
    password: '',
    profile_pic: '',
  };


  constructor(private router: Router,
    private memberServiceService: MemberServiceService,
    private spoilerServiceService: SpoilerServiceService,
    private activate: ActivatedRoute,
    private storage: Storage,
    private CommentService :CommentService,
    private ReportSpoilerService:ReportSpoilerService
  ) {
    this.MovieID = this.activate.snapshot.paramMap.get('MySpoilerDetail');
    console.log('IDMovies = ', this.MovieID);
    this.reportcomment = this.activate.snapshot.paramMap.get('repoctcommentID');
    // ความคิดเห็น
    // this.Comment = this.activate.snapshot.paramMap.get('commentID')
    // console.log('IDComent = ', this.commentID);
  }

  async ngOnInit() { 
    await this.storage.create(); }

  async ionViewWillEnter() {
    this.member = await this.storage.get('loginProfile');

    // ดึงข้อมูลภาพยนตร์ที่ตัวเองspoiler
    this.spoilerServiceService.MySpoilerDetail(this.MovieID).subscribe((response) => {
      if (response.status != 'success') {
        return;
      }
      console.log(response);
      this.myspoilerdetail = response.myspoilerdetail;
    });
    
    this.loadComents();
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
        // console.log('value of this.comments');
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

  //รายงานความคิดเห็น Alert
  ReportSpoilerAlert(MySpoilerDetail : any){
    this.commentId = MySpoilerDetail;
    this.OpentReportSpoilerAlert = true;
  }
  // set ค่าตัวแปร Opent ตามค่าที่ส่งมา
  setOpentReportSpoilerAlert(isOpent : boolean){
    this.OpentReportSpoilerAlert = isOpent;
  }

  OpentReportSpoilerAlert = false;
  commentId : any;
    public alertButtonsComment = [
    {
      text: 'ปิดหน้าต่างนี้',
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
        this.sendReportComment(reason);
      },
    },
  ];
    public alertInputsComment = [
      {
        label: 'ใช้คำไม่สุภาพ',
        type: 'radio',
        value: 'ใช้คำไม่สุภาพ',
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
    ReportSpoiler() {
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
        })
    }

    clickDeteleComment(Comment:Comment){
      console.log('Detele Comment');
      // console.log(this.Comment);
      // this.memberServiceService.deleteMember(member.id).subscribe((Response) =>{
      // if(Response.status  != 'success') {
      //       return;
      //     }

      //     console.log(Response);
      //     this.loadMemberData();
      //   });
        }

    clickEditComment(){
      console.log('Edit Comment');
    }

    // alert ลบความคิดเห็นตัวเอง
    public alertButtonss = [
      {
        text: 'ยกเลิก',
        role: 'cancel',
        handler: () => {
          console.log('ยกเลิก');
        },
      },
      {
        text: 'ลบความคิดเห็น',
        role: 'confirm',
        handler: () => {
          console.log('ลบความคิดเห็น');
        },
      },
    ];

    // alert แก้ไขความคิดเห็น
    public alertButtonsEdit = ['ตกลง'];
    public alertInputsEdit = [
    {
      placeholder: 'ความคิดเห็น',
    },
    {
      type: 'textarea',
      placeholder: 'ความคิดเห็น',
    },
  ];


onClickDeleteButton() {
  console.log('>>>>ลบภาพยนตร์เรียบร้อย');
  this.spoilerServiceService.deleteSpoiler(this.MovieID).subscribe((Response) =>{
   if(Response.status  != 'success') {
        return;
      }
      
    });
}
  //alert ลบ
public alertButtons = [
  {
    text: 'ยกเลิก',
    role: 'cancel',
    handler: () => {
      console.log('ยกเลิก');
    },
  },
  {
    text: 'ลบภาพยนตร์',
    role: 'confirm',
    handler: () => {
      console.log('ลบภาพยนตร์');
      this.onClickDeleteButton();
      this.router.navigate(['/my-movies']);
    },
  },
];

}
