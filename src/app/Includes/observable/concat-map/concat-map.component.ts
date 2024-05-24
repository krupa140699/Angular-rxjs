import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {
  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News'])

    // ex-01 | map

    source.pipe(map(x => this.getData(x))).subscribe(res => {
      this._designUtility.print(res, 'ulContainer')
    })

    // ex-02 | MergeMap

    source.pipe(mergeMap(x => this.getData(x))).subscribe(res => {
      this._designUtility.print(res, 'ulContainer2')
    })


    // ex-03 | ConcatMap

    source.pipe(concatMap(x => this.getData(x))).subscribe(res => {
      console.log(res)
      this._designUtility.print(res, 'ulContainer3')
    })
  }

  getData(data: any) {
    return of(data + ' Video Uploaded').pipe(delay(2000));
  }

}

