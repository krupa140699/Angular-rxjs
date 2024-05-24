import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, map } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  sub1: Subscription | undefined;
  msg1: any;
  sub2: Subscription | undefined;
  msg2: any;

  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    const broadcastVideos = interval(1000);
    //ex-01
    this.sub1 = broadcastVideos.pipe(map(filter => 'Video ' + filter)).subscribe(res => {
      this.msg1 = res
    })

    setTimeout(() => {
      this.sub1?.unsubscribe()
    }, 10000);

    //ex-02
    this.sub2 = broadcastVideos.pipe(map(filter => filter * 3)).subscribe(res => {
      this.msg2 = res
    })
    setTimeout(() => {
      this.sub2?.unsubscribe()
    }, 10000);

    //ex-03
    const member = from([
      {id: 1,name:'a'},
      {id: 2,name:'b'},
      {id: 3,name:'c'},
      {id: 4,name:'d'},
      {id: 5,name:'e'},
      {id: 6,name:'f'},
      {id: 7,name:'g'},
      {id: 8,name:'h'},
    ])
    member.pipe(map(res => res.name)).subscribe(res => {
      this._designUtility.print(res,'containerId')
    })
  }

}
