import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoRomantic02PageRoutingModule } from './video-romantic02-routing.module';

import { VideoRomantic02Page } from './video-romantic02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoRomantic02PageRoutingModule
  ],
  declarations: [VideoRomantic02Page]
})
export class VideoRomantic02PageModule {}
