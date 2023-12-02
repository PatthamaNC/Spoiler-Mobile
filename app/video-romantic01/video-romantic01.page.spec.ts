import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoRomantic01Page } from './video-romantic01.page';

describe('VideoRomantic01Page', () => {
  let component: VideoRomantic01Page;
  let fixture: ComponentFixture<VideoRomantic01Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VideoRomantic01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
