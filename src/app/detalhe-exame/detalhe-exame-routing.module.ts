import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheExamePage } from './detalhe-exame.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheExamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheExamePageRoutingModule {}
