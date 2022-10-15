import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTravelsComponent } from './list-travels.component';

describe('ListTravelsComponent', () => {
  let component: ListTravelsComponent;
  let fixture: ComponentFixture<ListTravelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTravelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
