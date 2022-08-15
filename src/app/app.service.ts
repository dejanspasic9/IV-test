import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrackTour } from './interfaces';
import { HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) {}
   readTruckTours(): Observable<any> {
    let headers = new HttpHeaders().set('access-control-allow-origin',"http://37.220.78.215:99/")
    return this.http.get<any>("http://37.220.78.215:99/api/Ture",{headers,responseType: 'text' as 'json'}) 
   }
}
