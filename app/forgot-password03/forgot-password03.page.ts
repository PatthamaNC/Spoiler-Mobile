import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgorPass } from '../models/forgotpass-models';
import { Storage } from '@ionic/storage-angular';
import { Member } from '../models/member-models';
import { MemberServiceService } from '../services/member-service.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-forgot-password03',
  templateUrl: './forgot-password03.page.html',
  styleUrls: ['./forgot-password03.page.scss'],
})
export class ForgotPassword03Page implements OnInit {
  comfirmPassword: any;
  forgorPassS: ForgorPass[] = [];
  forgorPass: ForgorPass = {
    forgotpasswordID: 0,
    email: '',
    member_id: '',
    comfirmPassword: ''
  };


  members: Member[] = [];
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
    private storage: Storage,
    private memberservice: MemberServiceService,
    private alertController: AlertController) { }

  async ngOnInit() {
    await this.storage.create();
  }

  async ionViewWillEnter() {
    this.member = await this.storage.get('forgotPassWord');
    this.memberservice.comfirmPassword(this.member.id).subscribe(async (Response) => {
      if (Response.status !== 'success') {
        return;
      }
      this.forgorPass = Response.forgorPass;
    });
  }

  // this.router.navigate(['/forgot-password04']);

  async confirmPassword(comfirmPassword: string) {
    if (comfirmPassword != this.forgorPass.comfirmPassword) {
      const alert = await this.alertController.create({
        header: 'รหัสยืนยันไม่ถูกต้อง!',
        message: 'กรุณากรอกรหัสยืนยัน',
        buttons: ['ตกลง'],
      });
      await alert.present();
      return;
    }
    if (comfirmPassword == this.forgorPass.comfirmPassword) {
      this.router.navigate(['/forgot-password04']);
    }
  }
}
