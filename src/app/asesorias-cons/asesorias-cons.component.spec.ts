import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoriasConsComponent } from './asesorias-cons.component';

describe('AsesoriasConsComponent', () => {
  let component: AsesoriasConsComponent;
  let fixture: ComponentFixture<AsesoriasConsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsesoriasConsComponent]
    });
    fixture = TestBed.createComponent(AsesoriasConsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
