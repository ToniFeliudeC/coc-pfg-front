import { Component, OnInit, inject, model } from '@angular/core';
import { PlayersService } from '../../services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players-view',
  standalone: true,
  imports: [],
  templateUrl: './players-view.component.html',
  styleUrl: './players-view.component.scss'
})
export class PlayersViewComponent implements OnInit {
  private playersService: PlayersService = inject(PlayersService);
  players: any[] = [];
  tagInput: any;
  clan: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadCachedPlayers();
  }

  searchPlayer(tag: string) {
    this.playersService.getPlayer(tag).subscribe(
        (player: any) => {
            if (player && player.reason !== 'notFound') {
              this.players.push(player);
              this.cachePlayers();
            }
            
        }
    );
  }

  viewPlayer(tag: string) {
      this.router.navigate(['/players', tag]);
  }

  cachePlayers() {
    try {
      sessionStorage.setItem('cachedPlayers', JSON.stringify(this.players));
    } catch (error) {
      console.error('Error caching players:', error);
    }
  }

  loadCachedPlayers() {
    try {
      const cachedPlayers = sessionStorage.getItem('cachedPlayers');
      if (cachedPlayers) {
        this.players = JSON.parse(cachedPlayers) || [];
      }
    } catch (error) {
      console.error('Error loading cached players:', error);
    }
  }

  emptyCachedPlayers() {
    try {
      const cachedPlayers = sessionStorage.getItem('cachedPlayers');
      if (cachedPlayers) {
        this.players = [];
        sessionStorage.clear();
      }
    } catch (error) {
      console.error('Error loading cached players:', error);
    }
  }

  // Función para eliminar el primer carácter del tag
  getTrimmedTag(tag: string): string {
    return tag ? tag.substring(1) : '';
  }

}
