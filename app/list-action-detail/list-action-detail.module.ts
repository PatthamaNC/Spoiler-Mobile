import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListActionDetailPageRoutingModule } from './list-action-detail-routing.module';

import { ListActionDetailPage } from './list-action-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListActionDetailPageRoutingModule
  ],
  declarations: [ListActionDetailPage]
})
export class ListActionDetailPageModule {}
