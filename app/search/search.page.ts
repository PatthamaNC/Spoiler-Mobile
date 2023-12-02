import { Component, OnInit } from '@angular/core';
import { SpoilerServiceService } from '../services/spoiler-service.service';
import { Spoiler, VideoSearch } from '../models/movie-models';
import { Video } from '../models/videos-models';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  spoilers : Spoiler [] = [];
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
  video : VideoSearch[];
    videos: Video[] = [];
    Video: Video = {
      videosID: '',
      name:'',
      category: '',
      details:'',
      actor:'', 
      director:'',
      videos:'',
      img:  '',
  
    };
    constructor(private SpoilerServiceService: SpoilerServiceService ) { }
  
    ngOnInit() {
    }
   
    handleIonBlur() {
      console.log('>>>handleIonBlur');
    }
  
    handleIonCancel() {
      console.log('>>>handleIonCancel');
    }
  
    handleIonChange() {
      console.log('>>>handleIonChange');
    }
  
    handleIonClear() {
      console.log('>>>handleIonClear');
    }
  
    handleIonFocus() {
      console.log('>>>handleIonFocus');
    }
  
    handleIonInput(event: any) {
      const searchKey = event.target.value;
      console.log(searchKey);
      
  
      this.SpoilerServiceService.searchmovie(searchKey).subscribe((response) => {
        if (response.status != 'success') {
          return;
        }
        this.spoilers  = response.spoiler;
        console.log(this.spoilers);
        this.video  = response.video;
        console.log(this.video);
      });
    }
  
    ionViewWillEnter(){
      // this.loadspoilerData();
      // this.loadvideosData();
    }
  
    loadspoilerData(){
      this.SpoilerServiceService.inquirySpoiler().subscribe((Response) => {
        if(Response.status  != 'success') {
          return;
        }
          this.spoilers = Response.spoiler;
          console.log(this.spoilers);
      });
    }
  
      loadvideosData(){
        this.SpoilerServiceService.inquiryVideos().subscribe((Response) => {
        if(Response.status  != 'success') {
          return;
        }
          this.videos = Response.videos;
          console.log(this.videos);
      });
      }
  
      clickBack(){
        console.log('>>>click');
      }
  }
