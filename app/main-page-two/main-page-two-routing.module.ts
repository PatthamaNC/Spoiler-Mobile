import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageTwoPage } from './main-page-two.page';

const routes: Routes = [
  {
    path: '',
    component: MainPageTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageTwoPageRoutingModule {}
