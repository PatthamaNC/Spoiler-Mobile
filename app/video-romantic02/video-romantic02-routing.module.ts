import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoRomantic02Page } from './video-romantic02.page';

const routes: Routes = [
  {
    path: '',
    component: VideoRomantic02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoRomantic02PageRoutingModule {}
