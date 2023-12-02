import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPassword03Page } from './forgot-password03.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPassword03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPassword03PageRoutingModule {}
