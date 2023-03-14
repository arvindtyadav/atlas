import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanRouteComponent } from './plan-route.component';

describe('PlanRouteComponent', () => {
  let component: PlanRouteComponent;
  let fixture: ComponentFixture<PlanRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
