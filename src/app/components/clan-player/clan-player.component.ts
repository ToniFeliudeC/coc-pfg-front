import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clan-player',
  standalone: true,
  imports: [],
  templateUrl: './clan-player.component.html',
  styleUrl: './clan-player.component.scss'
})
export class ClanPlayerComponent {
  @Input() leagueUrl: any;
  @Input() name: any;
  @Input() role: any;
  @Input() donated: any;
  @Input() received: any;
  @Input() trophies: any;
}
