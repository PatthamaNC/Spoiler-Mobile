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
  selector: 'app-search-detail-user',
  templateUrl: './search-detail-user.page.html',
  styleUrls: ['./search-detail-user.page.scss'],
})
export class SearchDetailUserPage implements OnInit {
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
};

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
      // await this.storage.create();
    }

    async ionViewWillEnter() {
    this.spoilerServiceService.MyMoviesDetail(this.MovieID).subscribe((response) => {
      if (response.status != 'success') {
        return;
      }
      this.spoiler = response.spoiler;
      console.log(this.spoilers);
    });
    // this.member = await this.storage.get('loginProfile');
    
    
  }
 
  
  loadSpoiler() {
    this.spoilerServiceService
      .inquirySpoilerSearchDetail(this.MovieID)
      .subscribe((response) => {
        if (response.status != 'success') {
          return;
        }

        this.Myspoilers = response.Myspoilers;
        console.log('value of this.comments');
        console.log(this.Myspoilers);
      });
  }

}