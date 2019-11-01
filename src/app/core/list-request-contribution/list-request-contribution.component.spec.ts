import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRequestContributionComponent } from './list-request-contribution.component';

describe('ListRequestContributionComponent', () => {
  let component: ListRequestContributionComponent;
  let fixture: ComponentFixture<ListRequestContributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRequestContributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRequestContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
