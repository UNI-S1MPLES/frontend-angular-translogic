import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalAdminsGroupsComponent } from './additional-admins-groups.component';

describe('AdditionalAdminsGroupsComponent', () => {
  let component: AdditionalAdminsGroupsComponent;
  let fixture: ComponentFixture<AdditionalAdminsGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalAdminsGroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalAdminsGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
