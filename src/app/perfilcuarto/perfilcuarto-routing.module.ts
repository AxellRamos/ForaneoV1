import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilcuartoPage } from './perfilcuarto.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilcuartoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilcuartoPageRoutingModule {}
