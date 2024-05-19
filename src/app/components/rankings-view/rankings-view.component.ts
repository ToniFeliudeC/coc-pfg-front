import { Component, inject } from '@angular/core';
import { CocTableComponent } from "../coc-table/coc-table.component";
import { RankingsService } from '../../services/rankings.service';
import { LocationSelectorComponent } from "../location-selector/location-selector.component";

@Component({
    selector: 'app-rankings-view',
    standalone: true,
    templateUrl: './rankings-view.component.html',
    styleUrl: './rankings-view.component.scss',
    imports: [CocTableComponent, LocationSelectorComponent]
})
export class RankingsViewComponent {
    
    private rankingsService = inject(RankingsService);

    selectedRanking: any;
    allLocations: any;
    selectedLocation: any;

    ngOnInit() {
        this.loadLocations();
    }

    addLocationId(locationId: any) {
        this.loadRanking(locationId);
        console.log(this.selectedRanking);
    }

    loadLocations() {
        this.rankingsService.getLocations().subscribe((locations: any) => {
            this.allLocations = locations;
        });
    }

    loadRanking(locationId: string) {
        this.rankingsService.getTrophiesRanking(locationId).subscribe((ranking: any) => {
            this.selectedRanking = ranking;
        });
    }

}
