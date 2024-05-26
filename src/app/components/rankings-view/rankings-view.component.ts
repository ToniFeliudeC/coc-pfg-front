import { Component, inject } from '@angular/core';
import { CocTableComponent } from "../coc-table/coc-table.component";
import { RankingsService } from '../../services/rankings.service';
import { LocationSelectorComponent } from "../location-selector/location-selector.component";
import { LocationsService } from '../../services/locations.service';

@Component({
    selector: 'app-rankings-view',
    standalone: true,
    templateUrl: './rankings-view.component.html',
    styleUrl: './rankings-view.component.scss',
    imports: [CocTableComponent, LocationSelectorComponent]
})
export class RankingsViewComponent {
    
    private rankingsService = inject(RankingsService);
    private locationsService = inject(LocationsService);

    selectedRanking: any;
    countries: any;
    selectedLocation: any;

    ngOnInit() {
        this.loadCountries();
    }

    addLocationId(locationId: any) {
        this.loadRanking(locationId);
        console.log(this.selectedRanking);
    }

    loadCountries() {
        this.locationsService.getCountries().subscribe((countries: any) => {
            this.countries = countries;
        });
    }

    loadRanking(locationId: string) {
        this.rankingsService.getTrophiesRanking(locationId).subscribe((ranking: any) => {
            this.selectedRanking = ranking;
        });
    }

    clearPlayers() {
        this.selectedRanking = null;
    }

}
