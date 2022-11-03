import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalAdminsTravelsComponent } from './additional-admins-travels.component';

describe('AdditionalAdminsTravelsComponent', () => {
  let component: AdditionalAdminsTravelsComponent;
  let fixture: ComponentFixture<AdditionalAdminsTravelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalAdminsTravelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalAdminsTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
