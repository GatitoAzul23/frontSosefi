import { TestBed } from '@angular/core/testing';

import { AsesoriasServiceService } from './asesorias-service.service';

describe('AsesoriasServiceService', () => {
  let service: AsesoriasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsesoriasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
