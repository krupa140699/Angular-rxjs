import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comps3',
  templateUrl: './comps3.component.html',
  styleUrls: ['./comps3.component.css']
})
export class Comps3Component implements OnInit {

  useName:any
  constructor( private _designUtility : DesignUtilityService
  ) {
    this._designUtility.userName.subscribe(res=>{
      this.useName = res
    })
   }
   
  ngOnInit(): void {
  }

  onChange(e:any){
    this._designUtility.userName.next(e.value)
  }

}
