import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchDetailVideoPage } from './search-detail-video.page';

describe('SearchDetailVideoPage', () => {
  let component: SearchDetailVideoPage;
  let fixture: ComponentFixture<SearchDetailVideoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SearchDetailVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
