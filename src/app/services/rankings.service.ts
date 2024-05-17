import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RankingsService {

  private http = inject(HttpClient);

  constructor() { }

  getRanking(locationId: string): any {
    return this.http.get(`http://127.0.0.1:5000/coc-api/locations/${locationId}/rankings/players`);
  }

  getLocations(): any {
    return this.http.get('http://127.0.0.1:5000/coc-api/locations');   
  }
}
