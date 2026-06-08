import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-videojuego-eliminar',
  standalone: true,
  templateUrl: './videojuego-eliminar.html',
  styleUrl: './videojuego-eliminar.css'
})
export class VideojuegoEliminarComponent {
  @Input() id!: number;
  @Output() eliminar = new EventEmitter<number>();

  confirmarEliminacion() {
    const confirmar = confirm('¿Seguro que deseas eliminar este videojuego?');

    if (confirmar) {
      this.eliminar.emit(this.id);
    }
  }
}