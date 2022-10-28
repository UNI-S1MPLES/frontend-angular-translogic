import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTramosComponent } from './list-tramos.component';

describe('ListTramosComponent', () => {
  let component: ListTramosComponent;
  let fixture: ComponentFixture<ListTramosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTramosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTramosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
