import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  
  productos: any;
  file: any;
  page =1;
  producto = {
    codigo:"",
    nombre: "",
    marca: "",
    modelo:"",
    precio: "",
    imgurl: ""
    
  }

  constructor(private productoServicio: ProductosService){}

  ngOnInit(): void{
    this.consultarTodoPro();
  }

  fotoseleccionada(event:any):void{
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
    }
  }

  

  guardarProducto(){
    this.productoServicio.guardar(
      this.producto.codigo,
      this.producto.nombre,
      this.producto.modelo,
      this.producto.marca,
      this.producto.precio,
      this.file).subscribe(
        res=>{
          // alert("Producto guardado");
          Swal.fire({
            title: 'Producto guardado',
            icon: 'success',
            timer: 2000,
          });
          this.limpiarCampos();
          this.consultarTodoPro();
        },
        err=>{
          if(typeof(err.error)=="string"){
            // alert(err.error);
            Swal.fire({
              title: err.erro,
              icon: 'error',
              timer: 2000,
            });
          }
        }
      )
  }

  modificarPro(){
    this.productoServicio.modificar(
      this.producto.codigo,
      this.producto.nombre,
      this.producto.modelo,
      this.producto.marca,
      this.producto.precio,
      this.file).subscribe(
        res=>{
          // alert("Producto modificado");
          Swal.fire({
            title: 'Producto modificado',
            icon: 'success',
            timer: 2000,
          });
          this.limpiarCampos();
          this.consultarTodoPro();
        },
        err=>{
          if(typeof(err.error)=="string"){
            // alert(err.error);
            Swal.fire({
              title: err.error,
              icon: 'error',
              timer: 2000,
            });
          }
        });
  }

  eliminarPro(){
    this.productoServicio.eliminar(this.producto.codigo)
    .subscribe(
      res=>{
        // alert("Producto eliminado");
        Swal.fire({
          title: 'Producto eliminado',
          icon: 'success',
          timer: 2000,
        });
        this.limpiarCampos();
        this.consultarTodoPro();
      },
      err=>{
        if(typeof(err.error)=="string"){
          // alert(err.error);
          Swal.fire({
            title: err.error,
            icon: 'error',
            timer: 2000,
          });
        }
      }
    )
  }

  consultar(){
    this.productoServicio.consultarUno(this.producto).subscribe(
      res=>{
        this.producto.codigo= res.producto.codigo,
        this.producto.nombre= res.producto.nombre,
        this.producto.modelo= res.producto.modelo,
        this.producto.marca= res.producto.marca,
        this.producto.precio= res.producto.precio,
        this.producto.imgurl= res.producto.imgurl
      },
      err=>{
        this.limpiarCampos();
      });
  }

  consultarTodoPro(){
    this.productos = this.productoServicio.consultarTodo();
  }

  limpiarCampos(){
    this.producto.codigo="",
    this.producto.nombre="",
    this.producto.modelo="",
    this.producto.marca="",
    this.producto.precio="",
    this.producto.imgurl=""
  }
  
}

