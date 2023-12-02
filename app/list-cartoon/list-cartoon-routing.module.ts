import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCartoonPage } from './list-cartoon.page';

const routes: Routes = [
  {
    path: '',
    component: ListCartoonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCartoonPageRoutingModule {}
