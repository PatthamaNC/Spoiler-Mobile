import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoCartoon001PageRoutingModule } from './video-cartoon001-routing.module';

import { VideoCartoon001Page } from './video-cartoon001.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoCartoon001PageRoutingModule
  ],
  declarations: [VideoCartoon001Page]
})
export class VideoCartoon001PageModule {}
