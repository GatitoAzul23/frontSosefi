import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  constructor(private productoServicio : ProductosService, private rutaActiva: ActivatedRoute, private router : Router){}

  file: any;
  producto = {
    nombre:"",
    codigo:"",
    modelo:"",
    precio:"",
    marca:"",
    imgurl:"",
  }

  ngOnInit() {
    let codigo =""+ this.rutaActiva.snapshot.paramMap.get('codigo');
    console.log(codigo);
        this.productoServicio.consultar(codigo).subscribe(
          res=>{
            this.producto.codigo= res.prod.codigo,
            this.producto.nombre= res.prod.nombre,
            this.producto.modelo= res.prod.modelo,
            this.producto.marca= res.prod.marca,
            this.producto.precio= res.prod.precio,
            this.producto.imgurl= res.prod.imgurl
          },
          err=>{
            this.router.navigate(['/productos']);
          });
          
  }

  fotoseleccionada(event:any):void{
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
    }
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
          location.reload();

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
    this.productoServicio.borrar(this.producto)
    .subscribe(
      res=>{
        // alert("Producto eliminado");
        Swal.fire({
          title: 'Producto eliminado',
          icon: 'success',
          timer: 2000,
        });
        this.router.navigate(['/productos']);
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

  aumentarCantidad(){
    this.productoServicio.aumentar(this.producto).subscribe(
      res=>{
        Swal.fire({
          title: "Cantidad actualizada",
          icon: 'success',
          timer: 2000,
        });
        location.reload();
      },
      err=>{
        Swal.fire({
          title: "Error al actualizar la cantidad",
          icon: 'error',
          timer: 2000,
        });
      }
    )
  }  


  limpiarCampos(){
    this.producto.codigo= "",
        this.producto.nombre= "",
        this.producto.modelo= "",
        this.producto.marca= "",
        this.producto.precio= "",
        this.producto.imgurl= ""
  }
}
