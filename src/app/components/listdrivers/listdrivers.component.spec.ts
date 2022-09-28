import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdriversComponent } from './listdrivers.component';

describe('ListdriversComponent', () => {
  let component: ListdriversComponent;
  let fixture: ComponentFixture<ListdriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdriversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListdriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
