import { TestBed } from '@angular/core/testing';

import { VideoUserService } from './video-user.service';

describe('VideoUserService', () => {
  let service: VideoUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
