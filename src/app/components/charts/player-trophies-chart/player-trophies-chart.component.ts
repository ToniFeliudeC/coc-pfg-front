import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-player-trophies-chart',
  standalone: true,
  templateUrl: './player-trophies-chart.component.html',
  styleUrls: ['./player-trophies-chart.component.scss']
})
export class PlayerTrophiesChartComponent implements AfterViewInit {
  @ViewChild('playerTrophiesChart') chartRef!: ElementRef<HTMLCanvasElement>;
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

    const labels = ['Current Trophies', 'Best Trophies'];
    const trophiesData = [this.playerData.trophies, this.playerData.bestTrophies];

    new Chart(context, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Trophies',
            data: trophiesData,
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.7)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Trophies Type'
            },
            stacked: false
          },
          y: {
            title: {
              display: true,
              text: 'Number of Trophies'
            },
            beginAtZero: true,
            stacked: false
          }
        }
      }
    });
  }
}
