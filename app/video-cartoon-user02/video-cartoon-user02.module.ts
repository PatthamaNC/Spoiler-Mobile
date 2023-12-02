import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoCartoonUser02PageRoutingModule } from './video-cartoon-user02-routing.module';

import { VideoCartoonUser02Page } from './video-cartoon-user02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoCartoonUser02PageRoutingModule
  ],
  declarations: [VideoCartoonUser02Page]
})
export class VideoCartoonUser02PageModule {}
