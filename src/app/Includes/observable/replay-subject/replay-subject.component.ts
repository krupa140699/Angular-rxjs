import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {

  constructor(private _designUtility : DesignUtilityService) { }

  user1List = [
    'Angular.js',
    'Angular 2'
  ]
  user2List:any = []
  user3List:any = [
]

  //subscribe mode
  subscribeMode2:boolean = false
  subscribeMode3:boolean = false

  //subscriptions
  subscription2: Subscription | undefined
  subscription3: Subscription | undefined


  ngOnInit(): void {
    this._designUtility.videoEmit.subscribe(res=>{
      this.user1List.push(res)
    })
  }

  onVideoAdd(e:any){
    this._designUtility.videoEmit.next(e.value)
  }

  user2Subscribe(){
    if(this.subscribeMode2){
      this.subscription2?.unsubscribe()
    }else{
      this.subscription2 = this._designUtility.videoEmit.subscribe((resp:any)=>{
        this.user2List.push(resp);
     })
    }
    this.subscribeMode2 = !this.subscribeMode2
   
  }
  user3Subscribe(){
    if(this.subscribeMode3){
      this.subscription3?.unsubscribe()
    }else{
      this.subscription3 = this._designUtility.videoEmit.subscribe((resp:any)=>{
        this.user3List.push(resp);
     })
    }
    this.subscribeMode3 = !this.subscribeMode3
  }

}
