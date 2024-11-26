import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioInactivoComponent } from './servicio-inactivo.component';

describe('ServicioInactivoComponent', () => {
  let component: ServicioInactivoComponent;
  let fixture: ComponentFixture<ServicioInactivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicioInactivoComponent]
    });
    fixture = TestBed.createComponent(ServicioInactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
