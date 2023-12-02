import { TestBed } from '@angular/core/testing';

import { VideoRomanticService } from './video-romantic.service';

describe('VideoRomanticService', () => {
  let service: VideoRomanticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoRomanticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
