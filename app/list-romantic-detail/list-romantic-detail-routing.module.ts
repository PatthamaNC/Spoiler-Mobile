import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListRomanticDetailPage } from './list-romantic-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ListRomanticDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRomanticDetailPageRoutingModule {}
