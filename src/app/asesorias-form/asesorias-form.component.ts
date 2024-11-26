import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { AsesoriasServiceService } from '../servicios/asesorias-service.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-asesorias-form',
  templateUrl: './asesorias-form.component.html',
  styleUrls: ['./asesorias-form.component.css']
})
export class AsesoriasFormComponent implements OnInit{

  selectedProduct: string = '';

  asesoria ={
    modeloProd: "",
    numeroProd: "",
    nombreProd: "",
    descripcion:"",
    nombreCliente: "",
    apellidoCliente: "",
    correo: ""
  }
  

  constructor( 
    private servicioAsesoria: AsesoriasServiceService,
    private productoService: ProductosService,
    private rutaActiva: ActivatedRoute,
    private router:Router){}

  ngOnInit(): void {
    let codigo =""+ this.rutaActiva.snapshot.paramMap.get('codigo');
    
    this.productoService.consultar(codigo).subscribe(
      res=>{
        this.asesoria.modeloProd = res.prod.modelo;
        this.asesoria.numeroProd = res.prod.codigo;
        this.asesoria.nombreProd = res.prod.nombre;
        
      },
      err=>{
        this.router.navigate(['/asesorias']);
      });
  }  


  
  limpiarCampos(){
    this.asesoria.descripcion="",
    this.asesoria.nombreCliente ="",
    this.asesoria.apellidoCliente= "",
    this.asesoria.correo= ""
  }

  enviar(){
    this.servicioAsesoria.nuevo(this.asesoria).subscribe(
      res=>{
        Swal.fire({
          title: 'Petición de asesoría enviada',
          icon: 'success',
          timer: 2000,
        });
        this.limpiarCampos();
        this.router.navigate(['/asesorias']);
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
}
