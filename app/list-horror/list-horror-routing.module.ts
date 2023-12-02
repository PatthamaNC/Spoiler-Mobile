import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListHorrorPage } from './list-horror.page';

const routes: Routes = [
  {
    path: '',
    component: ListHorrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListHorrorPageRoutingModule {}
