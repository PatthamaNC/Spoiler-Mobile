import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListSpoilerPage } from './list-spoiler.page';

const routes: Routes = [
  {
    path: '',
    component: ListSpoilerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListSpoilerPageRoutingModule {}
