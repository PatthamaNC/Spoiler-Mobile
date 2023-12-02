import { Component, OnInit } from '@angular/core';
import { Member } from '../models/member-models';
import { Storage } from '@ionic/storage-angular';
import { MemberServiceService } from '../services/member-service.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-check-password',
  templateUrl: './check-password.page.html',
  styleUrls: ['./check-password.page.scss'],
})
export class CheckPasswordPage implements OnInit {
  confirmpassword: string;
  password: string;
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
  constructor(private storage: Storage,
    private MemberServiceService: MemberServiceService,
    private router: Router,
    private alertController: AlertController) { }
  async ngOnInit() {
    await this.storage.create();
  }
  async ionViewDidEnter() {
    this.member = await this.storage.get('loginProfile');
  }

  async ClickEditPassword(confirmpassword: string, password: string) {
    console.log('>>>> รหัสผ่านเดิม', confirmpassword);
    console.log('>>>> รหัสผ่านใหม่', password);
    if (confirmpassword == this.member.password) {
      console.log('>>>รหัสถูกต้อง');
      this.MemberServiceService.EditPassword(password, this.member.id).subscribe(async (response) => {
        if (response.status != 'success') {
          return;
        }

        this.MemberServiceService.selectMemberByID(this.member.id).subscribe(async (response) => {
          if (response.status != 'success') {
            return;
          }
          this.member = response.member;
          await this.storage.set('loginProfile', this.member);
          this.router.navigate(['/main-page/profile-one']);
        });
      });
    }
    if (confirmpassword != this.member.password) {
      console.log(this.member.password);
      console.log('>>>รหัสไม่ถูกต้อง');
      const alert = await this.alertController.create({
        header: 'รหัสผ่านไม่ถูกต้อง!',
        message: 'กรุณาตรวจสอบข้อมูลให้ถูกต้อง',
        cssClass: 'default-alert',
        buttons: ['ตกลง'],
      });
      await alert.present();
      return;
    }
  }


}
// กรุณาตรวจสอบข้อมูลให้ถูกต้อง