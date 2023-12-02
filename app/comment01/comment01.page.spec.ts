import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Comment01Page } from './comment01.page';

describe('Comment01Page', () => {
  let component: Comment01Page;
  let fixture: ComponentFixture<Comment01Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Comment01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
