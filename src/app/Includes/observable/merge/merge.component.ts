import { Component, OnInit } from '@angular/core';
import { interval, map, merge, take } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit {

  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    const sourceTech = interval(3000).pipe(
      map(res => 'TechVideo #' + (res + 1)),
      take(5)
    )
    const sourceComedy = interval(4000).pipe(
      map(res => 'ComedyVideo #' + (res + 1)),
      take(3)
    )
    const sourceNews = interval(5000).pipe(
      map(res => 'NewsVideo #' + (res + 1)),
      take(4)
    )
    const finalObs = merge(sourceTech, sourceComedy, sourceNews)
    finalObs.subscribe(res => {
      console.log(res)
      this._designUtility.print(res, 'elContainer')
    })
  }

}
