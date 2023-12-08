import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PregnancyPage } from './pregnancy.page';

describe('PregnancyPage', () => {
  let component: PregnancyPage;
  let fixture: ComponentFixture<PregnancyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PregnancyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
