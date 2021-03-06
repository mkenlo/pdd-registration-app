import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetreatantCheckinInfoPageRoutingModule } from './retreatant-checkin-info-routing.module';

import { RetreatantCheckinInfoPage } from './retreatant-checkin-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetreatantCheckinInfoPageRoutingModule
  ],
  declarations: [RetreatantCheckinInfoPage]
})
export class RetreatantCheckinInfoPageModule {}
