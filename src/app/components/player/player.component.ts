import { Component, Input, OnInit, inject } from "@angular/core";
import { PlayersService } from "../../services/player.service";
import { ActivatedRoute } from "@angular/router";
import { NgClass } from "@angular/common";
import { TroopIconComponent } from "../troop-icon/troop-icon.component";
import { animals } from "./animals";
import { siegeMachines } from "./siege-machines";

@Component({
    selector: 'app-player',
    standalone: true,
    templateUrl: './player.component.html',
    styleUrl: './player.component.scss',
    imports: [NgClass, TroopIconComponent]
})
export class PlayerComponent implements OnInit {

  @Input() playerTag: string = '';

  private playersService: PlayersService = inject(PlayersService);
  private route: ActivatedRoute = inject(ActivatedRoute);
  animalsNames = animals;
  siegeMachinesNames = siegeMachines;
  hasAnimals = false;
  hasSiegeMachines = false;

  playerData: any;

  ngOnInit() {
    this.route.paramMap.subscribe((params: { get: (arg0: string) => any; }) => {
      const playerTag = params.get('playerTag');
      if (playerTag) {
        this.playerTag = playerTag;
        this.loadPlayer();
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

  getTownhallImagePath(): string {
    const townHallLevel = String(this.playerData.townHallLevel);
    const townHallWeaponLevel = String(this.playerData.townHallWeaponLevel);
   
    return  "../../../assets/townhalls/" + townHallLevel + "." + townHallWeaponLevel + ".png";  
  }

  loadPlayer() {
    this.playersService.getPlayer(this.playerTag).subscribe((player: any) => {
      this.playerData = player;
      console.log(this.playerData);
    });
  }
}
