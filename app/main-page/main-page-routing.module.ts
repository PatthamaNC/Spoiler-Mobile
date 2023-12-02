import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPagePage } from './main-page.page';

const routes: Routes = [
  {
    path: '',
    component: MainPagePage,
    children:[
      {
        path: 'main-page-two',
        loadChildren: () => import('../main-page-two/main-page-two.module').then( m => m.MainPageTwoPageModule)
      },
      {
        path: 'review',
        loadChildren: () => import('../review/review.module').then( m => m.ReviewPageModule)
      },
      {
        path: 'list-spoiler',
        loadChildren: () => import('../list-spoiler/list-spoiler.module').then( m => m.ListSpoilerPageModule)
      },
      
      {
        path: 'profile-one',
        loadChildren: () => import('../profile-one/profile-one.module').then( m => m.ProfileOnePageModule)
      },
      {
        path: '',
        redirectTo: 'main-page-two',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPagePageRoutingModule {}
