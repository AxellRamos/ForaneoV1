import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilcuartoPageRoutingModule } from './perfilcuarto-routing.module';

import { PerfilcuartoPage } from './perfilcuarto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilcuartoPageRoutingModule
  ],
  declarations: [PerfilcuartoPage]
})
export class PerfilcuartoPageModule {}
