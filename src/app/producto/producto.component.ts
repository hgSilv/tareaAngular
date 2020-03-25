import { Component, OnInit } from '@angular/core';
import { Producto } from '../Producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  productos: Producto[];
  producto: Producto;
  respBusqueda: Producto[];
  busqueda = '';
  ordenado = false;
  marcar = false;

  constructor(){
    this.productos = [new Producto(12,"Smartphone", "Apple", "Quadcore 3GHZ", 35599.9, 3),
                      new Producto(123,"Smartphone", "Samsung", "Quadcore 3GHZ", 21299.5, 8),
                      new Producto(11,"Smartphone", "Xiaomi", "Quadcore 3GHZ", 10018.5, 10),
                      new Producto(142,"Smartphone", "Huawei", "Quadcore 3GHZ", 12108.5, 5),
                      new Producto(145,"Smartphone", "Sony", "Quadcore 3GHZ", 7108.5, 20),
                      new Producto(198,"Smartwatch","Sony", "3gb Ram", 4999.9, 0),
                      new Producto(19,"Consola","Sony", "3gb Ram", 4999.9, 0),
                      new Producto(134,"PC","Lenovo", "i7, 12 RAM", 24999.9, 4),
                      new Producto(9,"PC","Asus", "i5, 8 RAM", 18999.9, 0),
                      new Producto(78,"SmartTV", "Sony", "52 pulgadas", 8999.9, 3)]
                      this.respBusqueda = this.productos.slice();
  }

  ngOnInit(): void {
  }

  findProduct(): void {
    this.respBusqueda = this.productos.filter(obj => obj.nombre
    .toUpperCase().includes(this.busqueda.toUpperCase())
    || obj.marca.toUpperCase().includes(this.busqueda.toUpperCase())
    || obj.descripcion.toUpperCase().includes(this.busqueda.toUpperCase())
    );
  }

  ordenarProductos(): void {
      this.ordenado = !this.ordenado;
      if(this.ordenado){
      console.log('ordenar');
      this.respBusqueda = this.respBusqueda.sort(function(a, b) {
        return a.precio-b.precio;
      })
      }
      else {
        this.respBusqueda = this.productos.slice();
        this.findProduct();
      }
    }

    marcarProductos(): void {
      this.marcar = !this.marcar
    }

}
