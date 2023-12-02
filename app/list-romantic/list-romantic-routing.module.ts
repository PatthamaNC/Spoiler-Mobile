import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListRomanticPage } from './list-romantic.page';

const routes: Routes = [
  {
    path: '',
    component: ListRomanticPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRomanticPageRoutingModule {}
