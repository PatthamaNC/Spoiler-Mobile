import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CheckPasswordPage } from './check-password.page';

describe('CheckPasswordPage', () => {
  let component: CheckPasswordPage;
  let fixture: ComponentFixture<CheckPasswordPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CheckPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
