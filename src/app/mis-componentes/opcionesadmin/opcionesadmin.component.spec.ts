import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesadminComponent } from './opcionesadmin.component';

describe('OpcionesadminComponent', () => {
  let component: OpcionesadminComponent;
  let fixture: ComponentFixture<OpcionesadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcionesadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionesadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
