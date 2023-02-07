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
  searched: string = '';
  searchTerm: string = '';

  name: string = '';
  country: string = '';
  rating: number = 0;
  expenses: string = '';
  notes: string = '';
  isVisible = false;

  constructor(private router: Router, private tripsService: TripsService) {}

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
  search() {
    if (this.searched == '') return this.ngOnInit();
   this.searchTerm = this.searched.toLowerCase();
    this.tripsService.getTrips().subscribe((res) => {
      this.tripList = res.filter((trip: any) => {
        return (
          trip.name.toLowerCase().includes(this.searchTerm) ||
          trip.country.toLowerCase().includes(this.searchTerm) ||
          trip.expenses.toString().includes(this.searchTerm) ||
          trip.rating.toString().includes(this.searchTerm) ||
          trip.notes.toLowerCase().includes(this.searchTerm)
        );
      });
    });
  }
  removeSearch() {
    this.searched = '';
    this.searchTerm=this.searched;
    this.ngOnInit();
  }
  sort() {
    this.iconType = this.iconType === 'caret-up' ? 'caret-down' : 'caret-up';
  }
  deleteTrip(tripInfo: any) {
    this.tripsService.deleteTrip(tripInfo.id).subscribe({
      next: () =>
        (this.tripList = this.tripList.filter((trip) => trip !== tripInfo)),
    });
  }

  showModal(): void {
    this.isVisible = true;
  }
  modalCancel() {
    this.isVisible = false;
  }
  addNewTrip(): void {
    const tripInfo = {
      name: this.name,
      country: this.country,
      rating: this.rating,
      expenses: this.expenses,
      notes: this.notes,
    };
    this.tripsService.addTrip(tripInfo).subscribe((res) => {
      if (
        this.searchTerm == '' ||
        res.name.toLowerCase().includes(this.searchTerm) ||
        res.country.toLowerCase().includes(this.searchTerm) ||
        res.expenses.toString().includes(this.searchTerm) ||
        res.rating.toString().includes(this.searchTerm) ||
        res.notes.toLowerCase().includes(this.searchTerm)
      )
        this.tripList.push(res);
    });
    this.isVisible = false;
  }
}
