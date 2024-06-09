import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-player-level-distribution-chart',
  standalone: true,
  templateUrl: './player-level-distribution-chart.component.html',
  styleUrls: ['./player-level-distribution-chart.component.scss']
})
export class PlayerLevelDistributionChartComponent implements AfterViewInit {
  @ViewChild('playerLevelDistributionChart') chartRef!: ElementRef<HTMLCanvasElement>;
  @Input() clanData: any;

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

    const playerLevelStats = this.calculatePlayerLevelStats();
    const labels = Object.keys(playerLevelStats);
    const data = Object.values(playerLevelStats);

    new Chart(context, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Player Levels',
          data: data,
          backgroundColor: 'rgba(75, 192, 192, 0.7)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Experience Level'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Number of Players'
            },
            beginAtZero: true
          }
        }
      }
    });
  }

  calculatePlayerLevelStats() {
    const playerLevelStats: { [key: number]: number } = {};

    this.clanData.memberList.forEach((member: any) => {
      const expLevel = member.expLevel;
      if (playerLevelStats[expLevel]) {
        playerLevelStats[expLevel]++;
      } else {
        playerLevelStats[expLevel] = 1;
      }
    });

    return playerLevelStats;
  }
}
