import { Component, Input, OnInit, inject } from '@angular/core';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent implements OnInit {

  @Input() playerTag: string = '';

  private playerService = inject(PlayerService);

  playerData: any;

  ngOnInit() { 
    this.loadPlayer();
  }

  loadPlayer() {
    this.playerService.getPlayer(this.playerTag).subscribe((player: any) => {
      this.playerData = player;
      console.log(this.playerData);
    });

  }

}
