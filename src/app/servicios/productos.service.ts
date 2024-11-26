import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  //private servidor ="http://localhost:4000";
  private servidor ="https://apirest-q96w.onrender.com";

  private url = this.servidor+"/producto";
  constructor(private http: HttpClient) { }

  consultarUno(producto:object){
    return this.http.post<any>(this.url+"/codigo",producto);
  }

  guardar(
    codigo: string,
    nombre: string,
    modelo: string,
    marca: string,
    precio: string,
    file: File
  ){
    const fd = new FormData();
    fd.append("codigo", codigo);
    fd.append("nombre", nombre);
    fd.append("modelo",modelo);
    fd.append("marca", marca);
    fd.append("precio", precio);
    fd.append("imagen", file);

    return this.http.post<any>(this.url, fd);
  }

  modificar(
    codigo: string,
    nombre: string,
    modelo: string,
    marca: string,
    precio: string,
    file: File
  ){
    const fd = new FormData();
    fd.append("codigo", codigo);
    fd.append("nombre", nombre);
    fd.append("modelo",modelo);
    fd.append("marca", marca);
    fd.append("precio", precio);
    fd.append("imagen", file);

    return this.http.put<any>(this.url, fd);
  }
  eliminar(codigo:string){
    return this.http.delete<any>(this.url+"/borrar/"+ codigo);
  }
  consultarTodo(){
    return this.http.get<any>(this.url);
  }
  consultar(codigo:string){
    return this.http.get<any>(this.url +"/codigo/"+ codigo);
  }

  borrar(producto: object){
    return this.http.put<any>(this.url+"/eliminar", producto);
  }

  aumentar(producto:object){
    return this.http.put<any>(this.url+"/agregar", producto);
  }
}

