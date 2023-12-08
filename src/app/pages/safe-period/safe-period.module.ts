import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SafePeriodPageRoutingModule } from './safe-period-routing.module';

import { SafePeriodPage } from './safe-period.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SafePeriodPageRoutingModule
  ],
  declarations: [SafePeriodPage]
})
export class SafePeriodPageModule {}
