import { TestBed } from '@angular/core/testing';

import { ProductoDataService } from './producto-data.service';

describe('ProductoDataService', () => {
  let service: ProductoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
