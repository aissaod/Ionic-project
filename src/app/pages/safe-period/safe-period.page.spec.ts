import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SafePeriodPage } from './safe-period.page';

describe('SafePeriodPage', () => {
  let component: SafePeriodPage;
  let fixture: ComponentFixture<SafePeriodPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SafePeriodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
