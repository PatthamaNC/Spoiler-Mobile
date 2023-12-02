import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListHorrorDetailPage } from './list-horror-detail.page';

describe('ListHorrorDetailPage', () => {
  let component: ListHorrorDetailPage;
  let fixture: ComponentFixture<ListHorrorDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListHorrorDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
