import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoRomanticUser02Page } from './video-romantic-user02.page';

const routes: Routes = [
  {
    path: '',
    component: VideoRomanticUser02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoRomanticUser02PageRoutingModule {}
