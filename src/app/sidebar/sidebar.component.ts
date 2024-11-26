import { Component } from '@angular/core';
import { InicioSesionService } from '../servicios/inicio-sesion.service';
import { CobroService } from '../servicios/cobro.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(public servicioLogin:InicioSesionService, private servicioCobro: CobroService, private router:Router){
  }
  cerrarSesion(){
    this.servicioLogin.logout();
  }
  cobro ={
    
  }

  generarTicket(){
    this.servicioCobro.nuevo(this.cobro).subscribe(
      res=>{
        this.router.navigate(['/cobros']);
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
