import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCartoonDetailPage } from './list-cartoon-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ListCartoonDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCartoonDetailPageRoutingModule {}
