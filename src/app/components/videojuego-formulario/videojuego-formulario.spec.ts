import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegoFormulario } from './videojuego-formulario';

describe('VideojuegoFormulario', () => {
  let component: VideojuegoFormulario;
  let fixture: ComponentFixture<VideojuegoFormulario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideojuegoFormulario],
    }).compileComponents();

    fixture = TestBed.createComponent(VideojuegoFormulario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
