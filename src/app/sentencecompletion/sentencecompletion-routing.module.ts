import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SentencecompletionPage } from './sentencecompletion.page';

const routes: Routes = [
  {
    path: '',
    component: SentencecompletionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SentencecompletionPageRoutingModule {}
