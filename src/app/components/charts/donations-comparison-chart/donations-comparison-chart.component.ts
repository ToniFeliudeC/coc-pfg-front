import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-donations-comparison-chart',
  standalone: true,
  templateUrl: './donations-comparison-chart.component.html',
  styleUrls: ['./donations-comparison-chart.component.scss']
})
export class DonationsComparisonChartComponent implements AfterViewInit {
  @ViewChild('donationsComparisonChart') chartRef!: ElementRef<HTMLCanvasElement>;
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

    const labels = this.clanData.memberList.map((member: any) => member.name);
    const donationsGiven = this.clanData.memberList.map((member: any) => member.donations);
    const donationsReceived = this.clanData.memberList.map((member: any) => member.donationsReceived);

    new Chart(context, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Donations Given',
            data: donationsGiven,
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          },
          {
            label: 'Donations Received',
            data: donationsReceived,
            backgroundColor: 'rgba(255, 99, 132, 0.7)',
            borderColor: 'rgba(255, 99, 132, 1)',
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
              text: 'Player'
            },
            stacked: false
          },
          y: {
            title: {
              display: true,
              text: 'Number of Donations'
            },
            beginAtZero: true,
            stacked: false
          }
        }
      }
    });
  }
}
