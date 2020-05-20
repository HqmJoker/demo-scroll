import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebounceScrollDirective } from './debounce-scroll/debounce-scroll.directive'


@NgModule({
  declarations: [
    DebounceScrollDirective,
  ],
  imports: [
    CommonModule
  ],
  providers:[
  ],
  exports:[
    DebounceScrollDirective,
  ]
})
export class DirectionsModule { }
