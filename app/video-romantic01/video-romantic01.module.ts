import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoRomantic01PageRoutingModule } from './video-romantic01-routing.module';

import { VideoRomantic01Page } from './video-romantic01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoRomantic01PageRoutingModule
  ],
  declarations: [VideoRomantic01Page]
})
export class VideoRomantic01PageModule {}
