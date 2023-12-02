import { TestBed } from '@angular/core/testing';

import { VideoActionService } from './video-action.service';

describe('VideoActionService', () => {
  let service: VideoActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
