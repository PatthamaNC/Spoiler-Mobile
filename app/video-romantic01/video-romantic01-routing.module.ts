import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoRomantic01Page } from './video-romantic01.page';

const routes: Routes = [
  {
    path: '',
    component: VideoRomantic01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoRomantic01PageRoutingModule {}
