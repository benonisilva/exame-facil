import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheExamePageRoutingModule } from './detalhe-exame-routing.module';

import { DetalheExamePage } from './detalhe-exame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheExamePageRoutingModule
  ],
  declarations: [DetalheExamePage]
})
export class DetalheExamePageModule {}
