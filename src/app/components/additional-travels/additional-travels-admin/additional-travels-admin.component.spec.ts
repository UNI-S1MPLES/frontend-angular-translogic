import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalTravelsAdminComponent } from './additional-travels-admin.component';

describe('AdditionalTravelsAdminComponent', () => {
  let component: AdditionalTravelsAdminComponent;
  let fixture: ComponentFixture<AdditionalTravelsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalTravelsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalTravelsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
