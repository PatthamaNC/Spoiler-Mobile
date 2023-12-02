import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsUser01PageRoutingModule } from './tabs-user01-routing.module';

import { TabsUser01Page } from './tabs-user01.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsUser01PageRoutingModule
  ],
  declarations: [TabsUser01Page],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class TabsUser01PageModule {}
