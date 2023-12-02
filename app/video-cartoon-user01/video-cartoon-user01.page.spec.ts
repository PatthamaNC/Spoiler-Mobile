import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoCartoonUser01Page } from './video-cartoon-user01.page';

describe('VideoCartoonUser01Page', () => {
  let component: VideoCartoonUser01Page;
  let fixture: ComponentFixture<VideoCartoonUser01Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VideoCartoonUser01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
