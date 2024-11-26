import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CobroService {

  constructor(private http: HttpClient) { }
  url = "https://apirest-q96w.onrender.com/cotizar"
  //private url ="http://localhost:4000/cotizar";

  consultar(){
    return this.http.get<any>(this.url);
  }
  agregar(cobro: object){
    return this.http.put<any>(this.url+"/agregar", cobro);
  }

  nuevo(idServicio: any) {
    return this.http.post(this.url+"/nuevo", { idServicio });
  }
  
  articulos(cobro:object){
    return this.http.post<any>(this.url+"/articulos", cobro);
  }

  finalizar(cobro:object){
    return this.http.put<any>(this.url+"/finalizar", cobro);
  }

 
}
