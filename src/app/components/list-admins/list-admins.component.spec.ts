import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdminsComponent } from './list-admins.component';

describe('ListAdminsComponent', () => {
  let component: ListAdminsComponent;
  let fixture: ComponentFixture<ListAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAdminsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
