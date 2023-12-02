import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileTwoPage } from './profile-two.page';

describe('ProfileTwoPage', () => {
  let component: ProfileTwoPage;
  let fixture: ComponentFixture<ProfileTwoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfileTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
