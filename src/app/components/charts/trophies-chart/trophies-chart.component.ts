import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-trophies-chart',
  standalone: true,
  templateUrl: './trophies-chart.component.html',
  styleUrls: ['./trophies-chart.component.scss']
})
export class TrophiesChartComponent implements AfterViewInit {
  @ViewChild('trophiesChart') chartRef!: ElementRef<HTMLCanvasElement>;
  @Input() labels: any;
  @Input() data: any;

  constructor() { }

  ngAfterViewInit() {
    this.renderChart();
  }

  renderChart() {
    const canvas = this.chartRef.nativeElement;
    const context = canvas.getContext('2d');
    if (!context) {
      console.error('Failed to get canvas context');
      return;
    }

    new Chart(context, {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'Number of trophies',
          data: this.data,
          borderWidth: 1,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
