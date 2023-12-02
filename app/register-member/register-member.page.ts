import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MemberServiceService } from '../services/member-service.service';
import { Router } from '@angular/router';
import { Member } from '../models/member-models';
import { Storage } from '@ionic/storage-angular';
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';
import { Filesystem } from '@capacitor/filesystem';
import { Platform } from '@ionic/angular';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.page.html',
  styleUrls: ['./register-member.page.scss'],
})
export class RegisterMemberPage implements OnInit {
  members:any;
  member: Member = {
    id: 0,
    username:  '',
    fname: '',
    lname:  '',
    email:  '',
    password:  '',
    profile_pic: '',
  };
  memberCheckEmail: Member = {
    id: 0,
    username:  '',
    fname: '',
    lname:  '',
    email:  '',
    password:  '',
    profile_pic: '',
  };
  memberCheckUsername: Member = {
    id: 0,
    username:  '',
    fname: '',
    lname:  '',
    email:  '',
    password:  '',
    profile_pic: '',
  };

  constructor(private memberServiceService: MemberServiceService,
    private storage : Storage,
              private router:Router,
              private plt:Platform,
              public formBuilder:FormBuilder,
              private alertController: AlertController) {
                this.Register = new FormGroup({
                  username:new FormControl(),
                  fname:new FormControl(),
                  lname:new FormControl(),
                  email:new FormControl(),
                  password:new FormControl()
                })
               }
               async ngOnInit() {
                await this.storage.create();
                this.Register = this.formBuilder.group({
                  username: ['',[Validators.required]],
                  fname: ['',[Validators.required]],
                  lname: ['',[Validators.required]],
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
              get username() { return this.Register.controls; }
              get fname() { return this.Register.controls; }
              get lname() { return this.Register.controls; }
              get email() { return this.Register.controls; }
              get password() { return this.Register.controls; }
              get errorControl() {return this.Register.controls;
              }


  ionViewWillEnter(){
    this.resetForm();
  }
  resetForm(){
    this.member = {
    id: 0,
    username:  '',
    fname: '',
    lname:  '',
    email:  '',
    password:  '',
    profile_pic:'',
    };
  }

  Register: FormGroup;

//   async onClickSaveButton(member:Member){
//     console.log('handle on click save button');
//     console.log(member);
//     // this.router.navigate(['/main-pagr-two']);
//     this.memberServiceService.addMember(member).subscribe((Response) => {
//     if (Response.status != 'success'){
//       return;
//     }
//     this.router.navigate(['/login']);

//   });
//  }

 async selectImage(){
  console.log('on click selectImage');
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.Uri,
    source: CameraSource.Photos, // Camera, Photos or Prompt!
  });

  console.log(image);
  if(image){
    this.saveImage(image);
  }
} 
async saveImage(photo: Photo) {
  const base64Data = await this.readAsBase64(photo);
  console.log(base64Data);
  this.member.profile_pic = base64Data;
}

private async readAsBase64(photo: Photo) {
  if (this.plt.is('hybrid')) {
    const file = await Filesystem.readFile({
      path: photo.path!,
    });

    return file.data;
  } else {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();

    return (await this.convertBlobToBase64(blob)) as string;
}
}
convertBlobToBase64 = (Blob : Blob) =>
new Promise ((resolve, reject) => {
  const reader = new FileReader();
  reader.onerror = reject;
  reader.onload = () =>{
    resolve(reader.result);
  };
  reader.readAsDataURL(Blob);
});

submitForm = () => {
  if (this.Register.valid) {
    console.log(this.Register.value);
    return false;
  } else {
    return console.log('กรุณากรอกข้อมูลให้ครบถ้วน!');
  }
}

async onCilkLonigButton(member:Member){
  if (this.member.username == ''){
    const alert = await this.alertController.create({
      header: 'กรุณากรอกชื่อผู้ใช้',
      message: '',
      buttons: ['ตกลง'],
    });
    await alert.present();
    return;
  }
  if (this.member.fname == ''){
    const alert = await this.alertController.create({
      header: 'กรุณากรอกชื่อ',
      message: '',
      buttons: ['ตกลง'],
    });
    await alert.present();
    return;
  }
  if (this.member.lname == ''){
    const alert = await this.alertController.create({
      header: 'กรุณากรอกนามสกุล',
      message: ' ',
      buttons: ['ตกลง'],
    });
    await alert.present();
    return;
  }
  if (this.member.email == ''){
    const alert = await this.alertController.create({
      header: 'กรุณากรอกอีเมล',
      message: '',
      buttons: ['ตกลง'],
    });
    await alert.present();
    return;
  }
  if (this.member.password == ''){
    const alert = await this.alertController.create({
      header: 'กรุณากรอกรหัสผ่าน',
      message: '',
      buttons: ['ตกลง'],
    });
    await alert.present();
    return;
  }
  //   this.memberServiceService.loginMember(Email,Password).subscribe(async (response) => {
//    if (response.status != 'success'){
//     const alert = await this.alertController.create({
//       header: 'เข้าสู่ระบบไม่สำเร็จ',
//       message: 'กรุณาตรวจสอบข้อมูลให้ถูกต้อง',
//       buttons: ['ตกลง'],
//     });
//     await alert.present();
    
//     return;
//    }
//    this.router.navigate(['/home'])
//   })
// }





this.memberServiceService.registerByusername(member.username).subscribe(async (Response) =>{
  if (Response.status != 'success'){
    return;
  }
  this.memberCheckUsername = Response.member;
    this.memberCheckEmail = Response.member;

    this.memberServiceService.forgetPasswordByEmail(member.email).subscribe(async(Response) =>{
      if (Response.status != 'success'){
        return;
      }
      this.memberCheckEmail = Response.member;
      //Check username not null in database
      if(
        this.memberCheckUsername !== null &&
        this.member.username === this.memberCheckUsername.username
      ){
        // Check email not null in database
        const alert = await this.alertController.create({
          header: 'มีชื่อผู้ใช้งานนี้อยู่แล้ว',
          message: 'กรุณาใช้ชื่อผู้ใช้อื่น',
          buttons: ['ตกลง'],
        });
        await alert.present();
        return;
      }
      else if(
        this.memberCheckEmail != null &&
        this.member.email == this.memberCheckEmail.email
      ){
        const alert = await this.alertController.create({
          header: 'มีอีเมลนี้อยู่แล้ว!',
          message: 'กรุณาใช้อีเมลอื่นสมัครสมาชิก',
          buttons: ['ตกลง'],
        });
        await alert.present();
        return;
      }
      


      else{
        this.memberServiceService.addMember(member).subscribe(async (Response)=>{
          if (Response.status !== 'success') {
            const alert = await this.alertController.create({
              header: 'สมัครสมาชิกไม่สำเร็จ',
              message:
                'ไม่สามารถสมัครสมาชิกได้! กรุณาตรวจสอบข้อมูลให้ถูกต้อง',
              buttons: ['ตกลง'],
            });
            await alert.present();
            return;
          }
          const alert = await this.alertController.create({
            header: 'สมัครสมาชิกสำเร็จ',
            message:
              'การสมัครสมาชิกของคุณสำเร็จแล้ว! กรุณาทำการเข้าสู่ระบบใหม่อีกครั้ง',
            buttons: ['ตกลง'],
          });
          await alert.present();
                  this.router.navigate(['/login']);
                  this.resetForm();
        });
      }
    });
  });
}
}


