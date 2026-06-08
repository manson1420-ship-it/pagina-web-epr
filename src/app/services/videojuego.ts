import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Videojuego } from '../models/videojuego';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {
  private apiUrl = '/api/videojuegos';

  constructor(private http: HttpClient) {}

  obtenerVideojuegos(): Observable<Videojuego[]> {
    return this.http.get<Videojuego[]>(this.apiUrl);
  }

  obtenerVideojuego(id: number): Observable<Videojuego> {
    return this.http.get<Videojuego>(`${this.apiUrl}/${id}`);
  }

  crearVideojuego(videojuego: Videojuego): Observable<Videojuego> {
    return this.http.post<Videojuego>(this.apiUrl, videojuego);
  }

  actualizarVideojuego(videojuego: Videojuego): Observable<Videojuego> {
    return this.http.put<Videojuego>(
      `${this.apiUrl}/${videojuego.id}`,
      videojuego
    );
  }

  eliminarVideojuego(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}