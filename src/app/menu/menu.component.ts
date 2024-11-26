import { Component } from '@angular/core';
import { InicioSesionService } from '../servicios/inicio-sesion.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  constructor(public ServicioLogin: InicioSesionService){}
  
  cerrarSesion(){
    this.ServicioLogin.logout();
  }

}

