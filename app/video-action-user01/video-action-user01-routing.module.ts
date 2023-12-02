import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoActionUser01Page } from './video-action-user01.page';

const routes: Routes = [
  {
    path: '',
    component: VideoActionUser01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoActionUser01PageRoutingModule {}
