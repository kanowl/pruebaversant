import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SentencebuildsPage } from './sentencebuilds.page';

const routes: Routes = [
  {
    path: '',
    component: SentencebuildsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SentencebuildsPageRoutingModule {}
