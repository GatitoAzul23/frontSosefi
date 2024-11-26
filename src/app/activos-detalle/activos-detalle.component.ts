import { Component } from '@angular/core';
import { CobroService } from '../servicios/cobro.service';
import { ProductosService } from '../servicios/productos.service';
import { ServiService } from '../servicios/servi.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-activos-detalle',
  templateUrl: './activos-detalle.component.html',
  styleUrls: ['./activos-detalle.component.css']
})
export class ActivosDetalleComponent {
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
    fecha:"",
    hora:"",
    lugar:"",
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
        this.servicio.fecha = res.serv.fecha,
        this.servicio.hora = res.serv.hora,
        this.servicio.lugar = res.serv.lugar,
        this.servicio.correo = res.serv.correo,
        this.cobro.manoObra = res.coti.manoObra,
        this.cobro.totalProd = res.coti.totalProd,
        this.cobro.totalFin = res.coti.totalFin,
        this.productos = res.coti.productos 
      },
      err=>{
        this.router.navigate(['/activos']);
      });
  }  

}
