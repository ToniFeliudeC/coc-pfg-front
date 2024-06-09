import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsComparisonChartComponent } from './donations-comparison-chart.component';

describe('DonationsComparisonChartComponent', () => {
  let component: DonationsComparisonChartComponent;
  let fixture: ComponentFixture<DonationsComparisonChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonationsComparisonChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonationsComparisonChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
