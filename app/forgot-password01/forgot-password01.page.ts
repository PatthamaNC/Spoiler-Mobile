import { Component, OnInit } from '@angular/core';
import { Member } from '../models/member-models';
import { Storage } from '@ionic/storage-angular';
import { Route, Router } from '@angular/router';
import { MemberServiceService } from '../services/member-service.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-forgot-password01',
  templateUrl: './forgot-password01.page.html',
  styleUrls: ['./forgot-password01.page.scss'],
})
export class ForgotPassword01Page implements OnInit {
  Email:any;

  members: Member[] = [];
  member: Member = {
    id: 0,
    username:  '',
    fname: '',
    lname:  '',
    email:  '',
    password:  '',
    profile_pic:'',
};
  constructor( private MemberService:MemberServiceService,
              private storage:Storage,
              private router:Router,
              private alert: AlertController) 
              {  }

  async ngOnInit() {
    this.storage.create();
    }
    
    forgotEmail(email:any){
      // console.log(email);
      
      this.MemberService.forgetPasswordByEmail(email).subscribe(async (Response)=> {
      if (Response.status !== 'success'){
        return;
      }
      if (Response.member === null) {
        const alert = await this.alert.create({
          header: 'ไม่พบอีเมล',
          subHeader: '',
          message: 'ไม่มีอีเมลนี้ในระบบ',
          buttons: [
            {
              text: 'ตกลง',
              role: 'confirm',
              handler: () => {},
            },
          ],
        });
        await alert.present();
        return;
      }
      this.member = Response.member;
      this.storage.set('forgotPassWord' ,this.member);
      this.router.navigate(['/forgot-password02']);
      });
    }






  
  // isAlertOpen = false;
  // public alertButtons = ['ตกลง'];

  // setOpen(isOpen: boolean) {
  //   this.isAlertOpen = isOpen;
  // }
    
}
