import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoActionUser01Page } from './video-action-user01.page';

describe('VideoActionUser01Page', () => {
  let component: VideoActionUser01Page;
  let fixture: ComponentFixture<VideoActionUser01Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VideoActionUser01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
