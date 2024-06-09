import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-roles-comparison-chart',
  standalone: true,
  templateUrl: './roles-comparison-chart.component.html',
  styleUrls: ['./roles-comparison-chart.component.scss']
})
export class RolesComparisonChartComponent implements AfterViewInit {
  @ViewChild('rolesComparisonChart') chartRef!: ElementRef<HTMLCanvasElement>;
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

    const roleStats = this.calculateRoleStats();
    const labels = ['Trophies', 'Donations', 'Experience Level'];

    new Chart(context, {
      type: 'radar',
      data: {
        labels: labels,
        datasets: Object.keys(roleStats).map(role => ({
          label: role,
          data: [roleStats[role as keyof typeof roleStats].averageTrophies, roleStats[role as keyof typeof roleStats].averageDonations, roleStats[role as keyof typeof roleStats].averageExpLevel],
          backgroundColor: this.getColor(role, 0.7),
          borderColor: this.getColor(role, 1),
          borderWidth: 1,
        })),
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            beginAtZero: true,
          }
        }
      }
    });
  }

  calculateRoleStats() {
    const roles: Array<'leader' | 'coLeader' | 'admin' | 'member'> = ['leader', 'coLeader', 'admin', 'member'];
    const roleStats: { [key in typeof roles[number]]: { totalTrophies: number, totalDonations: number, totalExpLevel: number, count: number, averageTrophies: number, averageDonations: number, averageExpLevel: number } } = {
      leader: { totalTrophies: 0, totalDonations: 0, totalExpLevel: 0, count: 0, averageTrophies: 0, averageDonations: 0, averageExpLevel: 0 },
      coLeader: { totalTrophies: 0, totalDonations: 0, totalExpLevel: 0, count: 0, averageTrophies: 0, averageDonations: 0, averageExpLevel: 0 },
      admin: { totalTrophies: 0, totalDonations: 0, totalExpLevel: 0, count: 0, averageTrophies: 0, averageDonations: 0, averageExpLevel: 0 },
      member: { totalTrophies: 0, totalDonations: 0, totalExpLevel: 0, count: 0, averageTrophies: 0, averageDonations: 0, averageExpLevel: 0 }
    };

    this.clanData.memberList.forEach((member: any) => {
      const role = member.role as keyof typeof roleStats;
      if (roleStats[role]) {
        roleStats[role].totalTrophies += member.trophies;
        roleStats[role].totalDonations += member.donations;
        roleStats[role].totalExpLevel += member.expLevel;
        roleStats[role].count++;
      }
    });

    roles.forEach(role => {
      if (roleStats[role].count > 0) {
        roleStats[role].averageTrophies = roleStats[role].totalTrophies / roleStats[role].count;
        roleStats[role].averageDonations = roleStats[role].totalDonations / roleStats[role].count;
        roleStats[role].averageExpLevel = roleStats[role].totalExpLevel / roleStats[role].count;
      }
    });

    return roleStats;
  }

  getColor(role: string, opacity: number) {
    const colors: { [key in 'leader' | 'coLeader' | 'admin' | 'member']: string } = {
      leader: `rgba(255, 99, 132, ${opacity})`,
      coLeader: `rgba(54, 162, 235, ${opacity})`,
      admin: `rgba(255, 206, 86, ${opacity})`,
      member: `rgba(75, 192, 192, ${opacity})`
    };
    return colors[role as keyof typeof colors] || `rgba(199, 199, 199, ${opacity})`;
  }
}
