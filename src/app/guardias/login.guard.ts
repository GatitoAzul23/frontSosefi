import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { InicioSesionService } from '../servicios/inicio-sesion.service';

@Injectable({
  providedIn: 'root'
})
export class loginGuard implements CanActivate{
  constructor(private ServicioLogin: InicioSesionService, private router: Router){}

  canActivate():boolean{
    if(this.ServicioLogin.eslogueado()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }

  
}