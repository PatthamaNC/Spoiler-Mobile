import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoCartoonUser01Page } from './video-cartoon-user01.page';

const routes: Routes = [
  {
    path: '',
    component: VideoCartoonUser01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoCartoonUser01PageRoutingModule {}
