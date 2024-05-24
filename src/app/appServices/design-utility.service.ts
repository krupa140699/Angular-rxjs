import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {
  exclusive = new Subject()
  userName = new BehaviorSubject('Krupa');
  videoEmit = new ReplaySubject<any>(5);
  asyncVideoEmit = new AsyncSubject();

  constructor(private http: HttpClient) { }

  print(val: any, containerId: any) {
    let el = document.createElement('li');
    el.innerText = val
    document.getElementById(containerId)?.appendChild(el)
  }

  fetchDetails() {
    return this.http.get('https://dummy.restapiexample.com/api/v1/employees')
  }
}
