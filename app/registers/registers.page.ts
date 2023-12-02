import { Component, OnInit } from '@angular/core';
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
  selector: 'app-registers',
  templateUrl: './registers.page.html',
  styleUrls: ['./registers.page.scss'],
})
export class RegistersPage implements OnInit {
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

  async onClickSaveButton(member:Member){
    console.log('handle on click save button');
    console.log(member);
    // this.router.navigate(['/main-pagr-two']);
    this.memberServiceService.addMember(member).subscribe((Response) => {
    if (Response.status != 'success'){
      return;
    }
    // this.router.navigate(['/login']);

  });
 }

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

async onCilkLonigButton(Username:string, Fname:string, Lname:string, Email:string, Password:string){
  if (Username == ''){
    const alert = await this.alertController.create({
      header: 'กรุณากรอกชื่อผู้ใช้',
      message: '',
      buttons: ['ตกลง'],
    });
    await alert.present();
    return;
  }
  if (Fname == ''){
    const alert = await this.alertController.create({
      header: 'กรุณากรอกชื่อ',
      message: '',
      buttons: ['ตกลง'],
    });
    await alert.present();
    return;
  }
  if (Lname == ''){
    const alert = await this.alertController.create({
      header: 'กรุณากรอกนามสกุล',
      message: ' ',
      buttons: ['ตกลง'],
    });
    await alert.present();
    return;
  }
  if (Email == ''){
    const alert = await this.alertController.create({
      header: 'กรุณากรอกอีเมล',
      message: '',
      buttons: ['ตกลง'],
    });
    await alert.present();
    return;
  }
  if (Password == ''){
    const alert = await this.alertController.create({
      header: 'กรุณากรอกรหัสผ่าน',
      message: '',
      buttons: ['ตกลง'],
    });
    await alert.present();
    return;
  }
}

}
