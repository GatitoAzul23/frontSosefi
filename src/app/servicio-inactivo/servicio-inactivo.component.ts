import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiService } from '../servicios/servi.service';
import { CobroService } from '../servicios/cobro.service';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-servicio-inactivo',
  templateUrl: './servicio-inactivo.component.html',
  styleUrls: ['./servicio-inactivo.component.css']
})
export class ServicioInactivoComponent {
  constructor(private servicioServi: ServiService, 
    private servicioCobro: CobroService,
    private rutaActiva: ActivatedRoute, private router: Router){}
  servicios:any;
  serviciosF:any;
  servicio:any;
  serviciosMes:any;
  cobro ={
    idServicio:""
  }
  consulta={
    mes:"",
    anio:""
  }
  

  ngOnInit(): void{
    this.consultarPendientes();
  }

  consultarPendientes(){
    this.servicios= this.servicioServi.pendientes();
  }

  // consultarFinalizados(){
  //   this.serviciosF=this.servicioServi.finalizado();
  // }

  cancelarServ(idServicio: number) {
    this.servicioServi.cancelar(idServicio).subscribe(
        res => {
          Swal.fire({
            title: 'Servicio eliminado correctamente',
            icon: 'success',
            timer: 2000,
          });
            this.consultarPendientes(); // Llama a la función para actualizar la lista si es necesario
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
generarTicket(idServicio:any){
  this.servicioCobro.nuevo(idServicio).subscribe(
    res=>{
      //console.log(idServicio)
      this.router.navigate(['/cotizar', idServicio]);
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
buscar(){

  this.servicioServi.consultarMes(this.consulta).subscribe(
    res=>{
      console.log(res);
      Swal.fire({
        title: 'Servicios encontrados',
        icon: 'success',
        timer: 2000,
      });
      this.serviciosMes = res;
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
