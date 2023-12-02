import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpoilerDetailPage } from './spoiler-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SpoilerDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpoilerDetailPageRoutingModule {}
