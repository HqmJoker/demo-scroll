import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index.component';
import { ComponentsModule } from 'src/components/components.module';
import { DirectionsModule } from 'src/directions/directions.module';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    DirectionsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IndexComponent]
})
export class IndexModule {}
