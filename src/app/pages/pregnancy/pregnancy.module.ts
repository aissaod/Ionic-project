import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PregnancyPageRoutingModule } from './pregnancy-routing.module';

import { PregnancyPage } from './pregnancy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PregnancyPageRoutingModule
  ],
  declarations: [PregnancyPage]
})
export class PregnancyPageModule {}
