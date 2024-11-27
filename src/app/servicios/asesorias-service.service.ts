import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AsesoriasServiceService {

  url = "https://apirest-q96w.onrender.com/asesoria";
//url = "http://localhost:4000/asesoria";
  constructor(private router:Router, 
    private http:HttpClient) { }

  nuevo(asesoria:object){
    return this.http.post<any>(this.url+"/registro", asesoria);
  }

  consultarTodo(){
    return this.http.get<any>(this.url+'/consultar');
  }

  
}