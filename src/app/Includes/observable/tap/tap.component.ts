import { Component, OnInit } from '@angular/core';
import { Subscription, interval, map, tap } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {
  constructor(
    private _designUtility: DesignUtilityService

  ) { }
  myColor:string | undefined;


  ngOnInit(): void {
    //EX-01
    const Arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    const source = interval(2000);
    let obs: Subscription;

    obs = source.pipe(tap(res => {
      if (res == 4) {
        obs.unsubscribe();
      }
    }), map(num => Arr[num])).subscribe(res => {
      this._designUtility.print(res, 'ulContainer')
    })


    //EX-02
    const colors = ['green', 'pink', 'red', 'orange', 'yellow', 'black', 'grey']
    let obs2: Subscription;

    obs2 = source.pipe(tap(res => {
      this.myColor = colors[res]
      if (res == 7) {
        obs2.unsubscribe();
      }
    }), map(num => colors[num])).subscribe(res => {
      this._designUtility.print(res, 'ulContainer2')
    })
  }

}
