import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileOnePage } from './profile-one.page';

describe('ProfileOnePage', () => {
  let component: ProfileOnePage;
  let fixture: ComponentFixture<ProfileOnePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfileOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
