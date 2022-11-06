import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalVehiclesTravelsComponent } from './additional-vehicles-travels.component';

describe('AdditionalVehiclesTravelsComponent', () => {
  let component: AdditionalVehiclesTravelsComponent;
  let fixture: ComponentFixture<AdditionalVehiclesTravelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalVehiclesTravelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalVehiclesTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
