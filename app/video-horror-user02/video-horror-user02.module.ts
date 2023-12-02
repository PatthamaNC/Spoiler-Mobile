import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoHorrorUser02PageRoutingModule } from './video-horror-user02-routing.module';

import { VideoHorrorUser02Page } from './video-horror-user02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoHorrorUser02PageRoutingModule
  ],
  declarations: [VideoHorrorUser02Page]
})
export class VideoHorrorUser02PageModule {}
