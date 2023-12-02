import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Comment01PageRoutingModule } from './comment01-routing.module';

import { Comment01Page } from './comment01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Comment01PageRoutingModule
  ],
  declarations: [Comment01Page]
})
export class Comment01PageModule {}
