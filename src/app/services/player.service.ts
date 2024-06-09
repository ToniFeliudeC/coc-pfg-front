import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { GlobalConfig } from '../globals.config';
@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private http = inject(HttpClient);

  constructor() { }

  getPlayer(playerTag: string): any {
    return this.http.get(`${GlobalConfig.API_BASE_URL}/players/${playerTag}`)
  }

  getPlayerClan(playerTag: string): any {
    return this.http.get(`${GlobalConfig.API_BASE_URL}/players/${playerTag}/clan`)
  }

  getPlayerHomeAchievements(playerTag: string): any {
    return this.http.get(`${GlobalConfig.API_BASE_URL}/players/${playerTag}/achievements/home`)
  }

}
