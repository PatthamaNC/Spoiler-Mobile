import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoHorror01Page } from './video-horror01.page';

const routes: Routes = [
  {
    path: '',
    component: VideoHorror01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoHorror01PageRoutingModule {}
