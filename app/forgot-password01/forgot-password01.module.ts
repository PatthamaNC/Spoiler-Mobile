import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPassword01PageRoutingModule } from './forgot-password01-routing.module';

import { ForgotPassword01Page } from './forgot-password01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPassword01PageRoutingModule
  ],
  declarations: [ForgotPassword01Page]
})
export class ForgotPassword01PageModule {}
