import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoCartoonUser01PageRoutingModule } from './video-cartoon-user01-routing.module';

import { VideoCartoonUser01Page } from './video-cartoon-user01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoCartoonUser01PageRoutingModule
  ],
  declarations: [VideoCartoonUser01Page]
})
export class VideoCartoonUser01PageModule {}
