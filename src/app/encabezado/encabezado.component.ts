import { Component } from '@angular/core';
import { InicioSesionService } from '../servicios/inicio-sesion.service';
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {

  constructor(public ServicioLogin: InicioSesionService ){}
  cerrarSesion(){
    this.ServicioLogin.logout();
  }
}
