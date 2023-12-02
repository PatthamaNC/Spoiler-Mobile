import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListActionPageRoutingModule } from './list-action-routing.module';

import { ListActionPage } from './list-action.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListActionPageRoutingModule
  ],
  declarations: [ListActionPage]
})
export class ListActionPageModule {}
