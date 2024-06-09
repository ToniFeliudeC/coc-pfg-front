import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-player-performance-chart',
  standalone: true,
  templateUrl: './player-performance-chart.component.html',
  styleUrls: ['./player-performance-chart.component.scss']
})
export class PlayerPerformanceChartComponent implements AfterViewInit {
  @ViewChild('playerPerformanceChart') chartRef!: ElementRef<HTMLCanvasElement>;
  @Input() playerData: any;

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

    const labels = ['Attack Wins', 'Defense Wins', 'Donations', 'Donations Received'];
    const values = [
      this.playerData.attackWins,
      this.playerData.defenseWins,
      this.playerData.donations,
      this.playerData.donationsReceived
    ];

    new Chart(context, {
      type: 'radar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Player Performance',
            data: values,
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: {
              display: true
            },
            suggestedMin: 0,
            suggestedMax: Math.max(...values) + 10,
            pointLabels: {
              font: {
                size: 14
              }
            }
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function(context) {
                return `${context.label}: ${context.raw}`;
              }
            }
          }
        }
      }
    });
  }
}
