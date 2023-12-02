import { TestBed } from '@angular/core/testing';

import { ReportSpoilerService } from './report-spoiler.service';

describe('ReportSpoilerService', () => {
  let service: ReportSpoilerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportSpoilerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
