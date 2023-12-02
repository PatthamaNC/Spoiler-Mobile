import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoHorror02Page } from './video-horror02.page';

const routes: Routes = [
  {
    path: '',
    component: VideoHorror02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoHorror02PageRoutingModule {}
