import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListSpoilerPageRoutingModule } from './list-spoiler-routing.module';

import { ListSpoilerPage } from './list-spoiler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListSpoilerPageRoutingModule
  ],
  declarations: [ListSpoilerPage]
})
export class ListSpoilerPageModule {}
