import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensCyclePageRoutingModule } from './mens-cycle-routing.module';

import { MensCyclePage } from './mens-cycle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensCyclePageRoutingModule
  ],
  declarations: [MensCyclePage]
})
export class MensCyclePageModule {}
