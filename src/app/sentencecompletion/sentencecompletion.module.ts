import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SentencecompletionPageRoutingModule } from './sentencecompletion-routing.module';

import { SentencecompletionPage } from './sentencecompletion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SentencecompletionPageRoutingModule
  ],
  declarations: [SentencecompletionPage]
})
export class SentencecompletionPageModule {}
