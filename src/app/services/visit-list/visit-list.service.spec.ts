import { TestBed } from '@angular/core/testing';

import { VisitListService } from './visit-list.service';

describe('VisitListService', () => {
  let service: VisitListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
