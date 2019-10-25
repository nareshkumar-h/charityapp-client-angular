import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonortransactionComponent } from './donortransaction.component';

describe('DonortransactionComponent', () => {
  let component: DonortransactionComponent;
  let fixture: ComponentFixture<DonortransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonortransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonortransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
