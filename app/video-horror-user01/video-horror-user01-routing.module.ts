import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoHorrorUser01Page } from './video-horror-user01.page';

const routes: Routes = [
  {
    path: '',
    component: VideoHorrorUser01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoHorrorUser01PageRoutingModule {}
