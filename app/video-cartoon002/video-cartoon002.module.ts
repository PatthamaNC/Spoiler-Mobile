import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoCartoon002PageRoutingModule } from './video-cartoon002-routing.module';

import { VideoCartoon002Page } from './video-cartoon002.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoCartoon002PageRoutingModule
  ],
  declarations: [VideoCartoon002Page]
})
export class VideoCartoon002PageModule {}
