import { Component} from '@angular/core';
import { ServiService } from '../servicios/servi.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-servicios-form',
  templateUrl: './servicios-form.component.html',
  styleUrls: ['./servicios-form.component.css']
})
export class ServiciosFormComponent{  

  servicio={
    idServicio: "",
    tipo:"",
    categoria:"",
    descripcion:"",
    nombreCliente:"",
    apellidoCliente:"",
    correo:""
  }
  
  constructor(private servicioServi: ServiService, private router:Router ){}

  crearNuevo(){
    this.servicioServi.nuevo(this.servicio).subscribe(
      res=>{
        Swal.fire({
          title: 'Se envió la petición.',
          icon: 'success',
          timer: 2000,
        });
        this.limpiarCampos();
      },
      err=>{
        Swal.fire({
          title: err.error.error[0].msg,
          icon: 'error',
          timer: 2000,
          });
      }
    );
  }


  limpiarCampos(){
    this.servicio.descripcion="",
    this.servicio.nombreCliente="",
    this.servicio.apellidoCliente="",
    this.servicio.correo=""
    
  }
}
