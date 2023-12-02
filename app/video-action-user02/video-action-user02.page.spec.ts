import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoActionUser02Page } from './video-action-user02.page';

describe('VideoActionUser02Page', () => {
  let component: VideoActionUser02Page;
  let fixture: ComponentFixture<VideoActionUser02Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VideoActionUser02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
