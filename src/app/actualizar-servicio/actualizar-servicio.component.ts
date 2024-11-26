import { Component } from '@angular/core';
import { ServiService } from '../servicios/servi.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-servicio',
  templateUrl: './actualizar-servicio.component.html',
  styleUrls: ['./actualizar-servicio.component.css']
})
export class ActualizarServicioComponent {
  constructor(
    private serivcioServi: ServiService, 
    private rutaActiva: ActivatedRoute,
    private router:Router){}

  servicio={
    idServicio:"",
    nombreCliente:"",
    apellidoCliente:"",
    correo:"",
    fecha:"",
    hora:"",
    lugar:"",
    telefono:"",
    idCotizacion:"",
  }
  ngOnInit(): void {
    let folio =""+ this.rutaActiva.snapshot.paramMap.get('folio');
    
    this.serivcioServi.consultarCoti(folio).subscribe(
      res=>{
        this.servicio.idCotizacion = res.serv.idCotizacion,
        this.servicio.idServicio = res.serv.idServicio,
        this.servicio.nombreCliente = res.serv.nombreCliente,
        this.servicio.apellidoCliente = res.serv.apellidoCliente,
        this.servicio.correo = res.serv.correo
      },
      err=>{
        this.router.navigate(['/servInac']);
      });
  }
  
  agendar(){
    this.serivcioServi.agendar(this.servicio).subscribe(
      res=>{
        Swal.fire({
          title: 'Servicio agendado correctamente',
          icon: 'success',
          timer: 2000,
        });
        this.router.navigate(['/activos']);
      },
      err=>{

      }
    );
  }
  
}
