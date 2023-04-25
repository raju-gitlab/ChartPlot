import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Barv2Component } from './barv2.component';

describe('Barv2Component', () => {
  let component: Barv2Component;
  let fixture: ComponentFixture<Barv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Barv2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Barv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
