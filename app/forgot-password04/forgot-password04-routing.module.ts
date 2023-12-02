import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPassword04Page } from './forgot-password04.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPassword04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPassword04PageRoutingModule {}
