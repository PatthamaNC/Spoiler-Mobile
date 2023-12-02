import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageTwoPageRoutingModule } from './main-page-two-routing.module';

import { MainPageTwoPage } from './main-page-two.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageTwoPageRoutingModule 
  ],
  declarations: [MainPageTwoPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class MainPageTwoPageModule {}
