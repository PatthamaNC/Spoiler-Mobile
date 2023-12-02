import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListActionDetailPage } from './list-action-detail.page';

describe('ListActionDetailPage', () => {
  let component: ListActionDetailPage;
  let fixture: ComponentFixture<ListActionDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListActionDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
