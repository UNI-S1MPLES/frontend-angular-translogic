import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTramosComponent } from './add-edit-tramos.component';

describe('AddEditTramosComponent', () => {
  let component: AddEditTramosComponent;
  let fixture: ComponentFixture<AddEditTramosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTramosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditTramosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
