import { Component, OnInit } from '@angular/core';
import { MemberServiceService } from '../services/member-service.service';
import { Member,Memberstatus, } from '../models/member-models';
import { Route, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
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
  memberstatus: Memberstatus = {
    id: 0,
    username:  '',
    fname: '',
    lname:  '',
    email:  '',
    password:  '',
    profile_pic:'',
    status:'',
};



  id: any;

  loginForm: FormGroup;

  constructor(private storage: Storage,
    private router: Router,
    private memberServiceService: MemberServiceService,
    public formBuilder: FormBuilder,
    private alertController: AlertController) 
    {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  async ngOnInit() {
    await this.storage.create();
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }
  get email() { return this.loginForm.controls; }
  get errorControl() {
    return this.loginForm.controls;
  }
  submitForm = () => {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      return false;
    } else {
      return console.log('กรุณากรอกข้อมูลให้ครบ!!');
    }
  }



  resetForm() {
    this.member = {
      id: 0,
      username: '',
      fname: '',
      lname: '',
      email: '',
      password: '',
      profile_pic: '',
    };
  }
  async onCilkLonigButton(Email: string, Password: string) {
    if (Email == '') {
      const alert = await this.alertController.create({
        header: 'เข้าสู่ระบบไม่สำเร็จ',
        message: 'ไม่สามารถเข้าสู่ระบบได้! กรุณากรอกอีเมล',
        buttons: ['ตกลง'],
      });
      await alert.present();
      return;
    }
    if (Password == '') {
      const alert = await this.alertController.create({
        header: 'เข้าสู่ระบบไม่สำเร็จ',
        message: 'ไม่สามารถเข้าสู่ระบบได้! กรุณากรอกรหัสผ่าน',
        buttons: ['ตกลง'],
      });
      await alert.present();
      return;
    }
    
    this.memberServiceService.loginMember(Email, Password).subscribe(async (response) => {
      if (response.status != 'success') {
        const alert = await this.alertController.create({
          header: 'เข้าสู่ระบบไม่สำเร็จ',
          message: 'ไม่สามารถเข้าสู่ระบบได้! กรุณาตรวจสอบข้อมูลให้ถูกต้อง',
          buttons: ['ตกลง'],
        });
        await alert.present();

        return;
      }
      if(response.memberstatus.status == 'สถานะบล็อก'){
        const alert = await this.alertController.create({
          header: 'บัญชีถูกบล็อก',
          // message: 'เนื่องจาก......',
          buttons: ['ตกลง'],
        });
        await alert.present();

        return;
      }

      
      this.memberstatus = response.memberstatus;
      await this.storage.set('loginProfile', this.memberstatus);
      this.router.navigate(['/main-page']);
      this.resetForm();
    })

  }

}
