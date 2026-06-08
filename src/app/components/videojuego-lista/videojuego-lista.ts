import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Videojuego } from '../../models/videojuego';
import { VideojuegoEliminarComponent } from '../videojuego-eliminar/videojuego-eliminar';

@Component({
  selector: 'app-videojuego-lista',
  standalone: true,
  imports: [VideojuegoEliminarComponent],
  templateUrl: './videojuego-lista.html',
  styleUrl: './videojuego-lista.css'
})
export class VideojuegoListaComponent {
  @Input() videojuegos: Videojuego[] = [];

  @Output() ver = new EventEmitter<Videojuego>();
  @Output() editar = new EventEmitter<Videojuego>();
  @Output() eliminar = new EventEmitter<number>();
}