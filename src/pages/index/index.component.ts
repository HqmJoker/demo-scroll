import { Component, OnInit, ViewChild  } from '@angular/core';
// import { Subscription, Subject } from 'rxjs';
// import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @ViewChild("floorBox", { static: false }) floorNode: any;
  // private scrolls = new Subject();
  // private subscription : Subscription;

  public floor = [
    {"title":"楼层1","content":"内容1"},
    {"title":"楼层2","content":"内容2"},
    {"title":"楼层3","content":"内容3"},
    {"title":"楼层4","content":"内容4"},
    {"title":"楼层5","content":"内容5"},
    {"title":"楼层6","content":"内容6"},
    {"title":"楼层7","content":"内容7"},
    {"title":"楼层8","content":"内容8"},
    {"title":"楼层9","content":"内容9"},
    {"title":"楼层10","content":"内容10"},
    {"title":"楼层11","content":"内容11"},
    {"title":"楼层12","content":"内容12"},
    {"title":"楼层13","content":"内容13"},
    {"title":"楼层14","content":"内容14"},
    {"title":"楼层15","content":"内容15"},
    {"title":"楼层16","content":"内容16"},
    {"title":"楼层17","content":"内容17"},
    {"title":"楼层18","content":"内容18"},
    {"title":"楼层19","content":"内容19"},
    {"title":"楼层20","content":"内容20"}
  ];
  public index = 0;  //保存当前楼层下标

  constructor() { }

  ngOnInit() {
    // this.subscription = this.scrolls.pipe(
    //   debounceTime(15)
    // ).subscribe(e => this.changeFloor(e));
  }
 
  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

  changeFloor(event){
    let offsetH = event.target.offsetHeight;
    let scrollT = event.target.scrollTop;
    let height = event.target.scrollHeight;
    console.log(offsetH);
    console.log(scrollT);
    console.log(height);
    let bottom = height - (scrollT + offsetH);

    this.index = Math.floor(scrollT/this.floorNode.nativeElement.children[0].offsetHeight);
    if(bottom === 0){
      this.index = this.floor.length-1;
    }
  }

  changeContent(index){
    this.index = index;
    this.floorNode.nativeElement.scrollTop = index*this.floorNode.nativeElement.children[0].offsetHeight;
  }
}
