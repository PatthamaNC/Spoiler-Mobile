import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoRomanticUser01Page } from './video-romantic-user01.page';

describe('VideoRomanticUser01Page', () => {
  let component: VideoRomanticUser01Page;
  let fixture: ComponentFixture<VideoRomanticUser01Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VideoRomanticUser01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
