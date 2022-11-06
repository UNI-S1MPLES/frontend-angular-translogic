import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalGroupAdminComponent } from './additional-group-admin.component';

describe('AdditionalGroupAdminComponent', () => {
  let component: AdditionalGroupAdminComponent;
  let fixture: ComponentFixture<AdditionalGroupAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalGroupAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalGroupAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
