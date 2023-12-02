import { TestBed } from '@angular/core/testing';

import { VideoCartoonService } from './video-cartoon.service';

describe('VideoCartoonService', () => {
  let service: VideoCartoonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoCartoonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
