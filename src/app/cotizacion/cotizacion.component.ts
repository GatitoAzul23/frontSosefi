import { Component } from '@angular/core';
import { CobroService } from '../servicios/cobro.service';
import { ProductosService } from '../servicios/productos.service';
import { ServiService } from '../servicios/servi.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent {
  constructor(private servicioCobros :CobroService, 
    private serivcioServi: ServiService, 
    private productoServicio : ProductosService,
    private rutaActiva: ActivatedRoute,
    private router:Router){}

  servicios:any;
  servicio={
    idServicio:"",
    nombreCliente:"",
    apellidoCliente:"",
    correo:"",
    idCotizacion:"",
  }
  productos: any[] = [];
  compras:any;
  cobro ={
    idCotizacion :"",
    precio:"",
    nombre:"",
    manoObra:"",
    totalFin:"",
    totalProd:"",
    cantidad:"",
    idServicio:"",
  }
  resultado: any;
  servicioNum:any;

  ngOnInit(): void {
    let folio =""+ this.rutaActiva.snapshot.paramMap.get('folio');
    
    this.serivcioServi.consultarCoti(folio).subscribe(
      res=>{
        this.servicio.idCotizacion = res.serv.idCotizacion,
        this.servicio.idServicio = res.serv.idServicio,
        this.servicio.nombreCliente = res.serv.nombreCliente,
        this.servicio.apellidoCliente = res.serv.apellidoCliente,
        this.servicio.correo = res.serv.correo,
        this.cobro.manoObra = res.coti.manoObra,
        this.cobro.totalProd = res.coti.totalProd,
        this.cobro.totalFin = res.coti.totalFin,
        this.productos = res.coti.productos 
      },
      err=>{
        this.router.navigate(['/servInac']);
      });
  }  

  cancelarServ() {
    //console.log(this.servicioNum);
    this.serivcioServi.cancelarPost(this.servicio).subscribe(
        res => {
          Swal.fire({
            title: 'Servicio cancelado correctamente',
            icon: 'success',
            timer: 2000,
          });
          this.router.navigate(['/servInac']);
        },
        err => {
          Swal.fire({
            title: 'Algo salio mal',
            icon: 'error',
            timer: 2000,
          });
        }
    );
}

agendar(){
  this.router.navigate(['/agendar', this.servicio.idServicio]);
}
}
