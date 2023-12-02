import { Component, OnInit } from '@angular/core';
import { Member } from '../models/member-models';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { MemberServiceService } from '../services/member-service.service';

@Component({
  selector: 'app-forgot-password02',
  templateUrl: './forgot-password02.page.html',
  styleUrls: ['./forgot-password02.page.scss'],
})
export class ForgotPassword02Page implements OnInit {
  member: Member = {
    id: 0,
    username:  '',
    fname: '',
    lname:  '',
    email:  '',
    password:  '',
    profile_pic:'',
};
  constructor(private storage : Storage,
              private router:Router,
              private memberservice:MemberServiceService) 
              { }

  async ngOnInit() {
    await  this.storage.create();
    }

  async ionViewWillEnter(){
    this.member = await this.storage.get('forgotPassWord');
  }  

    confirmAccount(){
      this.memberservice.addForgetPass(this.member.id, this.member.email)
    .subscribe(async (Response) => {
      if (Response.status !== 'success'){
        return;
      }
     
    });
  }
  black(){
    this.router.navigate(['/forgot-password01'])
  }
  ThisNotEmail() {
  this.storage.clear();
  this.router.navigate(['/forgot-password01']);
  }
  public alertButtons = [
    {
      text: 'ตกลง',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
        this.router.navigate(['/forgot-password03']);
      },
    },
  ];
  
}