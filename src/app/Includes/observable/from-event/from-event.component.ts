import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { count, fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit,AfterViewInit {
  constructor(
    private _designUtility : DesignUtilityService
  ) { }
  @ViewChild('addBtn') addBtn:ElementRef | undefined;

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addBtn?.nativeElement,'click').subscribe(res=>{
      let cuntVal = ('Video'+ count++)
      this._designUtility.print(cuntVal,'elContainer')
      this._designUtility.print(cuntVal,'elContainer2')
    })
  }

}
