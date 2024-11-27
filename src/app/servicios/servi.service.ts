import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiService {
url = "https://apirest-q96w.onrender.com/service";
urlReporte= "https://apirest-q96w.onrender.com/reportes";

//urlReporte= "http://localhost:4000/reportes";
//url = "http://localhost:4000/service";
  constructor(private router:Router, private http:HttpClient) { }

  nuevo(servicio:object){
    return this.http.post<any>(this.url+"/registro", servicio);
  }

  pendientes(){
    return this.http.get<any>(this.url+"/pendientes");
  }

  activos(){
    return this.http.get<any>(this.url+"/activos");
  }

  agendar(servicio:object){
    return this.http.put<any>(this.url+"/completo",servicio);
  }

  consultarUnoPost(servicio:object){
    return this.http.post<any>(this.url+"/servi", servicio);
  }
  finalizado(){
    return this.http.get<any>(this.url+"/finalizados");
  }
  consultarUno(folio:string){
    return this.http.get<any>(this.url +"/folio/"+ folio);
  }

  cancelar(idServicio: number){
    return this.http.put<any>(`${this.url}/cancelar`, { idServicio });
  }

  finalizar(idServicio: number){
    return this.http.put<any>(`${this.url}/finalizar`, { idServicio });
  }

  consultarCoti(folio:string){
    return this.http.get<any>(this.url +"/serviCoti/"+ folio);
  }

  cancelarPost(servicio:object){
    return this.http.put<any>(this.url+"/cancelar", servicio);
  }

  consultarMes(consulta:object){
    return this.http.post<any>(this.url+"/consultaMes",consulta);
  }

  reporteCotizacion(consulta:object){
    return this.http.post<any>(this.urlReporte+'/reporteCotizaciones', consulta);
  }

  reporteServicio(consulta:object){
    return this.http.post<any>(this.urlReporte+'/reporteServicios', consulta);
  }
}
