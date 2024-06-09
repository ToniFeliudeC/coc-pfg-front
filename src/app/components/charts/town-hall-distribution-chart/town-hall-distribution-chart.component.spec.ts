import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TownHallDistributionChartComponent } from './town-hall-distribution-chart.component';

describe('TownHallDistributionChartComponent', () => {
  let component: TownHallDistributionChartComponent;
  let fixture: ComponentFixture<TownHallDistributionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TownHallDistributionChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TownHallDistributionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
