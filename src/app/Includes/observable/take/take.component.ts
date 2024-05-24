import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {
randomNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
  constructor(
    private _designUtility: DesignUtilityService
  ) { }

  ngOnInit(): void {
    const nameSource = from(this.randomNames)
    //ex-01 take
    nameSource.pipe(take(5)).subscribe(res=>{
      console.log(res)
      this._designUtility.print(res,'elContainer')
    })

      //ex-02 takeLast
      nameSource.pipe(takeLast(5)).subscribe(res=>{
        console.log(res)
        this._designUtility.print(res,'elContainer2')
      })

       //ex-03 takeUntil

       const source = interval(1000)
       let condition1 = timer(5000);
       let condition2 = fromEvent(document,'click')
       source.pipe(map(x=> 'Number ' + x),
      takeUntil(condition2)).subscribe(res=>{
        console.log(res)
        this._designUtility.print(res,'elContainer3')
      })
  }

}
