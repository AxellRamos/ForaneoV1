import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfiltaxistaPageRoutingModule } from './perfiltaxista-routing.module';

import { PerfiltaxistaPage } from './perfiltaxista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfiltaxistaPageRoutingModule
  ],
  declarations: [PerfiltaxistaPage]
})
export class PerfiltaxistaPageModule {}
