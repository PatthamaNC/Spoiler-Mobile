import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProfileOnePageRoutingModule } from './edit-profile-one-routing.module';

import { EditProfileOnePage } from './edit-profile-one.page';
import {  ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProfileOnePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditProfileOnePage]
})
export class EditProfileOnePageModule {}
