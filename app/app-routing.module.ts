import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  // {
  //   path: 'register',
  //   loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  // },
  {
    path: 'main-page',
    loadChildren: () => import('./main-page/main-page.module').then( m => m.MainPagePageModule)
  },
  {
    path: 'search-one/:MovieID',
    loadChildren: () => import('./search-one/search-one.module').then( m => m.SearchOnePageModule)
  },
  {
    path: 'profile-one',
    loadChildren: () => import('./profile-one/profile-one.module').then( m => m.ProfileOnePageModule)
  },
  {
    path: 'my-movies',
    loadChildren: () => import('./my-movies/my-movies.module').then( m => m.MyMoviesPageModule)
  },
  {
    path: 'profile-two',
    loadChildren: () => import('./profile-two/profile-two.module').then( m => m.ProfileTwoPageModule)
  },
  {
    path: 'edit-profile-one',
    loadChildren: () => import('./edit-profile-one/edit-profile-one.module').then( m => m.EditProfileOnePageModule)
  },
  {
    path: 'edit-profile-one/memberID',
    loadChildren: () => import('./edit-profile-one/edit-profile-one.module').then( m => m.EditProfileOnePageModule)
  },
  {
    path: 'my-movies-two',
    loadChildren: () => import('./my-movies-two/my-movies-two.module').then( m => m.MyMoviesTwoPageModule)
  },
  // {
  //   path: 'my-movies-two/:reportID',
  //   loadChildren: () => import('./my-movies-two/my-movies-two.module').then( m => m.MyMoviesTwoPageModule)
  // },repoctcommentID
  {
    path: 'my-movies-two/:MySpoilerDetail',
    loadChildren: () => import('./my-movies-two/my-movies-two.module').then( m => m.MyMoviesTwoPageModule)
  },
  {
    path: 'my-movies-two/:reportcomment',
    loadChildren: () => import('./my-movies-two/my-movies-two.module').then( m => m.MyMoviesTwoPageModule)
  },
  {
    path: 'my-movies-two/:commentID',
    loadChildren: () => import('./my-movies-two/my-movies-two.module').then( m => m.MyMoviesTwoPageModule)
  },
  {
    path: 'edit-my-movies01',
    loadChildren: () => import('./edit-my-movies01/edit-my-movies01.module').then( m => m.EditMyMovies01PageModule)
  },
  {
    path: 'edit-my-movies01/:spoilerID',
    loadChildren: () => import('./edit-my-movies01/edit-my-movies01.module').then( m => m.EditMyMovies01PageModule)
  },
  {
    path: 'comment01/:MovieID',
    loadChildren: () => import('./comment01/comment01.module').then( m => m.Comment01PageModule)
  },
  {
    path: 'video-cartoon001',
    loadChildren: () => import('./video-cartoon001/video-cartoon001.module').then( m => m.VideoCartoon001PageModule)
  },
  // {
  //   path: 'video-cartoon002/:VideoID',
  //   loadChildren: () => import('./video-cartoon002/video-cartoon002.module').then( m => m.VideoCartoon002PageModule)
  // },
  {
    path: 'video-cartoon002/:VideosID',
    loadChildren: () => import('./video-cartoon002/video-cartoon002.module').then( m => m.VideoCartoon002PageModule)
  },
  // {
  //   path: 'comment02',
  //   loadChildren: () => import('./comment02/comment02.module').then( m => m.Comment02PageModule)
  // },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'edit-password',
    loadChildren: () => import('./edit-password/edit-password.module').then( m => m.EditPasswordPageModule)
  },
  {
    path: 'video-action01',
    loadChildren: () => import('./video-action01/video-action01.module').then( m => m.VideoAction01PageModule)
  },
  {
    path: 'video-action02',
    loadChildren: () => import('./video-action02/video-action02.module').then( m => m.VideoAction02PageModule)
  },
  // {
  //   path: 'video-action02/:VideoactionID',
  //   loadChildren: () => import('./video-action02/video-action02.module').then( m => m.VideoAction02PageModule)
  // },
 
  // {
  //   path: 'video-action02/:ReportVDOID',
  //   loadChildren: () => import('./video-action02/video-action02.module').then( m => m.VideoAction02PageModule)
  // },
  {
    path: 'video-action02/:VideosID',
    loadChildren: () => import('./video-action02/video-action02.module').then( m => m.VideoAction02PageModule)
  },
  {
    path: 'video-horror01',
    loadChildren: () => import('./video-horror01/video-horror01.module').then( m => m.VideoHorror01PageModule)
  },
  {
    path: 'video-horror02/:VideosID',
    loadChildren: () => import('./video-horror02/video-horror02.module').then( m => m.VideoHorror02PageModule)
  },
  {
    path: 'video-romantic01',
    loadChildren: () => import('./video-romantic01/video-romantic01.module').then( m => m.VideoRomantic01PageModule)
  },
  {
    path: 'video-romantic02/:VideosID',
    loadChildren: () => import('./video-romantic02/video-romantic02.module').then( m => m.VideoRomantic02PageModule)
  },
  {
    path: 'tabs-user01',
    loadChildren: () => import('./tabs-user01/tabs-user01.module').then( m => m.TabsUser01PageModule)
  },
  {
    path: 'video-action-user01',
    loadChildren: () => import('./video-action-user01/video-action-user01.module').then( m => m.VideoActionUser01PageModule)
  },
  {
    path: 'video-action-user02/:VideoactionID',
    loadChildren: () => import('./video-action-user02/video-action-user02.module').then( m => m.VideoActionUser02PageModule)
  },
  {
    path: 'video-cartoon-user01',
    loadChildren: () => import('./video-cartoon-user01/video-cartoon-user01.module').then( m => m.VideoCartoonUser01PageModule)
  },
  {
    path: 'video-cartoon-user02/:VideoID',
    loadChildren: () => import('./video-cartoon-user02/video-cartoon-user02.module').then( m => m.VideoCartoonUser02PageModule)
  },
  {
    path: 'video-horror-user01',
    loadChildren: () => import('./video-horror-user01/video-horror-user01.module').then( m => m.VideoHorrorUser01PageModule)
  },
  {
    path: 'video-horror-user02/:VideohorrorID',
    loadChildren: () => import('./video-horror-user02/video-horror-user02.module').then( m => m.VideoHorrorUser02PageModule)
  }, 
  {
    path: 'video-romantic-user02/:VideoromanticID',
    loadChildren: () => import('./video-romantic-user02/video-romantic-user02.module').then( m => m.VideoRomanticUser02PageModule)
  },
  {
    path: 'video-romantic-user01',
    loadChildren: () => import('./video-romantic-user01/video-romantic-user01.module').then( m => m.VideoRomanticUser01PageModule)
  },
  {
    path: 'search-detail',
    loadChildren: () => import('./search-detail/search-detail.module').then( m => m.SearchDetailPageModule)
  },
  {
    path: 'search-detail/:MovieID',
    loadChildren: () => import('./search-detail/search-detail.module').then( m => m.SearchDetailPageModule)
  },
  {
    path: 'search-detail/:commentID',
    loadChildren: () => import('./search-detail/search-detail.module').then( m => m.SearchDetailPageModule)
  },
  


  // 
  // {
  //   path: 'main-page-two',
  //   loadChildren: () => import('./main-page-two/main-page-two.module').then( m => m.MainPageTwoPageModule)
  // },
  {
    path: 'review',
    loadChildren: () => import('./review/review.module').then( m => m.ReviewPageModule)
  },
  {
    path: 'forgot-password01',
    loadChildren: () => import('./forgot-password01/forgot-password01.module').then( m => m.ForgotPassword01PageModule)
  },
  {
    path: 'forgot-password02',
    loadChildren: () => import('./forgot-password02/forgot-password02.module').then( m => m.ForgotPassword02PageModule)
  },
  {
    path: 'forgot-password03',
    loadChildren: () => import('./forgot-password03/forgot-password03.module').then( m => m.ForgotPassword03PageModule)
  },
  {
    path: 'forgot-password04',
    loadChildren: () => import('./forgot-password04/forgot-password04.module').then( m => m.ForgotPassword04PageModule)
  },
  // {
  //   path: 'check-password',
  //   loadChildren: () => import('./check-password/check-password.module').then( m => m.CheckPasswordPageModule)
  // },
  {
    path: 'search-detail-video',
    loadChildren: () => import('./search-detail-video/search-detail-video.module').then( m => m.SearchDetailVideoPageModule)
  },
  {
    path: 'search-detail-video/:VideosREID',
    loadChildren: () => import('./search-detail-video/search-detail-video.module').then( m => m.SearchDetailVideoPageModule)
  },
  {
    path: 'test02',
    loadChildren: () => import('./test02/test02.module').then( m => m.Test02PageModule)
  },
  {
    path: 'test02/:VideosID',
    loadChildren: () => import('./test02/test02.module').then( m => m.Test02PageModule)
  },
  {
    path: 'test02/:VideosREID',
    loadChildren: () => import('./test02/test02.module').then( m => m.Test02PageModule)
  },
  {
    path: 'test02/:commentID',
    loadChildren: () => import('./test02/test02.module').then( m => m.Test02PageModule)
  },
  {
    path: 'search-detail-user',
    loadChildren: () => import('./search-detail-user/search-detail-user.module').then( m => m.SearchDetailUserPageModule)
  },
  {
    path: 'search-detail-user/:MovieID',
    loadChildren: () => import('./search-detail-user/search-detail-user.module').then( m => m.SearchDetailUserPageModule)
  },
  {
    path: 'test03',
    loadChildren: () => import('./test03/test03.module').then( m => m.Test03PageModule)
  },
  {
    path: 'register-member',
    loadChildren: () => import('./register-member/register-member.module').then( m => m.RegisterMemberPageModule)
  },
  {
    path: 'registers',
    loadChildren: () => import('./registers/registers.module').then( m => m.RegistersPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'search-one',
    loadChildren: () => import('./search-one/search-one.module').then( m => m.SearchOnePageModule)
  },
  {
    path: 'list-action',
    loadChildren: () => import('./list-action/list-action.module').then( m => m.ListActionPageModule)
  },
  {
    path: 'spoiler-detail',
    loadChildren: () => import('./spoiler-detail/spoiler-detail.module').then( m => m.SpoilerDetailPageModule)
  },
  {
    path: 'list-action-detail',
    loadChildren: () => import('./list-action-detail/list-action-detail.module').then( m => m.ListActionDetailPageModule)
  },
  {
    path: 'list-action-detail/:ListSpoilerID',
    loadChildren: () => import('./list-action-detail/list-action-detail.module').then( m => m.ListActionDetailPageModule)
  },
  {
    path: 'review-user',
    loadChildren: () => import('./review-user/review-user.module').then( m => m.ReviewUserPageModule)
  },
  {
    path: 'list-horror',
    loadChildren: () => import('./list-horror/list-horror.module').then( m => m.ListHorrorPageModule)
  },
  {
    path: 'list-horror-detail/:ListSpoilerID',
    loadChildren: () => import('./list-horror-detail/list-horror-detail.module').then( m => m.ListHorrorDetailPageModule)
  },
  {
    path: 'list-cartoon',
    loadChildren: () => import('./list-cartoon/list-cartoon.module').then( m => m.ListCartoonPageModule)
  },
  {
    path: 'list-cartoon-detail/:ListSpoilerID',
    loadChildren: () => import('./list-cartoon-detail/list-cartoon-detail.module').then( m => m.ListCartoonDetailPageModule)
  },
  {
    path: 'list-romantic',
    loadChildren: () => import('./list-romantic/list-romantic.module').then( m => m.ListRomanticPageModule)
  },
  {
    path: 'list-romantic-detail/:ListSpoilerID',
    loadChildren: () => import('./list-romantic-detail/list-romantic-detail.module').then( m => m.ListRomanticDetailPageModule)
  },
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
