import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerLevelDistributionChartComponent } from './player-level-distribution-chart.component';

describe('PlayerLevelDistributionChartComponent', () => {
  let component: PlayerLevelDistributionChartComponent;
  let fixture: ComponentFixture<PlayerLevelDistributionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerLevelDistributionChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerLevelDistributionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
