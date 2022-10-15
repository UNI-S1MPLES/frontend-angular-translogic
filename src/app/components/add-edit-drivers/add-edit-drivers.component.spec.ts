import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDriversComponent } from './add-edit-drivers.component';

describe('AddEditDriversComponent', () => {
  let component: AddEditDriversComponent;
  let fixture: ComponentFixture<AddEditDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDriversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
