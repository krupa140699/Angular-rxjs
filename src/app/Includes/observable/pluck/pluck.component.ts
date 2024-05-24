import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

  constructor() { }
  data: any;
  data2: any;
  myArr = [
    {
      studenName: "jack",
      studenClass: 6,
      studenSection: "a",
      address:{
        city:'toronto',
        code:'1'
      }
    },
    {
      studenName: "tom",
      studenClass: 6,
      studenSection: "a",
      address:{
        city:'mississauga',
        code:'4'
      }
    },
    {
      studenName: "zara",
      studenClass: 7,
      studenSection: "e",
      address:{
        city:'quabec',
        code:'9'
      }
    },
    {
      studenName: "jiyan",
      studenClass: 9,
      studenSection: "a",
      address:{
        city:'japan',
        code:'7'
      }
    },
    {
      studenName: "john",
      studenClass: 4,
      studenSection: "b",
      address:{
        city:'etobicoke',
        code:'8'
      }
    }
  ];

  ngOnInit(): void {

    //ex-01
    from(this.myArr).pipe(pluck('studenName'),toArray()).subscribe(res => {
      this.data = res
    })

       //ex-02
       from(this.myArr).pipe(pluck('address','city'),toArray()).subscribe(res => {
        this.data2 = res
      })
  }

}
