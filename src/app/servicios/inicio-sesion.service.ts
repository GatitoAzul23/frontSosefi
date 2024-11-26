import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {
  url = "https://apirest-q96w.onrender.com/usuarios"
  //url="http://localhost:4000/usuarios"
  constructor(private router:Router, private http:HttpClient) { }

 

    login(usuario:object){
    return this.http.post<any>(this.url+"/login", usuario);
  }

 

  logout(){
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
  
  eslogueado():boolean{
    if(localStorage.getItem("usuario") != null){
        return true;
    }else{
      return false;
    }
  }

  cambiarContra(usuario: object){
    return this.http.put<any>(this.url +"/actualizar", usuario);
  }

  consultarUno(usuario: object){
    return this.http.post<any>(this.url+"/consultar", usuario);
  }

  tuperfil(){
    return localStorage.getItem("perfil");
  }
  
}
