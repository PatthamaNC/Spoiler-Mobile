import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListSpoilerPage } from './list-spoiler.page';

describe('ListSpoilerPage', () => {
  let component: ListSpoilerPage;
  let fixture: ComponentFixture<ListSpoilerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListSpoilerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
