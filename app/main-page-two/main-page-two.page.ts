import { Component, OnInit } from '@angular/core';
import { Member } from '../models/member-models';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-main-page-two',
  templateUrl: './main-page-two.page.html',
  styleUrls: ['./main-page-two.page.scss'],
})
export class MainPageTwoPage implements OnInit {
  member:Member ={
    id: 0,
    username:  '',
    fname: '',
    lname:  '',
    email:  '',
    password:  '',
    profile_pic:'',
};

  constructor(private storage: Storage) { }
  async ngOnInit() {
    await this.storage.create();
   }
   async  ionViewWillEnter() {
this.member = await this.storage.get('loginProfile');
}
}
