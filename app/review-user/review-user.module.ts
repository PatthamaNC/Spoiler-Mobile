import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewUserPageRoutingModule } from './review-user-routing.module';

import { ReviewUserPage } from './review-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewUserPageRoutingModule
  ],
  declarations: [ReviewUserPage]
})
export class ReviewUserPageModule {}
