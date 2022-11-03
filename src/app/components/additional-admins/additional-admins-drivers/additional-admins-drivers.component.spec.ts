import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalAdminsDriversComponent } from './additional-admins-drivers.component';

describe('AdditionalAdminsDriversComponent', () => {
  let component: AdditionalAdminsDriversComponent;
  let fixture: ComponentFixture<AdditionalAdminsDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalAdminsDriversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalAdminsDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
