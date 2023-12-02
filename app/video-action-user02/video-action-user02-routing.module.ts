import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoActionUser02Page } from './video-action-user02.page';

const routes: Routes = [
  {
    path: '',
    component: VideoActionUser02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoActionUser02PageRoutingModule {}
