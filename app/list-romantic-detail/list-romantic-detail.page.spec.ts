import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListRomanticDetailPage } from './list-romantic-detail.page';

describe('ListRomanticDetailPage', () => {
  let component: ListRomanticDetailPage;
  let fixture: ComponentFixture<ListRomanticDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListRomanticDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
