import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpoilerDetailPage } from './spoiler-detail.page';

describe('SpoilerDetailPage', () => {
  let component: SpoilerDetailPage;
  let fixture: ComponentFixture<SpoilerDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SpoilerDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
