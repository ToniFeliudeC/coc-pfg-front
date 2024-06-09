import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrophiesChartComponent } from './trophies-chart.component';

describe('TrophiesChartComponent', () => {
  let component: TrophiesChartComponent;
  let fixture: ComponentFixture<TrophiesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrophiesChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrophiesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
