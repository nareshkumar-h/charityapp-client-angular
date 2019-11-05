import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRequestorVideoComponent } from './view-requestor-video.component';

describe('ViewRequestorVideoComponent', () => {
  let component: ViewRequestorVideoComponent;
  let fixture: ComponentFixture<ViewRequestorVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRequestorVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRequestorVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
