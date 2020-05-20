import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollTitleComponent } from './scroll/scroll-title/scroll-title.component';
import { ScrollContentComponent } from './scroll/scroll-content/scroll-content.component';

@NgModule({
  declarations: [
    ScrollTitleComponent,
    ScrollContentComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScrollTitleComponent,
    ScrollContentComponent,
  ]
})
export class ComponentsModule { }
