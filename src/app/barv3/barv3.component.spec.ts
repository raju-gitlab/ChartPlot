import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Barv3Component } from './barv3.component';

describe('Barv3Component', () => {
  let component: Barv3Component;
  let fixture: ComponentFixture<Barv3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Barv3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Barv3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
