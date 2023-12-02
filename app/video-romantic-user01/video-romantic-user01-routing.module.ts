import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoRomanticUser01Page } from './video-romantic-user01.page';

const routes: Routes = [
  {
    path: '',
    component: VideoRomanticUser01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoRomanticUser01PageRoutingModule {}
