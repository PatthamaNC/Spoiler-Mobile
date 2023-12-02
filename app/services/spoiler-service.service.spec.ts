import { TestBed } from '@angular/core/testing';

import { SpoilerServiceService } from './spoiler-service.service';

describe('SpoilerServiceService', () => {
  let service: SpoilerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpoilerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
