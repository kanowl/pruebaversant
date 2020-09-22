import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'achievements',
    loadChildren: () => import('./achievements/achievements.module').then( m => m.AchievementsPageModule)
  },
  {
    path: 'practice',
    loadChildren: () => import('./practice/practice.module').then( m => m.PracticePageModule)
  },
  {
    path: 'dictation',
    loadChildren: () => import('./dictation/dictation.module').then( m => m.DictationPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },  {
    path: 'sentencebuilds',
    loadChildren: () => import('./sentencebuilds/sentencebuilds.module').then( m => m.SentencebuildsPageModule)
  },
  {
    path: 'sentencecompletion',
    loadChildren: () => import('./sentencecompletion/sentencecompletion.module').then( m => m.SentencecompletionPageModule)
  },

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }