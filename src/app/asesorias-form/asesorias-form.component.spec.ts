import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoriasFormComponent } from './asesorias-form.component';

describe('AsesoriasFormComponent', () => {
  let component: AsesoriasFormComponent;
  let fixture: ComponentFixture<AsesoriasFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsesoriasFormComponent]
    });
    fixture = TestBed.createComponent(AsesoriasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
