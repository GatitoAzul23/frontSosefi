import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteCotizacionComponent } from './reporte-cotizacion.component';

describe('ReporteCotizacionComponent', () => {
  let component: ReporteCotizacionComponent;
  let fixture: ComponentFixture<ReporteCotizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteCotizacionComponent]
    });
    fixture = TestBed.createComponent(ReporteCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
