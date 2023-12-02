import { Component, OnInit } from '@angular/core';
import { Spoiler }from '../models/movie-models';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { MemberServiceService } from '../services/member-service.service';
import { SpoilerServiceService } from '../services/spoiler-service.service';
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
import { Member } from '../models/member-models';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {
  MovieID : any;


  spoiler: Spoiler = {
    spoilerID : '',
    spoiler_name:  '',
    spoiler_category: '',
    spoiler_details:  '',
    spoiler_img:  '',
    actor:'', 
    director:'',
    member_id: 0,
    username:'',
    profile_pic:'',
      };

      member: Member = {
        id: 0,
        username: '',
        fname: '',
        lname: '',
        email: '',
        password: '',
        profile_pic: '',
      };

  constructor(private memberServiceService:MemberServiceService, 
    private router:Router,
    private spoilerServiceService: SpoilerServiceService,
    private plt:Platform,
    public formBuilder:FormBuilder,
    private alertController: AlertController,
    private storage : Storage) {}

     async ngOnInit() {
      await this.storage.create();
      
      this.Review = this.formBuilder.group({
       
      });
     }
      
    ionViewWillEnter(){
      this.resetForm();
    }
    resetForm(){
      this.spoiler = {
        spoilerID: '',
        spoiler_name:'',
        spoiler_category: '',
        spoiler_details:'',
        spoiler_img:  '',
        actor:'', 
        director:'',
        member_id: 0,
        username:'',
        profile_pic:'',
      };
    }
    Review: FormGroup;
    public alertButtonsSS = [
      {
        text: 'ยกเลิก',
        role: 'cancel',
        handler: () => {
          console.log('ยกเลิก เพิ่มภาพยนตร์');
        },
      },
      {
        text: 'ตกลง',
        role: 'confirm',
        handler: () => {
          console.log('ตกลง เพิ่มภาพยนตร์');
          this.onClickSaveButton();
          this.router.navigate(['/my-movies']);
        },
      },
    ];
    
  async onClickSaveButton(){
    // console.log('handle on click save button');
    console.log(this.spoiler);
    // console.log('member:',this.member)
    this.member =  await this.storage.get('loginProfile');
    this.spoiler.member_id = this.member.id;
    this.spoilerServiceService.addspoiler(this.spoiler).subscribe((Response) => {
      if (Response.status != 'success'){
        return;
      }
      console.log(Response);
        
    });
    
    // this.spoilerServiceService.AddMyMovies(this.spoiler.spoilerID,this.member.id).subscribe((Response) => {
    //   if (Response.status != 'success'){
    //     return;
    //   }
   
    // });
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
  this.spoiler.spoiler_img = base64Data;
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
  if (this.Review.valid) {
    console.log(this.Review.value);
    return false;
  } else {
    return console.log('Please provide all the required values!');
  }
}
// public alertButtons = ['ตกลง'];


// async onCilkLonigButton(spoiler_name:string, spoiler_category:string, spoiler_details:string, spoiler_img: string){
//   if (spoiler_name == ''){
//     const alert = await this.alertController.create({
//       header: 'เข้าสู่ระบบไม่สำเร็จ',
//       message: 'ไม่สามารถเข้าสู่ระบบได้! กรุณากรอกชื่อผู้ใช้',
//       buttons: ['ตกลง'],
//     });
//     await alert.present();
//     return;
//   }
  // if (spoiler_category == ''){
  //   const alert = await this.alertController.create({
  //     header: 'เข้าสู่ระบบไม่สำเร็จ',
  //     message: 'ไม่สามารถเข้าสู่ระบบได้! กรุณากรอกชื่อ',
  //     buttons: ['ตกลง'],
  //   });
  //   await alert.present();
  //   return;
  // }
  // if (spoiler_category == ''){
  //   const alert = await this.alertController.create({
  //     header: 'เข้าสู่ระบบไม่สำเร็จ',
  //     message: 'ไม่สามารถเข้าสู่ระบบได้! กรุณากรอกนามสกุล',
  //     buttons: ['ตกลง'],
  //   });
  //   await alert.present();
  //   return;
  // }
 
  // this.spoilerServiceService.addspoiler().subscribe(async (response) => {
  //   if (response.status != 'success'){
  //    const alert = await this.alertController.create({
  //      header: 'เข้าสู่ระบบไม่สำเร็จ',
  //      message: 'ไม่สามารถเข้าสู่ระบบได้! กรุณาตรวจสอบข้อมูลให้ถูกต้อง',
  //      buttons: ['ตกลง'],
  //    });
  //    await alert.present();
     
  //    return;
  //   }
  //   this.router.navigate(['/home'])
  //  })

 }




