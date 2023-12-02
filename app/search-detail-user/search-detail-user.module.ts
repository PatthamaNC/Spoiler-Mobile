import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchDetailUserPageRoutingModule } from './search-detail-user-routing.module';

import { SearchDetailUserPage } from './search-detail-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchDetailUserPageRoutingModule
  ],
  declarations: [SearchDetailUserPage]
})
export class SearchDetailUserPageModule {}
