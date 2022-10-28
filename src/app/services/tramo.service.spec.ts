import { TestBed } from '@angular/core/testing';

import { TramoService } from './tramo.service';

describe('TramoService', () => {
  let service: TramoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TramoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
