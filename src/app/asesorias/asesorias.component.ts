import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-asesorias',
  templateUrl: './asesorias.component.html',
  styleUrls: ['./asesorias.component.css']
})
export class AsesoriasComponent implements OnInit{

  productos: any;
  file: any;
  page =1;
  producto = {
    codigo:"",
    nombre: "",
    marca: "",
    modelo:"",
    precio: "",
    imgurl: ""
    
  }

  constructor(private productoServicio: ProductosService){}


  ngOnInit(): void{
    this.consultarTodoPro();
  }

  consultarTodoPro(){
    this.productos = this.productoServicio.consultarTodo();
  }



}
