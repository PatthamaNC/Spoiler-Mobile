import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgotPassword03Page } from './forgot-password03.page';

describe('ForgotPassword03Page', () => {
  let component: ForgotPassword03Page;
  let fixture: ComponentFixture<ForgotPassword03Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ForgotPassword03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
