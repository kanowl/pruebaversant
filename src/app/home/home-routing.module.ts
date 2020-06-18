import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  { path: '',redirectTo: 'home', pathMatch: 'full'},
  { path: '',redirectTo: 'practice',
  loadChildren: './practice/practice.module.ts'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
