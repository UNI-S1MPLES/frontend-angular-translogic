import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalTravelsRouteComponent } from './additional-travels-route.component';

describe('AdditionalTravelsRouteComponent', () => {
  let component: AdditionalTravelsRouteComponent;
  let fixture: ComponentFixture<AdditionalTravelsRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalTravelsRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalTravelsRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
