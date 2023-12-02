import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Comment01Page } from './comment01.page';

const routes: Routes = [
  {
    path: '',
    component: Comment01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Comment01PageRoutingModule {}
