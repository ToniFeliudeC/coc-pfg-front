import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-league-distribution-chart',
  standalone: true,
  templateUrl: './league-distribution-chart.component.html',
  styleUrls: ['./league-distribution-chart.component.scss']
})
export class LeaguesDistributionChartComponent implements AfterViewInit {
  @ViewChild('leaguesDistributionChart') chartRef!: ElementRef<HTMLCanvasElement>;
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

    const leagueCounts = this.getLeagueCounts();
    const labels = Object.keys(leagueCounts);
    const data = Object.values(leagueCounts);

    new Chart(context, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'League Distribution',
          data: data,
          backgroundColor: this.getColors(data.length),
          borderWidth: 1,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    });
  }

  getLeagueCounts() {
    const leagueCounts: { [key: string]: number } = {};

    this.clanData.memberList.forEach((member: any) => {
      const leagueName = member.league.name;
      if (leagueCounts[leagueName]) {
        leagueCounts[leagueName]++;
      } else {
        leagueCounts[leagueName] = 1;
      }
    });

    return leagueCounts;
  }

  getColors(count: number) {
    const colors = [
      'rgba(255, 99, 132, 0.7)',
      'rgba(54, 162, 235, 0.7)',
      'rgba(255, 206, 86, 0.7)',
      'rgba(75, 192, 192, 0.7)',
      'rgba(153, 102, 255, 0.7)',
      'rgba(255, 159, 64, 0.7)',
      'rgba(199, 199, 199, 0.7)',
      'rgba(83, 102, 255, 0.7)',
      'rgba(140, 159, 64, 0.7)',
    ];

    // Repeat colors if there are more leagues than colors
    return Array(count).fill(colors).flat().slice(0, count);
  }
}
