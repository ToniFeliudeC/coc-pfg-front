import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-town-hall-distribution-chart',
  standalone: true,
  templateUrl: './town-hall-distribution-chart.component.html',
  styleUrls: ['./town-hall-distribution-chart.component.scss']
})
export class TownHallDistributionChartComponent implements AfterViewInit {
  @ViewChild('townHallDistributionChart') chartRef!: ElementRef<HTMLCanvasElement>;
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

    const townHallStats = this.calculateTownHallStats();
    const labels = Object.keys(townHallStats);
    const data = Object.values(townHallStats);

    new Chart(context, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'Town Hall Levels',
          data: data,
          backgroundColor: this.getColors(labels.length),
          borderWidth: 1,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    });
  }

  calculateTownHallStats() {
    const townHallStats: { [key: number]: number } = {};

    this.clanData.memberList.forEach((member: any) => {
      const townHallLevel = member.townHallLevel;
      if (townHallStats[townHallLevel]) {
        townHallStats[townHallLevel]++;
      } else {
        townHallStats[townHallLevel] = 1;
      }
    });

    return townHallStats;
  }

  getColors(count: number) {
    const colors = [
      'rgba(255, 99, 132, 0.7)',
      'rgba(54, 162, 235, 0.7)',
      'rgba(255, 206, 86, 0.7)',
      'rgba(75, 192, 192, 0.7)',
      'rgba(153, 102, 255, 0.7)',
      'rgba(255, 159, 64, 0.7)',
      'rgba(199, 199, 199, 0.7)'
    ];
    const borderColors = [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(199, 199, 199, 1)'
    ];
    return Array.from({ length: count }, (_, i) => ({
      backgroundColor: colors[i % colors.length],
      borderColor: borderColors[i % borderColors.length]
    })).map(c => c.backgroundColor);
  }
}
