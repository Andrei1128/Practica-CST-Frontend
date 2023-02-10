import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripsService } from 'src/app/_core/services/trips.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  tripList: any[];
  selectedItem = 'entry';
  lastSelected = 'entry';
  iconType = 'caret-up';
  searched: string = '';
  searchTerm: string = '';

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
    this.searchTerm = this.searched;
    this.ngOnInit();
    this.selectedItem = 'entry';
    this.lastSelected = this.selectedItem;
    this.iconType = 'caret-up';
  }
  sort() {
    if (this.lastSelected == this.selectedItem) {
      this.iconType = this.iconType === 'caret-up' ? 'caret-down' : 'caret-up';
      this.tripList.reverse();
    } else {
      this.lastSelected = this.selectedItem;
      this.iconType = 'caret-up';
      if (this.selectedItem === 'entry') return this.ngOnInit();
      this.tripList.sort((a, b) =>
        a[this.selectedItem] > b[this.selectedItem] ? 1 : -1
      );
    }
  }
  deleteTrip(tripInfo: any) {
    this.tripsService.deleteTrip(tripInfo.id).subscribe({
      next: () =>
        (this.tripList = this.tripList.filter((trip) => trip !== tripInfo)),
    });
  }

  addTrip(tripInfo: any) {
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
  }
}
