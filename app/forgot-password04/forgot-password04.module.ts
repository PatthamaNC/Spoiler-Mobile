import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPassword04PageRoutingModule } from './forgot-password04-routing.module';

import { ForgotPassword04Page } from './forgot-password04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPassword04PageRoutingModule
  ],
  declarations: [ForgotPassword04Page]
})
export class ForgotPassword04PageModule {}
