import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {

  constructor(private _designUtility : DesignUtilityService) { }
asyncVideoEmit:any;

  ngOnInit(): void {
    this._designUtility.asyncVideoEmit.subscribe(res=>{
      this.asyncVideoEmit = res
    })
  }

  onVideoAdd(e:any){
    this._designUtility.asyncVideoEmit.next(e.value)
  }

  onComplete(){
    this._designUtility.asyncVideoEmit.complete()
  }



}

