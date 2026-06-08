import { Component, OnInit } from '@angular/core';
import { Videojuego } from './models/videojuego';
import { VideojuegoService } from './services/videojuego';

import { VideojuegoListaComponent } from './components/videojuego-lista/videojuego-lista';
import { VideojuegoFormularioComponent } from './components/videojuego-formulario/videojuego-formulario';
import { VideojuegoDetalleComponent } from './components/videojuego-detalle/videojuego-detalle';
import { VideojuegoEditarComponent } from './components/videojuego-editar/videojuego-editar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    VideojuegoListaComponent,
    VideojuegoFormularioComponent,
    VideojuegoDetalleComponent,
    VideojuegoEditarComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  videojuegos: Videojuego[] = [];

  mostrarFormulario = false;
  videojuegoSeleccionado: Videojuego | null = null;
  videojuegoEditando: Videojuego | null = null;

  constructor(private videojuegoService: VideojuegoService) {}

  ngOnInit() {
    this.cargarVideojuegos();
  }

  cargarVideojuegos() {
    this.videojuegoService.obtenerVideojuegos().subscribe({
      next: (data) => {
        this.videojuegos = data;
      },
      error: (error) => {
        console.error('Error al cargar videojuegos:', error);
      }
    });
  }

  abrirFormulario() {
    this.mostrarFormulario = true;
    this.videojuegoSeleccionado = null;
    this.videojuegoEditando = null;
  }

  agregarVideojuego(videojuego: Videojuego) {
  this.videojuegoService.crearVideojuego(videojuego).subscribe({
    next: (videojuegoCreado) => {
      this.videojuegos.push(videojuegoCreado);
      this.mostrarFormulario = false;
    },
    error: (error) => {
      console.error('Error al crear videojuego:', error);
    }
  });
}

  verDetalle(videojuego: Videojuego) {
    this.videojuegoSeleccionado = videojuego;
    this.videojuegoEditando = null;
    this.mostrarFormulario = false;
  }

  editarVideojuego(videojuego: Videojuego) {
    this.videojuegoEditando = { ...videojuego };
    this.videojuegoSeleccionado = null;
    this.mostrarFormulario = false;
  }

  actualizarVideojuego(videojuegoActualizado: Videojuego) {
    this.videojuegoService.actualizarVideojuego(videojuegoActualizado).subscribe({
      next: (videojuegoGuardado) => {
        this.videojuegos = this.videojuegos.map(v =>
          v.id === videojuegoGuardado.id ? videojuegoGuardado : v
        );
        this.videojuegoEditando = null;
      },
      error: (error) => {
        console.error('Error al actualizar videojuego:', error);
      }
    });
  }

  eliminarVideojuego(id: number) {
    this.videojuegoService.eliminarVideojuego(id).subscribe({
      next: () => {
        this.videojuegos = this.videojuegos.filter(v => v.id !== id);
      },
      error: (error) => {
        console.error('Error al eliminar videojuego:', error);
      }
    });
  }
}