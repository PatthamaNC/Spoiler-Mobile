import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tabs-user01',
  templateUrl: './tabs-user01.page.html',
  styleUrls: ['./tabs-user01.page.scss'],
})
export class TabsUser01Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  cilckHomeUser(){
    this.router.navigate(['tabs-user02/']);
  }

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
