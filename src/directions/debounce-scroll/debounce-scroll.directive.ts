import { Directive, OnInit, OnDestroy, Output, EventEmitter, Input, HostListener } from '@angular/core';
import { Subject,Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Directive({
  selector: '[appDebounceScroll]'
})
export class DebounceScrollDirective implements OnInit, OnDestroy {
  private subject = new Subject<any>();
  private subscription : Subscription;
  @Output() handleScroll = new EventEmitter();
  @Input('appDebounceScroll') debounceTime = 500;

  constructor() { 
  }

  @HostListener('scroll')
  ScrollEvent() {
    this.subject.next(event);
  }

  ngOnInit(){
    this.subscription = this.subject.pipe(
      debounceTime(Number(this.debounceTime))
    ).subscribe((e)=>{this.handleScroll.emit(e)});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
