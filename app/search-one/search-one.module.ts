import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchOnePageRoutingModule } from './search-one-routing.module';

import { SearchOnePage } from './search-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchOnePageRoutingModule
  ],
  declarations: [SearchOnePage]
})
export class SearchOnePageModule {}
