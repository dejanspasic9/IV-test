import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrackTour } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) {}
   readTruckTours(): Observable<TrackTour[]> {
    return this.http.get<TrackTour[]>("") //api
   }
}
