import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Videojuego } from '../../models/videojuego';

@Component({
  selector: 'app-videojuego-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './videojuego-formulario.html',
  styleUrl: './videojuego-formulario.css'
})
export class VideojuegoFormularioComponent {
  @Output() videojuegoCreado = new EventEmitter<Videojuego>();

  videojuego: Videojuego = {
    id: 0,
    titulo: '',
    desarrollador: '',
    fecha_lanzamiento: ''
  };

  guardar() {
    this.videojuegoCreado.emit({ ...this.videojuego });

    this.videojuego = {
      id: 0,
      titulo: '',
      desarrollador: '',
      fecha_lanzamiento: ''
    };
  }
}