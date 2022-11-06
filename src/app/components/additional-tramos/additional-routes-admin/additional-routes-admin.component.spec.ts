import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalRoutesAdminComponent } from './additional-routes-admin.component';

describe('AdditionalRoutesAdminComponent', () => {
  let component: AdditionalRoutesAdminComponent;
  let fixture: ComponentFixture<AdditionalRoutesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalRoutesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalRoutesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
