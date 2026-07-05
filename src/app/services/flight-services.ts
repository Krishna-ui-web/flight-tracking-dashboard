import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FlightServices {
  constructor(private http:HttpClient){}
  getFlights():Observable<Flight[]>{
return this.http.get<Flight[]>('/data/flight.json');
  }
}
