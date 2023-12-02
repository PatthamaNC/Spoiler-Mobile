import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showhome(){
    console.log("home")
  }
  showreview(){
    console.log("review")
  }
  showsearch(){
    console.log("list-spoiler")
  }
  showprofile(){
    console.log("profile")
  }

}
