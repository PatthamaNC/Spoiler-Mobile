import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgotPassword01Page } from './forgot-password01.page';

describe('ForgotPassword01Page', () => {
  let component: ForgotPassword01Page;
  let fixture: ComponentFixture<ForgotPassword01Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ForgotPassword01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
