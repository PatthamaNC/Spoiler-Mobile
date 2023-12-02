import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoHorror02PageRoutingModule } from './video-horror02-routing.module';

import { VideoHorror02Page } from './video-horror02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoHorror02PageRoutingModule
  ],
  declarations: [VideoHorror02Page]
})
export class VideoHorror02PageModule {}
