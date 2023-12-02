import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Spoiler } from '../models/movie-models';
import { SpoilerServiceService } from '../services/spoiler-service.service';
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';
import { Filesystem } from '@capacitor/filesystem';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Member } from '../models/member-models';
import { Mymovies } from '../models/mymovies-modela';

@Component({
  selector: 'app-edit-my-movies01',
  templateUrl: './edit-my-movies01.page.html',
  styleUrls: ['./edit-my-movies01.page.scss'],
})
export class EditMyMovies01Page implements OnInit {
  MovieID : any = [];
  spoilerID: any;
  SpoilerID:any;
  sID:any;
  

  mymovies: Mymovies[] = [];

  spoilers: Spoiler[] = [];
  spoiler: Spoiler = {
    spoilerID: '',
    spoiler_name: '',
    spoiler_category: '',
    spoiler_details: '',
    spoiler_img: '',
    actor: '',
    director: '',
    member_id: 0,
    username: '',
    profile_pic: '',
  };

  mymovie: Mymovies = {
    username : '',
    spoiler_name :'',
    spoiler_category : '',
    spoiler_details :'',
    spoiler_img : '',
    actor:'', 
    director:'',
    member_id:'',
    spoilerID:''
};

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

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private plt: Platform,
    private spoilerservice: SpoilerServiceService,
    private activate: ActivatedRoute,
    private storage: Storage) 
    {
      this.sID = this.activate.snapshot.paramMap.get('spoilerID');
      // this.spoilerID = this.activatedRoute.snapshot.paramMap.get('spoilerID');
      // console.log('MovieID = ', this.MovieID);
      // console.log('spoiler =', this.spoilerID);
      console.log('spoilerID = ',  this.sID);
  }
  async ionViewDidEnter() {
    this.member = await this.storage.get('loginProfile');
    this.spoilerservice.myMoviesEdit(this.sID).subscribe((Response) => {
      this.mymovie = Response.mymovie;
      console.log('>>>',this.mymovie);
    })
    // this.spoilerservice.myMovies(this.SpoilerID).subscribe((Response) => {
    //   this.mymovies = Response.mymovies;
    // })
    this.loadSpoilerData();
    // this.onClickSaveEditButton();
    this.loaddataSaveEditButton(this.mymovie);
  }
  async ngOnInit() {
    await this.storage.create();
  }

// ลบ
public alertInputsSS = [
    {
      text: 'ยกเลิก',
      role: 'cancel',
      handler: ()=>{
        console.log("ยกเลิก");
        // this.router.navigate(['/edit-my-movies01']);
        }
    },
    {
      text: 'ลบ',
      role: 'confirm',
      handler: ()=>{
        console.log("ตกลง");
        this.router.navigate(['/my-movies']);
        // this.onClickDeleteButton();
        }
    },
  ];

  // บันทึก
  public alertButtonsSave = [
    {
      text: 'ยกเลิก',
      role: 'cancel',
      handler: ()=>{
        console.log("ยกเลิก");
        // this.router.navigate(['/edit-my-movies01'])
        }
    },
    {
      text: 'บันทึก',
      role: 'confirm',
      handler: ()=>{
        console.log("ตกลง");
        this.router.navigate(['/my-movies']);
        this.onClickSaveEditButton(this.mymovie);
        }
    },
  ];


  loadSpoilerData() {

}



  onClickSaveEditButton(mymovie:Mymovies) {
        this.spoilerservice.EditSpoiler(mymovie).subscribe((Response) => {
        if (Response.status != 'success'){
          return;
        }
        // this.router.navigate(['/my-movies']);
      });
  }

  loaddataSaveEditButton(mymovie:Mymovies) {
    this.spoilerservice.EditSpoiler(mymovie).subscribe((Response) => {
    if (Response.status != 'success'){
      return;
    }
    // this.router.navigate(['/my-movies']);
  });
}

  async selectImage() {
    console.log('on click selectImage');
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos,
    });

    console.log(image);
    if (image) {
      this.saveImage(image);
    }
  }
  async saveImage(photo: Photo) {
    const base64Data = await this.readAsBase64(photo);
    console.log(base64Data);
    this.mymovie.spoiler_img = base64Data;
  }

  private async readAsBase64(photo: Photo) {
    if (this.plt.is('hybrid')) {
      const file = await Filesystem.readFile({
        path: photo.path!,
      });

      return file.data;
    } else {
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
}
