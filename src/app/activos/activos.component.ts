import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiService } from '../servicios/servi.service';
import { CobroService } from '../servicios/cobro.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-activos',
  templateUrl: './activos.component.html',
  styleUrls: ['./activos.component.css']
})
export class ActivosComponent {

  constructor(private servicioServi: ServiService, 
    private servicioCobro: CobroService,
    private rutaActiva: ActivatedRoute, private router: Router){}
  servicios:any;
  serviciosF:any;
  servicio:any;
  cobro ={
    idServicio:""
  }

  ngOnInit(): void{
    this.consultarActivos();
  }

  consultarActivos(){
    this.servicios= this.servicioServi.activos();
  }

  finalizar(idServicio: number) {
    this.servicioServi.finalizar(idServicio).subscribe(
        res => {
          Swal.fire({
            title: 'Servicio finalizado correctamente',
            icon: 'success',
            timer: 2000,
          });
            this.consultarActivos(); // Llama a la función para actualizar la lista si es necesario
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
}
