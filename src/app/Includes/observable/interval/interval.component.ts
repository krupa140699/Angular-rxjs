import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
videoSubscription : Subscription | undefined
  constructor(
    private _designUtility : DesignUtilityService
  ) { }

  ngOnInit(): void {
    const broadcastVideo = interval(1000)
    this.videoSubscription = broadcastVideo.subscribe(res =>{
      let obsMsg = 'Video '+ res;
      this._designUtility.print(obsMsg,'elContainer')
      this._designUtility.print(obsMsg,'elContainer2')
      this._designUtility.print(obsMsg,'elContainer3')

      if(res >= 5){
        this.videoSubscription?.unsubscribe()
      }
        })
  }

}
