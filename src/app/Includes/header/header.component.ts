import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  exclusive:any = false;

  constructor(    private _designUtility : DesignUtilityService
  ) { }

  ngOnInit(): void {
    this._designUtility.exclusive.subscribe(res=>{
      this.exclusive = res;
    })
  }

}
