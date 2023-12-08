import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SafePeriodPage } from './safe-period.page';

const routes: Routes = [
  {
    path: '',
    component: SafePeriodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SafePeriodPageRoutingModule {}
