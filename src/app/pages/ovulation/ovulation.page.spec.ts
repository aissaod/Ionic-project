import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OvulationPage } from './ovulation.page';

describe('OvulationPage', () => {
  let component: OvulationPage;
  let fixture: ComponentFixture<OvulationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OvulationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
