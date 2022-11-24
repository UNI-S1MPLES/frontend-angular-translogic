import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalDriversTravelsComponent } from './additional-drivers-travels.component';

describe('AdditionalDriversTravelsComponent', () => {
  let component: AdditionalDriversTravelsComponent;
  let fixture: ComponentFixture<AdditionalDriversTravelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalDriversTravelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalDriversTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
