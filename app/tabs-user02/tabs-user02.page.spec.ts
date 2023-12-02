import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { TabsUser02Page } from './tabs-user02.page';

describe('TabsUser02Page', () => {
  let component: TabsUser02Page;
  let fixture: ComponentFixture<TabsUser02Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabsUser02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
