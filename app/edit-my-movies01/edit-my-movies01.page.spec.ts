import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditMyMovies01Page } from './edit-my-movies01.page';

describe('EditMyMovies01Page', () => {
  let component: EditMyMovies01Page;
  let fixture: ComponentFixture<EditMyMovies01Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditMyMovies01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
