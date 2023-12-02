import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.page.html',
  styleUrls: ['./profile-user.page.scss'],
})
export class ProfileUserPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  public alertButtonsS = [
    {
      text: 'ยกเลิก',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'ออกจารระบบ',
      cssClass: 'alert-button-confirm',
      handler: ()=>{
            console.log("สมัครสมาชิก");
            this.router.navigate(['/home'])
            }
    },
  ];

  clickLogOut(){
    // this.router.navigate(['/home']);
  }

}
