import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'grupos-exame/:id',
    loadChildren: () => import('./grupos-exame/grupos-exame.module').then( m => m.GruposExamePageModule)
  },
  {
    path: 'exames/:grupo',
    loadChildren: () => import('./exames/exames.module').then( m => m.ExamesPageModule)
  },
  {
    path: 'detalhe-exame/:id',
    loadChildren: () => import('./detalhe-exame/detalhe-exame.module').then( m => m.DetalheExamePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
