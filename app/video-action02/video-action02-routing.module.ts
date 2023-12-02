import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoAction02Page } from './video-action02.page';

const routes: Routes = [
  {
    path: '',
    component: VideoAction02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoAction02PageRoutingModule {}
