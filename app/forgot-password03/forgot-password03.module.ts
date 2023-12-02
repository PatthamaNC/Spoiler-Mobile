import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPassword03PageRoutingModule } from './forgot-password03-routing.module';

import { ForgotPassword03Page } from './forgot-password03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPassword03PageRoutingModule
  ],
  declarations: [ForgotPassword03Page]
})
export class ForgotPassword03PageModule {}
