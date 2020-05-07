import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolSlidePage } from './school-slide.page';

const routes: Routes = [
  {
    path: '',
    component: SchoolSlidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolSlidePageRoutingModule {}
