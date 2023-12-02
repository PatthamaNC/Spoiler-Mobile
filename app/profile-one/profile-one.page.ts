import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Member } from '../models/member-models';
import { MemberServiceService } from '../services/member-service.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Route } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-profile-one',
  templateUrl: './profile-one.page.html',
  styleUrls: ['./profile-one.page.scss'],
})
export class ProfileOnePage implements OnInit {
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

  public alertButtons = [
    {
      text: 'ยกเลิก',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'ออกจากระบบ',
      cssClass: 'alert-button-confirm',
      handler: ()=>{
            console.log("ออกจากระบบ");
            this.storage.clear();
            this.router.navigate(['/home'])
            }
    },
  ];

constructor(private memberServiceService:MemberServiceService,
  private router:Router,
  private ActivatedRoute:ActivatedRoute,
  private storage: Storage){}
 

   async ngOnInit() {
      await this.storage.create();
     }
     async  ionViewWillEnter() {
  this.member = await this.storage.get('loginProfile');
  }
  async logout() {
    await this.storage.clear();
  }
  clickLogOut(){
    this.router.navigate(['/home']);
  }
}
