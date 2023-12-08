import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OvulationPage } from './ovulation.page';

const routes: Routes = [
  {
    path: '',
    component: OvulationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OvulationPageRoutingModule {}
