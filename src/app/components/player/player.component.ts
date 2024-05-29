import { Component, Input, OnInit, inject } from "@angular/core";
import { PlayersService } from "../../services/player.service";
import { ActivatedRoute } from "@angular/router";
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [NgClass],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent implements OnInit {

  @Input() playerTag: string = '';

  private playersService: PlayersService = inject(PlayersService);
  private route: ActivatedRoute = inject(ActivatedRoute);

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

  loadPlayer() {
    this.playersService.getPlayer(this.playerTag).subscribe((player: any) => {
      this.playerData = player;
      console.log(this.playerData);
    });
  }
}
