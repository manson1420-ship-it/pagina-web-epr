import { Component, Input } from '@angular/core';
import { Videojuego } from '../../models/videojuego';

@Component({
  selector: 'app-videojuego-detalle',
  standalone: true,
  templateUrl: './videojuego-detalle.html',
  styleUrl: './videojuego-detalle.css'
})
export class VideojuegoDetalleComponent {
  @Input() videojuego!: Videojuego;
}