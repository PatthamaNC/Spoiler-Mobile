import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCartoonDetailPage } from './list-cartoon-detail.page';

describe('ListCartoonDetailPage', () => {
  let component: ListCartoonDetailPage;
  let fixture: ComponentFixture<ListCartoonDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListCartoonDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
