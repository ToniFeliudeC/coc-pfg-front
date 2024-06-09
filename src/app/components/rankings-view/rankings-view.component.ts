import { Component, inject, OnInit } from '@angular/core';
import { CocTableComponent } from "../coc-table/coc-table.component";
import { RankingsService } from '../../services/rankings.service';
import { LocationSelectorComponent } from "../location-selector/location-selector.component";
import { LocationsService } from '../../services/locations.service';

@Component({
    selector: 'app-rankings-view',
    standalone: true,
    templateUrl: './rankings-view.component.html',
    styleUrls: ['./rankings-view.component.scss'],
    imports: [CocTableComponent, LocationSelectorComponent]
})
export class RankingsViewComponent implements OnInit {
    
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
    }

    loadCountries() {
        this.locationsService.getCountries().subscribe((countries: any) => {
            this.countries = countries;
            this.selectFirstOne();
        });
    }

    loadRanking(locationId: string) {
        this.rankingsService.getTrophiesRanking(locationId).subscribe((ranking: any) => {
            this.selectedRanking = ranking;
        });
    }

    selectFirstOne() {
        if (this.countries && this.countries.length > 0) {
            const firstOneId = this.countries[0].id;
            this.addLocationId(firstOneId);
        } else {
            console.error('No countries available to select');
        }
    }

    clearPlayers() {
        this.selectedRanking = null;
    }

}
