import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { RegistersPageRoutingModule } from './registers-routing.module';

import { RegistersPage } from './registers.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistersPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistersPage]
})
export class RegistersPageModule {}
