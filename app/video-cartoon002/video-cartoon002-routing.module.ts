import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoCartoon002Page } from './video-cartoon002.page';

const routes: Routes = [
  {
    path: '',
    component: VideoCartoon002Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoCartoon002PageRoutingModule {}
