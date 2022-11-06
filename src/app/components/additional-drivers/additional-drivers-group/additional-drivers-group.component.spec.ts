import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalDriversGroupComponent } from './additional-drivers-group.component';

describe('AdditionalDriversGroupComponent', () => {
  let component: AdditionalDriversGroupComponent;
  let fixture: ComponentFixture<AdditionalDriversGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalDriversGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalDriversGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
