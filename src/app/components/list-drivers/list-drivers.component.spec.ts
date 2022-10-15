import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDriversComponent } from './list-drivers.component';

describe('ListDriversComponent', () => {
  let component: ListDriversComponent;
  let fixture: ComponentFixture<ListDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDriversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
