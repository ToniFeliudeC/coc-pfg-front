import { Component, Input, OnInit, inject } from "@angular/core";
import { PlayersService } from "../../services/player.service";
import { ActivatedRoute } from "@angular/router";
import { NgClass } from "@angular/common";
import { TroopIconComponent } from "../troop-icon/troop-icon.component";
import { animals } from "./animals";
import { siegeMachines } from "./siege-machines";
import { superTroops } from "./super-troops";
import { AchievementComponent } from "../achievement/achievement.component";
import { PlayerTrophiesChartComponent } from "../charts/player-trophies-chart/player-trophies-chart.component";
import { PlayerPerformanceChartComponent } from "../charts/player-performance-chart/player-performance-chart.component";
import { PlayerArmyLevelsChartComponent } from "../charts/player-army-levels-chart/player-army-levels-chart.component";

@Component({
    selector: 'app-player',
    standalone: true,
    templateUrl: './player.component.html',
    styleUrl: './player.component.scss',
    imports: [NgClass, TroopIconComponent, AchievementComponent, PlayerTrophiesChartComponent, PlayerPerformanceChartComponent, PlayerArmyLevelsChartComponent]
})
export class PlayerComponent implements OnInit {

  @Input() playerTag: string = '';

  private playersService: PlayersService = inject(PlayersService);
  private route: ActivatedRoute = inject(ActivatedRoute);
  animalsNames = animals;
  siegeMachinesNames = siegeMachines;
  superTroopsNames = superTroops;
  hasAnimals = false;
  hasSiegeMachines = false;
  hasSuperTroops = false;

  playerData: any;

  playerHomeAchievements: any;
  playerBuilderBaseAchievements: any;
  playerClanCapitalAchievements: any;

  ngOnInit() {
    this.route.paramMap.subscribe((params: { get: (arg0: string) => any; }) => {
      const playerTag = params.get('playerTag');
      if (playerTag) {
        this.playerTag = playerTag;
        this.loadPlayer();
        this.loadAchivements();
      }
    });
  }

  isAnimal(troopName: string): boolean {
    if (this.animalsNames.some(name => name === troopName)) {
      this.hasAnimals = true;
    }
    return this.animalsNames.some(name => name === troopName);
  }

  isSiegeMachine(troopName: string): boolean {
    if (this.siegeMachinesNames.some(name => name === troopName)) {
      this.hasSiegeMachines = true;
    }
    return this.siegeMachinesNames.some(name => name === troopName);
  }

  isSuperTroop(troopName: string): boolean {
    if (this.superTroopsNames.some(name => name === troopName)) {
      this.hasSuperTroops = true;
    }
    return this.superTroopsNames.some(name => name === troopName);
  }

  getTownhallImagePath(): string {
    const townHallLevel = String(this.playerData.townHallLevel);
    const townHallWeaponLevel = String(this.playerData.townHallWeaponLevel);

    if (townHallWeaponLevel === 'undefined') {
      return "../../../assets/townhalls/" + townHallLevel + ".png";
    }
   
    return  "../../../assets/townhalls/" + townHallLevel + "." + townHallWeaponLevel + ".png";  
  }

  loadPlayer() {
    this.playersService.getPlayer(this.playerTag).subscribe((player: any) => {
      this.playerData = player;
      console.log(this.playerData);
    });
  }

  loadAchivements() {
    this.playersService.getPlayerHomeAchievements(this.playerTag).subscribe((achievements: any) => {
      this.playerHomeAchievements = achievements;;
    })
    this.playersService.getPlayerBuilderBaseAchievements(this.playerTag).subscribe((achievements: any) => {
      this.playerBuilderBaseAchievements = achievements;
    })
    this.playersService.getPlayerHomeAchievements(this.playerTag).subscribe((achievements: any) => {
      this.playerClanCapitalAchievements = achievements;
    })
  }
}
