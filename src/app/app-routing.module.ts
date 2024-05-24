import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './Includes/promise/promise.component';
import { ObservableComponent } from './Includes/observable/observable.component';
import { AllComponent } from './Includes/observable/all/all.component';
import { FromEventComponent } from './Includes/observable/from-event/from-event.component';
import { IntervalComponent } from './Includes/observable/interval/interval.component';
import { OfFromComponent } from './Includes/observable/of-from/of-from.component';
import { ToArrayComponent } from './Includes/observable/to-array/to-array.component';
import { CustomComponent } from './Includes/observable/custom/custom.component';
import { MapComponent } from './Includes/observable/map/map.component';
import { PluckComponent } from './Includes/observable/pluck/pluck.component';
import { FilterComponent } from './Includes/observable/filter/filter.component';
import { TapComponent } from './Includes/observable/tap/tap.component';
import { TakeComponent } from './Includes/observable/take/take.component';
import { RetryComponent } from './Includes/observable/retry/retry.component';
import { DebouncetimeComponent } from './Includes/observable/debouncetime/debouncetime.component';
import { SubjectComponent } from './Includes/observable/subject/subject.component';
import { ReplaySubjectComponent } from './Includes/observable/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './Includes/observable/async-subject/async-subject.component';
import { ConcatComponent } from './Includes/observable/concat/concat.component';
import { MergeComponent } from './Includes/observable/merge/merge.component';
import { MergeMapComponent } from './Includes/observable/merge-map/merge-map.component';
import { ConcatMapComponent } from './Includes/observable/concat-map/concat-map.component';
import { SwitchMapComponent } from './Includes/observable/switch-map/switch-map.component';
import { ExhaustMapComponent } from './Includes/observable/exhaust-map/exhaust-map.component';

const routes: Routes = [
  {
    path: 'promise',
    component: PromiseComponent
  },
  {
    path: 'observable',
    component: ObservableComponent,
    children:[
      {
        path:'',component: AllComponent
      },
      {
        path:'fromEvent',component: FromEventComponent
      },
      {
        path:'interval',component: IntervalComponent
      },
      {
        path:'of-from',component: OfFromComponent
      },
      {
        path:'toArray',component: ToArrayComponent
      },
      {
        path:'custom',component: CustomComponent
      },
      {
        path:'map',component: MapComponent
      },
      {
        path:'pluck',component: PluckComponent
      },
      {
        path:'filter',component: FilterComponent
      },
      {
        path:'tap',component: TapComponent
      },
      {
        path:'take',component: TakeComponent
      },
      {
        path:'retry',component: RetryComponent
      },
      {
        path:'debouncetime',component: DebouncetimeComponent
      },
      {
        path:'subject',component: SubjectComponent
      },
      {
        path:'replaySubject',component: ReplaySubjectComponent
      },
      {
        path:'asyncSubject',component: AsyncSubjectComponent
      },
      {
        path:'concat',component: ConcatComponent
      },
      {
        path:'merge',component: MergeComponent
      },
      {
        path:'mergeMap',component: MergeMapComponent
      },
      {
        path:'concatMap',component: ConcatMapComponent
      },
      {
        path:'switchMap',component: SwitchMapComponent
      },
      // {
      //   path:'exhaustMap',component: ExhaustMapComponent
      // }
    ]
  },
  {
    path: '**',
    redirectTo: "promise"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
