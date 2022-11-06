import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalTravelsVehicleComponent } from './additional-travels-vehicle.component';

describe('AdditionalTravelsVehicleComponent', () => {
  let component: AdditionalTravelsVehicleComponent;
  let fixture: ComponentFixture<AdditionalTravelsVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalTravelsVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalTravelsVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
