import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsUser01Page } from './tabs-user01.page';

describe('TabsUser01Page', () => {
  let component: TabsUser01Page;
  let fixture: ComponentFixture<TabsUser01Page>;

  beforeEach((() => {
    fixture = TestBed.createComponent(TabsUser01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
