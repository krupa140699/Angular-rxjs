import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {
  data:any;
  fetching:boolean= false;
  status = 'No Data'
  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {
  }

  getData(){
    this.fetching = true
    this.status = 'Fetching...'
    this._designUtility.fetchDetails().pipe(
      // retry(5)
      retryWhen(err=> err.pipe(
        delay(3000),
        scan((retryCount)=>{
          if(retryCount >= 5){
            throw err
          }else{
            return retryCount+1;
          }
        },0)
      ))
    ).subscribe((res:any)=>{
      console.log(res)
      this.fetching = false
      this.data = res.data
      this.status = 'Data fetched'
    },err=>{
      this.fetching = false
      this.status = 'Problem fetching data'

    })
  }

}
