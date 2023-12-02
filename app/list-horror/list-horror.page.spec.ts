import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListHorrorPage } from './list-horror.page';

describe('ListHorrorPage', () => {
  let component: ListHorrorPage;
  let fixture: ComponentFixture<ListHorrorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListHorrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
