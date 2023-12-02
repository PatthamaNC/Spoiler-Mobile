import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListActionPage } from './list-action.page';

describe('ListActionPage', () => {
  let component: ListActionPage;
  let fixture: ComponentFixture<ListActionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListActionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
