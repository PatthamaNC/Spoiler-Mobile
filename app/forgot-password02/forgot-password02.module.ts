import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPassword02PageRoutingModule } from './forgot-password02-routing.module';

import { ForgotPassword02Page } from './forgot-password02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPassword02PageRoutingModule
  ],
  declarations: [ForgotPassword02Page]
})
export class ForgotPassword02PageModule {}
