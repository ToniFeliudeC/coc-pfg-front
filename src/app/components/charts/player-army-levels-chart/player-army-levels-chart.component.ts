import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-player-army-levels-chart',
  standalone: true,
  templateUrl: './player-army-levels-chart.component.html',
  styleUrls: ['./player-army-levels-chart.component.scss']
})
export class PlayerArmyLevelsChartComponent implements AfterViewInit {
  @ViewChild('playerArmyLevelsChart') chartRef!: ElementRef<HTMLCanvasElement>;
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

    const troopLevels = this.playerData.troops.map((troop: any) => troop.level);
    const spellLevels = this.playerData.spells.map((spell: any) => spell.level);
    const heroLevels = this.playerData.heroes.map((hero: any) => hero.level);

    const troopNames = this.playerData.troops.map((troop: any) => troop.name);
    const spellNames = this.playerData.spells.map((spell: any) => spell.name);
    const heroNames = this.playerData.heroes.map((hero: any) => hero.name);

    const labels = [...troopNames, ...spellNames, ...heroNames];
    const levels = [...troopLevels, ...spellLevels, ...heroLevels];

    const troopCount = troopLevels.length;
    const spellCount = spellLevels.length;

    new Chart(context, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Levels',
            data: levels,
            backgroundColor: levels.map((_: any, index: number) => {
              if (index < troopCount) {
                return 'rgba(75, 192, 192, 0.7)';
              } else if (index < troopCount + spellCount) {
                return 'rgba(153, 102, 255, 0.7)';
              } else {
                return 'rgba(255, 159, 64, 0.7)';
              }
            }),
            borderColor: levels.map((_: any, index: number) => {
              if (index < troopCount) {
                return 'rgba(75, 192, 192, 1)';
              } else if (index < troopCount + spellCount) {
                return 'rgba(153, 102, 255, 1)';
              } else {
                return 'rgba(255, 159, 64, 1)';
              }
            }),
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Troops, Spells, and Heroes'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Level'
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `${context.label}: Level ${context.raw}`;
              }
            }
          }
        }
      }
    });
  }
}
