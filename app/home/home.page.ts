import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}
  conclick(){
    this.router.navigate(['/login'])
  }
  oncilckCilck(){
    console.log("cilck");
    this.router.navigate(['/tabs-user01']);
  }
  OnclickforgotPassword(){
    console.log("ลืมรหัสผ่าน");
    this.router.navigate(['forgot-password01']);
  }
}
