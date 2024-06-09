import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerPerformanceChartComponent } from './player-performance-chart.component';

describe('PlayerPerformanceChartComponent', () => {
  let component: PlayerPerformanceChartComponent;
  let fixture: ComponentFixture<PlayerPerformanceChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerPerformanceChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerPerformanceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
