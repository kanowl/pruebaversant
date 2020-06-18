import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const alertCtrl = document.querySelector('ion-alert-controller');

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { 
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m=> m.LoginPageModule)
  },
  {
    path: 'practice',
    children: [

      { path: 'dictation',
      
        loadChildren: () => import('./dictation/dictation.module').then( m => m.DictationPageModule)
      },
    ]
    
  
  
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
