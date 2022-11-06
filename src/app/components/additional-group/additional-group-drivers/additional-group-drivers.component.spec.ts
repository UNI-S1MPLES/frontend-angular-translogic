import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalGroupDriversComponent } from './additional-group-drivers.component';

describe('AdditionalGroupDriversComponent', () => {
  let component: AdditionalGroupDriversComponent;
  let fixture: ComponentFixture<AdditionalGroupDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalGroupDriversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalGroupDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
