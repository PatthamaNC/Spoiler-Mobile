import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoAction02PageRoutingModule } from './video-action02-routing.module';

import { VideoAction02Page } from './video-action02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoAction02PageRoutingModule
  ],
  declarations: [VideoAction02Page]
})
export class VideoAction02PageModule {}
