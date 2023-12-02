import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListActionPage } from './list-action.page';

const routes: Routes = [
  {
    path: '',
    component: ListActionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListActionPageRoutingModule {}
