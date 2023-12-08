import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MensCyclePage } from './mens-cycle.page';

describe('MensCyclePage', () => {
  let component: MensCyclePage;
  let fixture: ComponentFixture<MensCyclePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MensCyclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
