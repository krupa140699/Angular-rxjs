import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comps3Component } from './comps3.component';

describe('Comps3Component', () => {
  let component: Comps3Component;
  let fixture: ComponentFixture<Comps3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comps3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comps3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
