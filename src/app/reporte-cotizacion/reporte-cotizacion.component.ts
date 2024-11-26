import { Component } from '@angular/core';
import { ServiService } from '../servicios/servi.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reporte-cotizacion',
  templateUrl: './reporte-cotizacion.component.html',
  styleUrls: ['./reporte-cotizacion.component.css']
})
export class ReporteCotizacionComponent {
  constructor(
  private serivcioServi: ServiService, 
    private router:Router){}


  consulta ={
    mes:"",
    anio:""
  }

  reporteCoti ={
    numero:"",
    total:"",
    productos:"",
    ganancia:""
  }

  buscar(){
    this.serivcioServi.reporteCotizacion(this.consulta).subscribe(
      res=>{
        //console.log(res);
        Swal.fire({
          title: 'Servicios encontrados',
          icon: 'success',
          timer: 2000,
        });
        this.reporteCoti.numero = res.cantidadCotizaciones;
        this.reporteCoti.total = res.sumaTotalFin;
        this.reporteCoti.productos = res.sumaTotalProd;
        this.reporteCoti.ganancia = res.gananciaTotal;
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

