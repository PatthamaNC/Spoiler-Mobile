import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoHorrorUser02Page } from './video-horror-user02.page';

const routes: Routes = [
  {
    path: '',
    component: VideoHorrorUser02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoHorrorUser02PageRoutingModule {}
