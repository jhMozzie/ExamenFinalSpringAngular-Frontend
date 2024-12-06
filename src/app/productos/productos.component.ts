import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  productos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadProductos();
  }

  loadProductos(): void {
    this.http.get('http://localhost:8080/api/productos').subscribe({
      next: (data: any) => {
        this.productos = data;
        console.log('Productos cargados:', this.productos);
      },
      error: (error) => {
        console.error('Error al cargar los productos:', error);
      },
    });
  }
}