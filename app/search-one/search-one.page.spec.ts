import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchOnePage } from './search-one.page';

describe('SearchOnePage', () => {
  let component: SearchOnePage;
  let fixture: ComponentFixture<SearchOnePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SearchOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
