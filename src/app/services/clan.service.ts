import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { GlobalConfig } from '../globals.config';
@Injectable({
  providedIn: 'root'
})
export class ClansService {
  private http = inject(HttpClient);

  constructor() { }

  getClan(clanTag: string): any {
    return this.http.get(`${GlobalConfig.API_BASE_URL}/clans/${clanTag}`)
  }

}
