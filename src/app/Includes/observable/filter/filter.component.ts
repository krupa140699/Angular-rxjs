import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  dataArr = [
    { id: 1, name: 'a', gender: 'Female' },
    { id: 2, name: 'b', gender: 'Male' },
    { id: 3, name: 'c', gender: 'Female' },
    { id: 4, name: 'd', gender: 'Male' },
    { id: 5, name: 'e', gender: 'Female' },
    { id: 6, name: 'f', gender: 'Male' },
    { id: 7, name: 'g', gender: 'Female' },
    { id: 8, name: 'hirenbhai', gender: 'Male' },
    { id: 9, name: 'i', gender: 'Female' },
    { id: 10, name: 'j', gender: 'Male' },
    { id: 11, name: 'janmesha', gender: 'Female' },
    { id: 12, name: 'l', gender: 'Male' },
    { id: 13, name: 'priyanka', gender: 'Female' },
  ]
  data: any;
  data2: any;
  data3: any;

  constructor() { }

  ngOnInit(): void {
    const source = from(this.dataArr)

    //EX-01 - filter by length
    source.pipe(filter(member => member.name.length > 6), toArray()).subscribe(res => {
      console.log(res)
      this.data = res
    })

    //EX-02 - filter by gender
    source.pipe(filter(member => member.gender == 'Male'),toArray()).subscribe(res => {
      this.data2 = res
    })

    //EX-03 - nth item
    source.pipe(filter(member => member.id <= 6 ),toArray()).subscribe(res => {
      this.data3 = res
    })
  }

}
