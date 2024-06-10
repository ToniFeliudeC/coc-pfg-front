import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { GlobalConfig } from '../globals.config';

@Injectable({
  providedIn: 'root'
})
export class RankingsService {

  private http = inject(HttpClient);

  constructor() { }

  getTrophiesRanking(locationId: string): any {
    return this.http.get(`${GlobalConfig.API_BASE_URL}/locations/${locationId}/rankings/players/fixed`);
  }
}
