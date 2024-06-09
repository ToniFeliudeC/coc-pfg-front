import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTrophiesChartComponent } from './player-trophies-chart.component';

describe('PlayerTrophiesChartComponent', () => {
  let component: PlayerTrophiesChartComponent;
  let fixture: ComponentFixture<PlayerTrophiesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerTrophiesChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerTrophiesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
