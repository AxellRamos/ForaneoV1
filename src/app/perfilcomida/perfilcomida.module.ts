import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilcomidaPageRoutingModule } from './perfilcomida-routing.module';

import { PerfilcomidaPage } from './perfilcomida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilcomidaPageRoutingModule
  ],
  declarations: [PerfilcomidaPage]
})
export class PerfilcomidaPageModule {}
