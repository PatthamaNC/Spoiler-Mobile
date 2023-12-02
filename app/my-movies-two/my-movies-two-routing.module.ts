import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyMoviesTwoPage } from './my-movies-two.page';

const routes: Routes = [
  {
    path: '',
    component: MyMoviesTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyMoviesTwoPageRoutingModule {}
