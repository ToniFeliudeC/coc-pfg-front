import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueDistributionChartComponent } from './league-distribution-chart.component';

describe('LeagueDistributionChartComponent', () => {
  let component: LeagueDistributionChartComponent;
  let fixture: ComponentFixture<LeagueDistributionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeagueDistributionChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeagueDistributionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
