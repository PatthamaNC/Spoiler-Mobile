import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchDetailUserPage } from './search-detail-user.page';

describe('SearchDetailUserPage', () => {
  let component: SearchDetailUserPage;
  let fixture: ComponentFixture<SearchDetailUserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SearchDetailUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
