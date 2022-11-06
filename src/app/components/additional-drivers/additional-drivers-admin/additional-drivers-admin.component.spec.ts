import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalDriversAdminComponent } from './additional-drivers-admin.component';

describe('AdditionalDriversAdminComponent', () => {
  let component: AdditionalDriversAdminComponent;
  let fixture: ComponentFixture<AdditionalDriversAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalDriversAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalDriversAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
