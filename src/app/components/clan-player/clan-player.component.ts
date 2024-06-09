import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

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
  @Input() playerTag: any;

  constructor(private router: Router) {}

  viewPlayer(tag: string) {
    this.router.navigate(['/players', tag]);
  }

  // Función para eliminar el primer carácter del tag
  getTrimmedTag(tag: string): string {
    return tag ? tag.substring(1) : '';
  }


}
