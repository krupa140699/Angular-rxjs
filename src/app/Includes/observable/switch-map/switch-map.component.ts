import { Component, OnInit } from '@angular/core';
import { concatMap, delay, from, map, mergeMap, of, switchAll, switchMap } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News'])

    // ex-01 | map

    source.pipe(map(x => this.getData(x))).subscribe(res => {
      this._designUtility.print(res, 'ulContainer')
    })

    // ex-02 | Map + SwitchAll

    source.pipe(map(x => this.getData(x)), switchAll()).subscribe(res => {
      this._designUtility.print(res, 'ulContainer2')
    })


    // ex-03 | SwitchMap

    source.pipe(switchMap(x => this.getData(x))).subscribe(res => {
      console.log(res)
      this._designUtility.print(res, 'ulContainer3')
    })

     // ex-04 | mergeMap

     source.pipe(mergeMap(x => this.getData(x))).subscribe(res => {
      console.log(res)
      this._designUtility.print(res, 'ulContainer4')
    })

     // ex-05 | concatMap

     source.pipe(concatMap(x => this.getData(x))).subscribe(res => {
      console.log(res)
      this._designUtility.print(res, 'ulContainer5')
    })
  }

  getData(data: any) {
    return of(data + ' Video Uploaded').pipe(delay(1000));
  }

}
