import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoHorrorUser01Page } from './video-horror-user01.page';

describe('VideoHorrorUser01Page', () => {
  let component: VideoHorrorUser01Page;
  let fixture: ComponentFixture<VideoHorrorUser01Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VideoHorrorUser01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
