import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Videojuego } from '../../models/videojuego';

@Component({
  selector: 'app-videojuego-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './videojuego-editar.html',
  styleUrl: './videojuego-editar.css'
})
export class VideojuegoEditarComponent {
  @Input() videojuego!: Videojuego;
  @Output() videojuegoActualizado = new EventEmitter<Videojuego>();

  guardarCambios() {
    this.videojuegoActualizado.emit({ ...this.videojuego });
  }
}