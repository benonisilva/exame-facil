import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GruposExamePageRoutingModule } from './grupos-exame-routing.module';

import { GruposExamePage } from './grupos-exame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GruposExamePageRoutingModule
  ],
  declarations: [GruposExamePage]
})
export class GruposExamePageModule {}
