import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Includes/header/header.component';
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
import { HttpClientModule } from  '@angular/common/http';
import { DebouncetimeComponent } from './Includes/observable/debouncetime/debouncetime.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { SubjectComponent } from './Includes/observable/subject/subject.component';
import { Comps1Component } from './comps/comps1/comps1.component';
import { Comps2Component } from './comps/comps2/comps2.component';
import { Comps3Component } from './comps/comps3/comps3.component';
import { ReplaySubjectComponent } from './Includes/observable/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './Includes/observable/async-subject/async-subject.component';
import { ConcatComponent } from './Includes/observable/concat/concat.component';
import { MergeComponent } from './Includes/observable/merge/merge.component';
import { MergeMapComponent } from './Includes/observable/merge-map/merge-map.component';
import { ConcatMapComponent } from './Includes/observable/concat-map/concat-map.component';
import { SwitchMapComponent } from './Includes/observable/switch-map/switch-map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    AllComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebouncetimeComponent,
    SubjectComponent,
    Comps1Component,
    Comps2Component,
    Comps3Component,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    ConcatComponent,
    MergeComponent,
    MergeMapComponent,
    ConcatMapComponent,
    SwitchMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
