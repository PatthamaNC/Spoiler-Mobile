import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPassword02Page } from './forgot-password02.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPassword02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPassword02PageRoutingModule {}
