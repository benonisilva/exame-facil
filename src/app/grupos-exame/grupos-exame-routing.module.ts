import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GruposExamePage } from './grupos-exame.page';

const routes: Routes = [
  {
    path: '',
    component: GruposExamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GruposExamePageRoutingModule {}
