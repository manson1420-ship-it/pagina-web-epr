import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegoEditar } from './videojuego-editar';

describe('VideojuegoEditar', () => {
  let component: VideojuegoEditar;
  let fixture: ComponentFixture<VideojuegoEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideojuegoEditar],
    }).compileComponents();

    fixture = TestBed.createComponent(VideojuegoEditar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
