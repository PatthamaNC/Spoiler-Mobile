import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyMoviesTwoPageRoutingModule } from './my-movies-two-routing.module';

import { MyMoviesTwoPage } from './my-movies-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyMoviesTwoPageRoutingModule
  ],
  declarations: [MyMoviesTwoPage]
})
export class MyMoviesTwoPageModule {}
