import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoHorror01PageRoutingModule } from './video-horror01-routing.module';

import { VideoHorror01Page } from './video-horror01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoHorror01PageRoutingModule
  ],
  declarations: [VideoHorror01Page]
})
export class VideoHorror01PageModule {}
