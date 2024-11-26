import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionRegistroComponent } from './cotizacion-registro.component';

describe('CotizacionRegistroComponent', () => {
  let component: CotizacionRegistroComponent;
  let fixture: ComponentFixture<CotizacionRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CotizacionRegistroComponent]
    });
    fixture = TestBed.createComponent(CotizacionRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
