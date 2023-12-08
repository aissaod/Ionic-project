import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'mens-cycle',
    loadChildren: () => import('./pages/mens-cycle/mens-cycle.module').then( m => m.MensCyclePageModule)
  },
  {
    path: 'ovulation',
    loadChildren: () => import('./pages/ovulation/ovulation.module').then( m => m.OvulationPageModule)
  },
  {
    path: 'safe-period',
    loadChildren: () => import('./pages/safe-period/safe-period.module').then( m => m.SafePeriodPageModule)
  },
  {
    path: 'pregnancy',
    loadChildren: () => import('./pages/pregnancy/pregnancy.module').then( m => m.PregnancyPageModule)
  },
  {
    path: 'infertility',
    loadChildren: () => import('./pages/infertility/infertility.module').then( m => m.InfertilityPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
