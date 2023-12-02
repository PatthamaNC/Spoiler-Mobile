import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoRomanticUser01PageRoutingModule } from './video-romantic-user01-routing.module';

import { VideoRomanticUser01Page } from './video-romantic-user01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoRomanticUser01PageRoutingModule
  ],
  declarations: [VideoRomanticUser01Page]
})
export class VideoRomanticUser01PageModule {}
