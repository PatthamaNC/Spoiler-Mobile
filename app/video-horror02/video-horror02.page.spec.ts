import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoHorror02Page } from './video-horror02.page';

describe('VideoHorror02Page', () => {
  let component: VideoHorror02Page;
  let fixture: ComponentFixture<VideoHorror02Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VideoHorror02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
