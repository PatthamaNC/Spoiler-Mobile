import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoRomantic02Page } from './video-romantic02.page';

describe('VideoRomantic02Page', () => {
  let component: VideoRomantic02Page;
  let fixture: ComponentFixture<VideoRomantic02Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VideoRomantic02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
