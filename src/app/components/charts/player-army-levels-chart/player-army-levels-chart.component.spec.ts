import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerArmyLevelsChartComponent } from './player-army-levels-chart.component';

describe('PlayerArmyLevelsChartComponent', () => {
  let component: PlayerArmyLevelsChartComponent;
  let fixture: ComponentFixture<PlayerArmyLevelsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerArmyLevelsChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerArmyLevelsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
