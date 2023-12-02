import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterMemberPage } from './register-member.page';

describe('RegisterMemberPage', () => {
  let component: RegisterMemberPage;
  let fixture: ComponentFixture<RegisterMemberPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(RegisterMemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
