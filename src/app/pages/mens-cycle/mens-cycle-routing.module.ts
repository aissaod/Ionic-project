import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensCyclePage } from './mens-cycle.page';

const routes: Routes = [
  {
    path: '',
    component: MensCyclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensCyclePageRoutingModule {}
