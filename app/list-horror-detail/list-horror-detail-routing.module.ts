import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListHorrorDetailPage } from './list-horror-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ListHorrorDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListHorrorDetailPageRoutingModule {}
