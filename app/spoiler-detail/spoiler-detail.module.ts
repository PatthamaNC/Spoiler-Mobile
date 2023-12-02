import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpoilerDetailPageRoutingModule } from './spoiler-detail-routing.module';

import { SpoilerDetailPage } from './spoiler-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpoilerDetailPageRoutingModule
  ],
  declarations: [SpoilerDetailPage]
})
export class SpoilerDetailPageModule {}
