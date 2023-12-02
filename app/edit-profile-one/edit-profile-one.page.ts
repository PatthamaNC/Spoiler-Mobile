import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberServiceService } from '../services/member-service.service';
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


@Component({
  selector: 'app-edit-profile-one',
  templateUrl: './edit-profile-one.page.html',
  styleUrls: ['./edit-profile-one.page.scss'],
})
export class EditProfileOnePage implements OnInit {
  memberID: any;
  member: Member = {
    id: 0,
    username: '',
    fname: '',
    lname: '',
    email: '',
    password: '',
    profile_pic: '',
  };

  loginForm: FormGroup;
  
  constructor(private memberService: MemberServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private storage: Storage,
    private plt: Platform,
    public formBuilder: FormBuilder

  ) {
    this.memberID = this.activatedRoute.snapshot.paramMap.get('memberID');
    // console.log(this.memberID);
    // console.log('memberID = ', this.memberID);
    this.loginForm = new FormGroup({
      fname: new FormControl(),
      lname: new FormControl()
    })
  }
  async ionViewDidEnter() {
    this.member = await this.storage.get('loginProfile');
    this.loaddataMember();
  }

  // async 
  ngOnInit() {
    // await this.storage.create();

    this.loginForm = this.formBuilder.group({
      fname: ['',[Validators.required]],
      lname: ['',[Validators.required]],
    });
     }
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



  async onClickUpdateButton() {
    this.memberService.updateMember(this.member).subscribe(async (Response) => {
      if (Response.status != 'success') {
        return;
      }
      await this.storage.set('loginProfile', this.member);

    });
  }



  
  loaddataMember() {
    this.memberService.updateMember(this.member).subscribe(async (Response) => {
      if (Response.status != 'success') {
        return;
      }
      await this.storage.set('loginProfile', this.member);

    });
  }

  async selectImage() {
    console.log('on click selectImage');
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos, // Camera, Photos or Prompt!
    });

    console.log(image);
    if (image) {
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
  convertBlobToBase64 = (Blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
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
      text: 'บันทึก',
      cssClass: 'alert-button-confirm',
      handler: () => {
        console.log("บันทึกข้อมูล");
        this.onClickUpdateButton();
        this.router.navigate(['/profile-two']);
      }
    },
  ];
}
