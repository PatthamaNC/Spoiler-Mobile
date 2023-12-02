import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsUser02PageRoutingModule } from './tabs-user02-routing.module';

import { TabsUser02Page } from './tabs-user02.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsUser02PageRoutingModule
  ],
  declarations: [TabsUser02Page],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class TabsUser02PageModule {}
