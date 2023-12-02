import { Component, OnInit } from '@angular/core';
import { Spoiler } from '../models/movie-models';
import { SpoilerServiceService } from '../services/spoiler-service.service';
import { Storage } from '@ionic/storage-angular';
import { Member } from '../models/member-models';
import { Mymovies } from '../models/mymovies-modela';


@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.page.html',
  styleUrls: ['./my-movies.page.scss'],
})
export class MyMoviesPage implements OnInit {
  // spoilers : Spoiler[] = [];
  mymovies: Mymovies[] = [];

  member: Member = {
    id: 0,
    username: '',
    fname: '',
    lname: '',
    email: '',
    password: '',
    profile_pic: '',
  };

  // spoiler: Spoiler = {
  //   spoilerID: '',
  //   spoiler_name:'',
  //   spoiler_category: '',
  //   spoiler_details:'',
  //   spoiler_img:  '',
  //   actor:'', 
  //   director:'',
  //   member_id: 0,
  //   username:'',
  //   profile_pic:'',
  // };

  constructor(private spoilerServiceService: SpoilerServiceService,
    private storage: Storage
  ) { }
  async ngOnInit() {
    await this.storage.create();
  }
  async ionViewWillEnter() {
    this.member = await this.storage.get('loginProfile');

    // ดึงข้อมูลภาพยนตร์ของสมาชิก
    this.spoilerServiceService.myMovies(this.member.id).subscribe((response) => {
      if (response.status != 'success') {
        return;
      }
      this.mymovies = response.mymovies;
      console.log(this.mymovies);
    });
    this.loadspoilerData();
  }

  loadspoilerData() {
    this.spoilerServiceService.myMovies(this.member.id).subscribe((Response) => {
      if (Response.status != 'success') {
        return;
      }

      this.mymovies = Response.mymovies;
      console.log(this.mymovies);
    });
  }
}
