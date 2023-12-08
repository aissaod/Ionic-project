import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfertilityPage } from './infertility.page';

describe('InfertilityPage', () => {
  let component: InfertilityPage;
  let fixture: ComponentFixture<InfertilityPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfertilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
