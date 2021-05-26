import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfiltaxistaPage } from './perfiltaxista.page';

const routes: Routes = [
  {
    path: '',
    component: PerfiltaxistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfiltaxistaPageRoutingModule {}
