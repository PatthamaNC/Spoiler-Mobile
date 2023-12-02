import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoActionUser01PageRoutingModule } from './video-action-user01-routing.module';

import { VideoActionUser01Page } from './video-action-user01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoActionUser01PageRoutingModule
  ],
  declarations: [VideoActionUser01Page]
})
export class VideoActionUser01PageModule {}
