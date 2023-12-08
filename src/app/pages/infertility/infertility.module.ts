import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfertilityPageRoutingModule } from './infertility-routing.module';

import { InfertilityPage } from './infertility.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfertilityPageRoutingModule
  ],
  declarations: [InfertilityPage]
})
export class InfertilityPageModule {}
