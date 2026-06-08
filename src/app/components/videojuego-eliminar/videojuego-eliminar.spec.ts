import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegoEliminar } from './videojuego-eliminar';

describe('VideojuegoEliminar', () => {
  let component: VideojuegoEliminar;
  let fixture: ComponentFixture<VideojuegoEliminar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideojuegoEliminar],
    }).compileComponents();

    fixture = TestBed.createComponent(VideojuegoEliminar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
