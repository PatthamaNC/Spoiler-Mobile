import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoRomanticUser02PageRoutingModule } from './video-romantic-user02-routing.module';

import { VideoRomanticUser02Page } from './video-romantic-user02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoRomanticUser02PageRoutingModule
  ],
  declarations: [VideoRomanticUser02Page]
})
export class VideoRomanticUser02PageModule {}
