import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoHorrorUser01PageRoutingModule } from './video-horror-user01-routing.module';

import { VideoHorrorUser01Page } from './video-horror-user01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoHorrorUser01PageRoutingModule
  ],
  declarations: [VideoHorrorUser01Page]
})
export class VideoHorrorUser01PageModule {}
