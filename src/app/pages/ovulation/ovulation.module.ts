import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OvulationPageRoutingModule } from './ovulation-routing.module';

import { OvulationPage } from './ovulation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OvulationPageRoutingModule
  ],
  declarations: [OvulationPage]
})
export class OvulationPageModule {}
