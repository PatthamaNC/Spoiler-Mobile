import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyMoviesTwoPage } from './my-movies-two.page';

describe('MyMoviesTwoPage', () => {
  let component: MyMoviesTwoPage;
  let fixture: ComponentFixture<MyMoviesTwoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyMoviesTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
