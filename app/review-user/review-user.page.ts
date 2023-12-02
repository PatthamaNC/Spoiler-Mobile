import { Component, OnInit } from '@angular/core';
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';
import { Spoiler }from '../models/movie-models';
import { Platform } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Filesystem } from '@capacitor/filesystem';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-review-user',
  templateUrl: './review-user.page.html',
  styleUrls: ['./review-user.page.scss'],
})
export class ReviewUserPage implements OnInit {
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
  constructor(private plt:Platform,
    public formBuilder:FormBuilder,
    private router:Router) { }

  ngOnInit() {
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

  public alertButtons = [
    {
      text: 'ยกเลิก',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'สมัครสมาชิก',
      cssClass: 'alert-button-confirm',
      handler: ()=>{
            console.log("สมัครสมาชิก");
            this.router.navigate(['/register-member'])
            }
    },
  ];
}
