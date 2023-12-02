import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListRomanticPageRoutingModule } from './list-romantic-routing.module';

import { ListRomanticPage } from './list-romantic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListRomanticPageRoutingModule
  ],
  declarations: [ListRomanticPage]
})
export class ListRomanticPageModule {}
