import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchOnePage } from './search-one.page';

const routes: Routes = [
  {
    path: '',
    component: SearchOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchOnePageRoutingModule {}
