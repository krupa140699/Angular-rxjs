import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit,OnDestroy {
  useName:any
  constructor( private _designUtility : DesignUtilityService) {
    this._designUtility.userName.subscribe(res=>{
      this.useName = res
    })
   }

  ngOnInit(): void {
    this._designUtility.exclusive.next(true)
  }

  ngOnDestroy(): void {
    this._designUtility.exclusive.next(false)
  }

}
