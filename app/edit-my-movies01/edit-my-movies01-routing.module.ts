import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMyMovies01Page } from './edit-my-movies01.page';

const routes: Routes = [
  {
    path: '',
    component: EditMyMovies01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMyMovies01PageRoutingModule {}
