import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Member } from '../models/member-models';
import { MemberServiceService } from '../services/member-service.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-profile-two',
  templateUrl: './profile-two.page.html',
  styleUrls: ['./profile-two.page.scss'],
})
export class ProfileTwoPage implements OnInit {
  memberPassword: any; 
  memberEmail : any;
  member:Member ={
        id: 0,
        username:  '',
        fname: '',
        lname:  '',
        email:  '',
        password:  '',
        profile_pic:'',
  };

  constructor( private memberServiceService:MemberServiceService,
    private router:Router,
    private ActivatedRoute:ActivatedRoute,
    private storage: Storage) {
     }
     async ngOnInit() {
      await this.storage.create();
     }
     async  ionViewWillEnter() {
  this.member = await this.storage.get('loginProfile');
  }
}
  
