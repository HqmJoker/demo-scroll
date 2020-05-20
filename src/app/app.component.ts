import { Component,HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kanban';
  
  constructor() { }

  ngOnInit() {
  }

  @HostListener('close')
  ScrollEvent() {
    console.log("test1111");
  }

  @HostListener('drop')
  test1() {
    console.log("1111");
  }
  @HostListener('durationchange')
  test2() {
    console.log("2222");
  }
  @HostListener('emptied')
  test3() {
    console.log("3333");
  }
  @HostListener('ended')
  test4() {
    console.log("4444");
  }
  @HostListener('focus')
  test5() {
    console.log("5555");
  }
  @HostListener('gotpointercapture')
  test6() {
    console.log("666");
  }
  @HostListener('input')
  test7() {
    console.log("777777");
  }
  @HostListener('invalid')
  test8() {
    console.log("8888888");
  }
  @HostListener('keydown')
  test9() {
    console.log("9999999");
  }
  // *keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*seeked,*seeking,*select,*show,*stalled,*submit,*suspend,*timeupdate,*toggle,*volumechange,*waiting,outerText,!spellcheck,%style,#tabIndex,title,!translate',
}
