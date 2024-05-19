import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-location-selector',
  standalone: true,
  templateUrl: './location-selector.component.html',
  styleUrls: ['./location-selector.component.scss']
})
export class LocationSelectorComponent {
  @Input({required: true}) locations: any;
  @Output() locationIdEvent = new EventEmitter<string>();

  ngOnInit() {

  }

  selectedLocationCode: string = "NONE";

  onLocationChange(event: any) {
    this.selectedLocationCode = event.target.value;
    this.locationIdEvent.emit(this.selectedLocationCode);
  }

  
}