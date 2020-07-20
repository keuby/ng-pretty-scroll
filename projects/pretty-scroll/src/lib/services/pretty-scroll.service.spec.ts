import { TestBed } from '@angular/core/testing';

import { PrettyScrollService } from './pretty-scroll.service';

describe('PrettyScrollService', () => {
  let service: PrettyScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrettyScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
