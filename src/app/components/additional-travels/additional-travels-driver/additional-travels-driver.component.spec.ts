import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalTravelsDriverComponent } from './additional-travels-driver.component';

describe('AdditionalTravelsDriverComponent', () => {
  let component: AdditionalTravelsDriverComponent;
  let fixture: ComponentFixture<AdditionalTravelsDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalTravelsDriverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalTravelsDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
