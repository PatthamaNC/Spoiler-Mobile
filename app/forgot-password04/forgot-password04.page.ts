import { Component, OnInit } from '@angular/core';
import { MemberServiceService } from '../services/member-service.service';
import { Storage } from '@ionic/storage-angular';
import { Member } from '../models/member-models';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password04',
  templateUrl: './forgot-password04.page.html',
  styleUrls: ['./forgot-password04.page.scss'],
})
export class ForgotPassword04Page implements OnInit {
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
  password:any;

  constructor(private storage:Storage,
            private memberservice:MemberServiceService,
            private alertController:AlertController,
            private router:Router) 
  { }

  async ngOnInit() {await  this.storage.create();}

  async ionViewWillEnter(){
    this.member = await this.storage.get('forgotPassWord');
  }
  async resePassword(password:any){
    this.memberservice.resetPassword(this.member.id, password).subscribe(async (Response) => {
      if (Response.status != 'success'){
        return;
      }
    
    this.memberservice.deleteForgetPassword(this.member.id).subscribe(async (Response) => {
      if (Response.status != 'success'){
        return;
      }
    });

    const alert = await this.alertController.create({   
    header:  'คุณได้สร้างรหัสผ่านใหม่เรียบร้อย',
    message: 'กรุณาเข้าสู่ระบบ',
    buttons: ['ตกลง'],
    
  });
  await alert.present();
  this.router.navigate(['login']);
    });
  }
}

