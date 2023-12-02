import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListHorrorPageRoutingModule } from './list-horror-routing.module';

import { ListHorrorPage } from './list-horror.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListHorrorPageRoutingModule
  ],
  declarations: [ListHorrorPage]
})
export class ListHorrorPageModule {}
