import { Component, OnInit } from '@angular/core';
import { Listspoiler } from '../models/list-spoiler-models';
import { SpoilerServiceService } from '../services/spoiler-service.service';

@Component({
  selector: 'app-list-cartoon',
  templateUrl: './list-cartoon.page.html',
  styleUrls: ['./list-cartoon.page.scss'],
})
export class ListCartoonPage implements OnInit {
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

  constructor(private spoilerService:SpoilerServiceService) { }

  ngOnInit() {}
  ionViewWillEnter() {

    this.spoilerService.SpoilerCartoon().subscribe((response) => {
      if (response.status != 'success') {
        return;
      }
      this.listspoilers = response.listspoilers;
      console.log(this.listspoilers);
    });
  }

}

