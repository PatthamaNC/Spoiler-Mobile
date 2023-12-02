import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPassword01Page } from './forgot-password01.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPassword01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPassword01PageRoutingModule {}
