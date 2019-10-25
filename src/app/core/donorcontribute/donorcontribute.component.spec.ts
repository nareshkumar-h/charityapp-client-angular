import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorcontributeComponent } from './donorcontribute.component';

describe('DonorcontributeComponent', () => {
  let component: DonorcontributeComponent;
  let fixture: ComponentFixture<DonorcontributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorcontributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorcontributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
