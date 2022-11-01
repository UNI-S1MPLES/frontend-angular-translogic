import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRoutesComponent } from './add-edit-routes.component';

describe('AddEditRoutesComponent', () => {
  let component: AddEditRoutesComponent;
  let fixture: ComponentFixture<AddEditRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditRoutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
