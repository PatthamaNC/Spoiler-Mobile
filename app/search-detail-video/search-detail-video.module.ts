import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchDetailVideoPageRoutingModule } from './search-detail-video-routing.module';

import { SearchDetailVideoPage } from './search-detail-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchDetailVideoPageRoutingModule
  ],
  declarations: [SearchDetailVideoPage]
})
export class SearchDetailVideoPageModule {}
