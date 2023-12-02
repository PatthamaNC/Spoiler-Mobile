import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewUserPage } from './review-user.page';

describe('ReviewUserPage', () => {
  let component: ReviewUserPage;
  let fixture: ComponentFixture<ReviewUserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReviewUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
