import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchDetailUserPage } from './search-detail-user.page';

const routes: Routes = [
  {
    path: '',
    component: SearchDetailUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchDetailUserPageRoutingModule {}
