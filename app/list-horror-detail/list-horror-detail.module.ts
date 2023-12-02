import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListHorrorDetailPageRoutingModule } from './list-horror-detail-routing.module';

import { ListHorrorDetailPage } from './list-horror-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListHorrorDetailPageRoutingModule
  ],
  declarations: [ListHorrorDetailPage]
})
export class ListHorrorDetailPageModule {}
