import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalAdminsRoutesComponent } from './additional-admins-routes.component';

describe('AdditionalAdminsRoutesComponent', () => {
  let component: AdditionalAdminsRoutesComponent;
  let fixture: ComponentFixture<AdditionalAdminsRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalAdminsRoutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalAdminsRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
