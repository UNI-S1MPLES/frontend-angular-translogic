import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalRoutesTramosComponent } from './additional-routes-tramos.component';

describe('AdditionalRoutesTramosComponent', () => {
  let component: AdditionalRoutesTramosComponent;
  let fixture: ComponentFixture<AdditionalRoutesTramosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalRoutesTramosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalRoutesTramosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
