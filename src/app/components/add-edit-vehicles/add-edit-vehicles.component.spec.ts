import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditVehiclesComponent } from './add-edit-vehicles.component';

describe('AddEditVehiclesComponent', () => {
  let component: AddEditVehiclesComponent;
  let fixture: ComponentFixture<AddEditVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditVehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
