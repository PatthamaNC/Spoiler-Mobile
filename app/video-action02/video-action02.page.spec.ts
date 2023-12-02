import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoAction02Page } from './video-action02.page';

describe('VideoAction02Page', () => {
  let component: VideoAction02Page;
  let fixture: ComponentFixture<VideoAction02Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VideoAction02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
