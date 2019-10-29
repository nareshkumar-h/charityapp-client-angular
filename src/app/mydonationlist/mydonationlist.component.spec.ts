import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydonationlistComponent } from './mydonationlist.component';

describe('MydonationlistComponent', () => {
  let component: MydonationlistComponent;
  let fixture: ComponentFixture<MydonationlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydonationlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydonationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
