import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoCartoonUser02Page } from './video-cartoon-user02.page';

const routes: Routes = [
  {
    path: '',
    component: VideoCartoonUser02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoCartoonUser02PageRoutingModule {}
