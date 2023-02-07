import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from 'src/app/_core/models/Trip';
import { TripsService } from 'src/app/_core/services/trips.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  tripList: Trip[] = [];
  selectedItem = 'Standard';
  iconType = 'caret-up';
  name: string = '';
  country: string = '';
  rating: number = 0;
  expenses: string ='';
  notes: string ='';
  searched: string = '';
  isVisible = false;

  constructor(
    private router: Router,
    private tripsService: TripsService,
  ) {}

  ngOnInit(): void {
    this.tripsService.getTrips().subscribe((res) => {
      this.tripList = res;
    });
  }
  logout() {
    window.localStorage.clear();
    window.sessionStorage.clear();
    this.router.navigate(['auth']);
  }
  search() {}
  showModal(): void {
    this.isVisible = true;
  }
  modalCancel() {
    this.isVisible = false;
  }
  sort(){
    this.iconType = this.iconType === 'caret-up' ? 'caret-down' : 'caret-up';
  }

  addNewTrip(): void {
    //trebuie validatori
    const tripInfo = {
      name: this.name,
      country: this.country,
      rating: this.rating,
      expenses: this.expenses,
      notes: this.notes,
    };
    this.tripsService
      .addTrip(tripInfo)
      .subscribe((res) => this.tripList.push(res));
    this.isVisible = false;
  }
}
