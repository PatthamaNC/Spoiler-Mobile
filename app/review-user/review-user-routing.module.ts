import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewUserPage } from './review-user.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewUserPageRoutingModule {}
