import { TestBed } from '@angular/core/testing';

import { VideoHorrorService } from './video-horror.service';

describe('VideoHorrorService', () => {
  let service: VideoHorrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoHorrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
