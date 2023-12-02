import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoHorror01Page } from './video-horror01.page';

describe('VideoHorror01Page', () => {
  let component: VideoHorror01Page;
  let fixture: ComponentFixture<VideoHorror01Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VideoHorror01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
