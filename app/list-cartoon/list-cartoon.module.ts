import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCartoonPageRoutingModule } from './list-cartoon-routing.module';

import { ListCartoonPage } from './list-cartoon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCartoonPageRoutingModule
  ],
  declarations: [ListCartoonPage]
})
export class ListCartoonPageModule {}
