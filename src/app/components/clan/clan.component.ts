import { Component, Input, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClansService } from '../../services/clan.service';
import { ClansTabsComponent } from '../clans-tabs/clans-tabs.component';
import { ClanPlayerComponent } from '../clan-player/clan-player.component';
import { TrophiesChartComponent } from '../charts/trophies-chart/trophies-chart.component';
import { LeaguesDistributionChartComponent } from '../charts/league-distribution-chart/league-distribution-chart.component';
import { RolesComparisonChartComponent } from '../charts/roles-comparison-chart/roles-comparison-chart.component';
import { TownHallDistributionChartComponent } from '../charts/town-hall-distribution-chart/town-hall-distribution-chart.component';

@Component({
  selector: 'app-clan',
  standalone: true,
  imports: [ClansTabsComponent, ClanPlayerComponent, TrophiesChartComponent, LeaguesDistributionChartComponent, RolesComparisonChartComponent, TownHallDistributionChartComponent],
  templateUrl: './clan.component.html',
  styleUrl: './clan.component.scss'
})
export class ClanComponent implements OnInit {

  @Input() clanTag: string = '';

  private clansService: ClansService = inject(ClansService);
  private route: ActivatedRoute = inject(ActivatedRoute);

  clanData: any;

  ngOnInit() {
    this.route.paramMap.subscribe((params: { get: (arg0: string) => any; }) => {
      const clanTag = params.get('clanTag');
      if (clanTag) {
        this.clanTag = clanTag;
        this.loadClan();
      }
    });
  }

  getLeaderName(): string {
    if (this.clanData && this.clanData.memberList) {
      const leader = this.clanData.memberList.find((member: any) => member.role === 'leader');
      return leader ? leader.name : 'Leader not found';
    }
    return 'Clan data not available';
  }

  getMembersNames(): any {
    return this.clanData?.memberList.map((member: any) => member?.name);
  }

  getMembersTrophies(): any {
    return this.clanData?.memberList.map((member: any) => member?.trophies);
  }

  loadClan() {
    this.clansService.getClan(this.clanTag).subscribe((clan: any) => {
      this.clanData = clan;
      console.log(this.clanData);
    });
  }
}
