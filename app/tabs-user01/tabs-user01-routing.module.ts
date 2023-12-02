import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsUser01Page } from './tabs-user01.page';

const routes: Routes = [
  {
    path: '',
    component: TabsUser01Page,children:[
      {
    path: 'tabs-user02',
    loadChildren: () => import('../tabs-user02/tabs-user02.module').then( m => m.TabsUser02PageModule)
  },

  {
    path: 'search-user',
    loadChildren: () => import('../search-user/search-user.module').then( m => m.SearchUserPageModule)
  },
  {
    path: 'profile-user',
    loadChildren: () => import('../profile-user/profile-user.module').then( m => m.ProfileUserPageModule)
  },
  {
    path: 'home-user',
    loadChildren: () => import('../home-user/home-user.module').then( m => m.HomeUserPageModule)
  },
      {
        path: '',
        redirectTo: 'tabs-user02',
        pathMatch: 'full'
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsUser01PageRoutingModule {}
