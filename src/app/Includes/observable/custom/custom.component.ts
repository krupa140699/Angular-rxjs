import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit, OnDestroy {
  subs2: Subscription | undefined;
  names:any;
  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {

    // EX-01 manual

    const cusObs1 = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);
      setTimeout(() => {
        observer.next('Javascript');
      }, 2000);
      setTimeout(() => {
        observer.next('HTML');
        // observer.complete()
      }, 3000);
      setTimeout(() => {
        observer.next('css');
        observer.complete()
      }, 4000);
    })

    cusObs1.subscribe((res: any) => {
      this._designUtility.print(res, 'elContainer')
    })


    // EX-02 custom interval
    const arr2 = ['Angular', 'Javascript', 'HTML', 'css']
    const cusObs2 = Observable.create((observer: any) => {
      let count = 0
      setInterval(() => {
        observer.next(arr2[count]);
        if (count >= 3) {
          observer.complete()
        }
        count++;
      }, 1000)
    })

    this.subs2 = cusObs2.subscribe((res: any) => {
      this._designUtility.print(res, 'elContainer2')
    })


    // EX-03 Random name
    const arr3 = ['a','b','c','d']
    const cusObs3 = Observable.create((observer: any) => {
      let count = 0
      setInterval(() => {
        observer.next(arr3[count]);
        if (count >= 3) {
          observer.complete()
        }
        count++;
      }, 1000)
    })
    cusObs3.subscribe((res: any) => {
      this.names = res
    })
  }
  ngOnDestroy(): void {
    this.subs2?.unsubscribe()
  }

}
