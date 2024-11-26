import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { InicioSesionService } from '../servicios/inicio-sesion.service';

@Injectable({
  providedIn: 'root'
})
export class administradorGuard implements CanActivate{
  constructor(private ServicioLogin: InicioSesionService, private router: Router){}

  canActivate():boolean{
    if(this.ServicioLogin.tuperfil()=="Administrador"){
      return true;
    }else{
      this.router.navigate(['/dashboard']);
      return false;
    }
  }

  
}