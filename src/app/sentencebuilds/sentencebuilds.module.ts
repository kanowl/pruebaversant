import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SentencebuildsPageRoutingModule } from './sentencebuilds-routing.module';

import { SentencebuildsPage } from './sentencebuilds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SentencebuildsPageRoutingModule
  ],
  declarations: [SentencebuildsPage]
})
export class SentencebuildsPageModule {}
