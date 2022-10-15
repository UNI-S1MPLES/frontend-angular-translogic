import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTravelsComponent } from './add-edit-travels.component';

describe('AddEditTravelsComponent', () => {
  let component: AddEditTravelsComponent;
  let fixture: ComponentFixture<AddEditTravelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTravelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
