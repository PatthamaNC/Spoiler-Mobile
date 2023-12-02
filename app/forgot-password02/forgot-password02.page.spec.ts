import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgotPassword02Page } from './forgot-password02.page';

describe('ForgotPassword02Page', () => {
  let component: ForgotPassword02Page;
  let fixture: ComponentFixture<ForgotPassword02Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ForgotPassword02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
