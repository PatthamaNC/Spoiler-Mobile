import { TestBed } from '@angular/core/testing';

import { ReportVideoService } from './report-video.service';

describe('ReportVideoService', () => {
  let service: ReportVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
