import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clans-tabs',
  standalone: true,
  imports: [NgClass],
  templateUrl: './clans-tabs.component.html',
  styleUrl: './clans-tabs.component.scss'
})
export class ClansTabsComponent {
  
  // Emblem tab
  @Input() emblem: any;
  @Input() clanName: any;
  @Input() clanDescription: any;
  @Input() labels: any;
  @Input() clanWarLeague: any;
  @Input() totalPoints: any;
  @Input() totalBuilderBasePoints: any;
  @Input() clanLocation: any;
  @Input() language: any;
  @Input() type: any;
  @Input() requiredTrophies: any;
  @Input() requiredBuilderBaseTrophies: any;
  @Input() requiredTownHallLevel: any;

  // Details tab
  @Input() warsWon: any;
  @Input() warWinStreak: any;
  @Input() clanLeader: any;
  @Input() warFrequency: any;
  @Input() capitalHallLevel: any;
  @Input() publicWarLog: any;

  selectedTab: number = 0;


  selectTab(index: number) {
    this.selectedTab = index;
  }
}
