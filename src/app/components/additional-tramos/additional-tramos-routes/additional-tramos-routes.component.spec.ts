import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalTramosRoutesComponent } from './additional-tramos-routes.component';

describe('AdditionalTramosRoutesComponent', () => {
  let component: AdditionalTramosRoutesComponent;
  let fixture: ComponentFixture<AdditionalTramosRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalTramosRoutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalTramosRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
