import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditProfileOnePage } from './edit-profile-one.page';

describe('EditProfileOnePage', () => {
  let component: EditProfileOnePage;
  let fixture: ComponentFixture<EditProfileOnePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditProfileOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
