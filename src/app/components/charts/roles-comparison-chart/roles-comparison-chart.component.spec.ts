import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesComparisonChartComponent } from './roles-comparison-chart.component';

describe('RolesComparisonChartComponent', () => {
  let component: RolesComparisonChartComponent;
  let fixture: ComponentFixture<RolesComparisonChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolesComparisonChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RolesComparisonChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
