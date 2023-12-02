import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsUser02Page } from './tabs-user02.page';

const routes: Routes = [
  {
    path: '',
    component: TabsUser02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsUser02PageRoutingModule {}
