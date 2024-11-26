import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { ProductoDataService } from '../servicios/producto-data.service';

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

  constructor(private productoServicio: ProductosService, 
    private ProductoData: ProductoDataService){}

  // selectProduct(productName: string, modelo:string, numero:string) {
  //   this.ProductoData.setSelectedProduct(productName, modelo, numero);
  // }

  ngOnInit(): void{
    this.consultarTodoPro();
  }

  consultarTodoPro(){
    this.productos = this.productoServicio.consultarTodo();
  }

  // buscarProducto(numero:string){
  //   this.productoServicio.consultar(numero).subscribe(
  //     res=>{
  //       this.router.navigate(['/cotizar', idServicio]);
  //     },
  //     err=>{

  //     }
  //   );
  // }


}
