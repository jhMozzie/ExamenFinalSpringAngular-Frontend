import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductosComponent } from '../productos/productos.component';

// Declaración global de M para que TypeScript reconozca Materialize
declare const M: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductosComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productos: any[] = [];
  productosCargados = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Inicialización de Sidenav
    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
  }

  logout(): void {
    alert('Cerrando sesión...');
    this.router.navigate(['/login']);
  }

  viewProductos(): void {
    this.http.get('http://localhost:8080/api/productos').subscribe({
      next: (data: any) => {
        this.productos = data;
        this.productosCargados = true;
        console.log('Productos cargados:', this.productos);
      },
      error: (error) => {
        console.error('Error al cargar los productos:', error);
        alert('No se pudieron cargar los productos.');
      },
    });
  }
}