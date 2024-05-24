import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {
  users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Jack' },
    { id: 4, name: 'Jill' },
  ]
  sourceSub: Subscription | undefined
  constructor() { }

  ngOnInit(): void {

    //EX-01
    const source = interval(1000)

    this.sourceSub = source.pipe(take(5), toArray()).subscribe(res => {
      console.log(res)
    })

    //EX-02
    const source2 = from(this.users)
    source2.pipe(toArray()).subscribe(res => {
      console.log(res)
    })

    //EX-03

    const source3 = of('a', 'b', 'c');
    source3.pipe(toArray()).subscribe(res => {
      console.log(res)
    })

  }

}
