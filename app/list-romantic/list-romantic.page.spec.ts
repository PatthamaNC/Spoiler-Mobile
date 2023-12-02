import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListRomanticPage } from './list-romantic.page';

describe('ListRomanticPage', () => {
  let component: ListRomanticPage;
  let fixture: ComponentFixture<ListRomanticPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListRomanticPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
