import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { RegisterMemberPageRoutingModule } from './register-member-routing.module';

import { RegisterMemberPage } from './register-member.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterMemberPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterMemberPage]
})
export class RegisterMemberPageModule {}
