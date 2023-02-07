import { TripsService } from './../../_core/services/trips.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.scss'],
})
export class TripCardComponent implements OnInit {
  @Input() trip: any;
  @Output() clickedMore = new EventEmitter<any>();
  constructor(private tripsService: TripsService) {}

  ngOnInit(): void {}

  navigateToTripPage() {
    this.clickedMore.emit();
  }
  deleteTrip() {
    this.tripsService.deleteTrip(this.trip.id).subscribe({
      next: () => {
        window.location.reload();
      },
    });
  }
}
