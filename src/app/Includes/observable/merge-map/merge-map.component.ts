import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News'])

    // ex-01 | map

    source.pipe(map(x => this.getData(x))).subscribe(res => {
      this._designUtility.print(res, 'ulContainer')
    })

    // ex-02 | Map + MergeAll

    source.pipe(map(x => this.getData(x)), mergeAll()).subscribe(res => {
      this._designUtility.print(res, 'ulContainer2')
    })


    // ex-03 | MergeMap

    source.pipe(mergeMap(x => this.getData(x))).subscribe(res => {
      console.log(res)
      this._designUtility.print(res, 'ulContainer3')
    })
  }

  getData(data: any) {
    return of(data + ' Video Uploaded');
  }

}
