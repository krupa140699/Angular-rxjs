import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {
  obsMsg: any;
  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {

    //of

    const obs1 = of('Anup', 'Shekhar', 'Sharma');
    obs1.subscribe(res => {
      console.log(res)
      this._designUtility.print(res, 'elContainer')
    })

    const obs2 = of({a:'Anup',b:'Shekhar',c:'Sharma'})
    obs2.subscribe(res => {
      console.log(res)
      this.obsMsg = res
    })

    //From

    const obs3 = from(['Krupa','Krina','Jalpak'])
    obs3.subscribe(res => {
      this._designUtility.print(res, 'elContainer3')
    })

    //From promise

    const promise = new Promise(resolve =>{
      setTimeout(()=>{
        resolve('Promise Resolved')
      },3000)
    })

    const obs4 = from(promise)
    obs4.subscribe(res => {
      this._designUtility.print(res, 'elContainer4')
    })

    //From string
    const obs5 = from('Welcome to rxjs project')
    obs5.subscribe(res => {
      this._designUtility.print(res, 'elContainer5')
    })

  }

}
