import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollTitleComponent } from './scroll-title.component';

describe('ScrollTitleComponent', () => {
  let component: ScrollTitleComponent;
  let fixture: ComponentFixture<ScrollTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
