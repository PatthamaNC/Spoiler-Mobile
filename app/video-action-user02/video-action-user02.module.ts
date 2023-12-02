import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoActionUser02PageRoutingModule } from './video-action-user02-routing.module';

import { VideoActionUser02Page } from './video-action-user02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoActionUser02PageRoutingModule
  ],
  declarations: [VideoActionUser02Page]
})
export class VideoActionUser02PageModule {}
