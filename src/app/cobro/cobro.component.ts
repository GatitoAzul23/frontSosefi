import { Component, OnInit } from '@angular/core';
import { CobroService } from '../servicios/cobro.service';
import { ProductosService } from '../servicios/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cobro',
  templateUrl: './cobro.component.html',
  styleUrls: ['./cobro.component.css']
})
export class CobroComponent implements OnInit{
  ngOnInit(): void {
    this.consultarTodoPro();
    this.consultarUl();
  }
  constructor(private servicioCobros :CobroService, private productoServicio : ProductosService){}
  productos:any;
  compras:any;
  cobro ={
    folio :"",
    precio:"",
    nombre:"",
    fecha:"",
    hora:"",
    cantidad:"",
    total:""
  }

  consultarTodoPro(){
    this.productos = this.productoServicio.consultarTodo();
    console.log(this.productos);
  }

  consultarUl(){
    this.servicioCobros.consultar().subscribe(
      res=>{
        console.log(res);
        this.cobro.fecha = res.ultimo[0].fecha;
        this.cobro.hora = res.ultimo[0].hora;
        this.cobro.folio = res.ultimo[0].folio;
      },
      err=>{
        Swal.fire({
          title: 'Algo salio mal',
          icon: 'error',
          timer: 2000,
        });
      }
    );
  }

  agregar(){
    this.servicioCobros.agregar(this.cobro).subscribe(
      res=>{
        Swal.fire({
          title: 'Producto agregado',
          icon: 'success',
          timer: 1000,
        });
        this.cobro.nombre ="";
        this.cobro.cantidad="";
        this.articulos();
      },
      err=>{
        Swal.fire({
          title: 'Error al agregar el producto',
          icon: 'error',
          timer: 2000,
        });
      }
    );
  }
  
  articulos(){
    this.compras=this.servicioCobros.articulos(this.cobro);
  }

  finalizar(){
    this.servicioCobros.finalizar(this.cobro).subscribe(
      res=>{
        
        this.cobro.total = res.total.total;
      },
      err=>{
          Swal.fire({
          title: 'Error al realizar el cobro',
          icon: 'error',
          timer: 2000,
        });
      }
    );
  }
}
