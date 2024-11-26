import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivosDetalleComponent } from './activos-detalle.component';

describe('ActivosDetalleComponent', () => {
  let component: ActivosDetalleComponent;
  let fixture: ComponentFixture<ActivosDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivosDetalleComponent]
    });
    fixture = TestBed.createComponent(ActivosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
