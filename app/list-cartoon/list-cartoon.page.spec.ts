import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCartoonPage } from './list-cartoon.page';

describe('ListCartoonPage', () => {
  let component: ListCartoonPage;
  let fixture: ComponentFixture<ListCartoonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListCartoonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
