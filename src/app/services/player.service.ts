import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private http = inject(HttpClient);

  constructor() { }

  getPlayer(playerTag: string): any {
    return this.http.get('http://127.0.0.1:5000/coc-api/players/' + playerTag)
  }
}
