import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileTwoPageRoutingModule } from './profile-two-routing.module';

import { ProfileTwoPage } from './profile-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileTwoPageRoutingModule
  ],
  declarations: [ProfileTwoPage]
})
export class ProfileTwoPageModule {}
