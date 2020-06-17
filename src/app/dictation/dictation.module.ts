import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DictationPageRoutingModule } from './dictation-routing.module';

import { DictationPage } from './dictation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DictationPageRoutingModule
  ],
  declarations: [DictationPage]
})
export class DictationPageModule {}
