import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingBarModule, LoadingBarService } from '@ngx-loading-bar/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.css']
})
export class DebouncetimeComponent implements OnInit, AfterViewInit {
  @ViewChild('myInput') myInput: ElementRef | undefined
  @ViewChild('myInput2') myInput2: ElementRef | undefined
  reqData: any = null;
  reqData2: any = null;
  constructor(private loading: LoadingBarService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    const searchTerm = fromEvent(this.myInput?.nativeElement, 'keyup')
    const searchTerm2 = fromEvent(this.myInput2?.nativeElement, 'keyup')


    //ex-01
    searchTerm.pipe(
      map((event: any) => event.target.value),
      debounceTime(500)
    ).subscribe(res => {
      this.loading.start()
      console.log(res)
      this.reqData = res
      setTimeout(() => {
        this.reqData = null
        this.loading.stop()
      }, 1000);
    })

    //ex-02
    searchTerm2.pipe(
      map((event: any) => event.target.value),
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(res => {
      this.loading.start()
      console.log(res)
      this.reqData2 = res
      setTimeout(() => {
        this.reqData2 = null
        this.loading.stop()
      }, 1000);
    })
  }

}
