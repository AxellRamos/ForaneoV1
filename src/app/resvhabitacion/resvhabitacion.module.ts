import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResvhabitacionPageRoutingModule } from './resvhabitacion-routing.module';

import { ResvhabitacionPage } from './resvhabitacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResvhabitacionPageRoutingModule
  ],
  declarations: [ResvhabitacionPage]
})
export class ResvhabitacionPageModule {}
