import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListRomanticDetailPageRoutingModule } from './list-romantic-detail-routing.module';

import { ListRomanticDetailPage } from './list-romantic-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListRomanticDetailPageRoutingModule
  ],
  declarations: [ListRomanticDetailPage]
})
export class ListRomanticDetailPageModule {}
