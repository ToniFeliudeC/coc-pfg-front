import { Component, OnInit, inject, model } from '@angular/core';
import { ClansService } from '../../services/clan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clans-view',
  standalone: true,
  imports: [],
  templateUrl: './clans-view.component.html',
  styleUrl: './clans-view.component.scss'
})
export class ClansViewComponent implements OnInit {
  private clansService: ClansService = inject(ClansService);
  clans: any[] = [];
  tagInput: any;
  clan: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadCachedClans();
  }

  searchClan(tag: string) {
    this.clansService.getClan(tag).subscribe(
        (clan: any) => {
            if (clan && clan.reason !== 'notFound') {
              this.clans.push(clan);
              this.cacheClans();
            }
            
        }
    );
  }

  viewClan(tag: string) {
      this.router.navigate(['/clans', tag]);
  }

  cacheClans() {
    try {
      sessionStorage.setItem('cachedClans', JSON.stringify(this.clans));
    } catch (error) {
      console.error('Error caching clans:', error);
    }
  }

  loadCachedClans() {
    try {
      const cachedClans = sessionStorage.getItem('cachedClans');
      if (cachedClans) {
        this.clans = JSON.parse(cachedClans) || [];
      }
    } catch (error) {
      console.error('Error loading cached clans:', error);
    }
  }

  emptyCachedClans() {
    try {
      const cachedClans = sessionStorage.getItem('cachedClans');
      if (cachedClans) {
        this.clans = [];
        sessionStorage.clear();
      }
    } catch (error) {
      console.error('Error loading cached clans:', error);
    }
  }

  // Función para eliminar el primer carácter del tag
  getTrimmedTag(tag: string): string {
    return tag ? tag.substring(1) : '';
  }

}
