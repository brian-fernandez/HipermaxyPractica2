import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion2Component } from './seccion2.component';

describe('Seccion2Component', () => {
  let component: Seccion2Component;
  let fixture: ComponentFixture<Seccion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Seccion2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Seccion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
