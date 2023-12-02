import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoCartoon001Page } from './video-cartoon001.page';

describe('VideoCartoon001Page', () => {
  let component: VideoCartoon001Page;
  let fixture: ComponentFixture<VideoCartoon001Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VideoCartoon001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
