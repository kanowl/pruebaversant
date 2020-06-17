import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DictationPage } from './dictation.page';

const routes: Routes = [
  {
    path: '',
    component: DictationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DictationPageRoutingModule {}
