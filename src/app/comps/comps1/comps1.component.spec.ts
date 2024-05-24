import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comps1Component } from './comps1.component';

describe('Comps1Component', () => {
  let component: Comps1Component;
  let fixture: ComponentFixture<Comps1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comps1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comps1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
