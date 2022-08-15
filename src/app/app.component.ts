import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { AppService } from './app.service';
import { TrackTour } from './interfaces';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  trackTours:TrackTour[]=[];
  constructor(private appService:AppService, private cdr:ChangeDetectorRef){

  }
 ngOnInit(): void {
   this.appService.readTruckTours().pipe(take(1)).subscribe((trackTours)=>{
    if (trackTours){
      console.log(trackTours);
this.trackTours=trackTours;
this.cdr.detectChanges();
    }
   } )
 }
}
