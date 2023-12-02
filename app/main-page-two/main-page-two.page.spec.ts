import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainPageTwoPage } from './main-page-two.page';

describe('MainPageTwoPage', () => {
  let component: MainPageTwoPage;
  let fixture: ComponentFixture<MainPageTwoPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(MainPageTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
