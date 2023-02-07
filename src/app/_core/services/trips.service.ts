import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripsService {
  private readonly serverUrl = 'http://localhost:3000';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getTrips(): Observable<any> {
    return this.httpClient.get(`${this.serverUrl}/trips`);
  }

  addTrip(tripInfo: any): Observable<any> {
    return this.httpClient.post(`${this.serverUrl}/trips`, tripInfo);
  }

  deleteTrip(tripId: number): Observable<any> {
    return this.httpClient.delete(`${this.serverUrl}/trips/${tripId}`);
  }
}
