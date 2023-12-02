import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCartoonDetailPageRoutingModule } from './list-cartoon-detail-routing.module';

import { ListCartoonDetailPage } from './list-cartoon-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCartoonDetailPageRoutingModule
  ],
  declarations: [ListCartoonDetailPage]
})
export class ListCartoonDetailPageModule {}
