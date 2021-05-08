import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilcomidaPage } from './perfilcomida.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilcomidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilcomidaPageRoutingModule {}
