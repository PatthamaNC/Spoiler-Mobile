import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProfileOnePage } from './edit-profile-one.page';

const routes: Routes = [
  {
    path: '',
    component: EditProfileOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProfileOnePageRoutingModule {}
