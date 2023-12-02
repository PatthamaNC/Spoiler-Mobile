import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoCartoon001Page } from './video-cartoon001.page';

const routes: Routes = [
  {
    path: '',
    component: VideoCartoon001Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoCartoon001PageRoutingModule {}
