import { Component, ViewChild, ElementRef } from '@angular/core';
import { CobroService } from '../servicios/cobro.service';
import { ProductosService } from '../servicios/productos.service';
import { ServiService } from '../servicios/servi.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
//Para crear PDFS
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-cotizacion-registro',
  templateUrl: './cotizacion-registro.component.html',
  styleUrls: ['./cotizacion-registro.component.css']
})
export class CotizacionRegistroComponent {
  @ViewChild('content', { static: false }) content!: ElementRef;

  constructor(private servicioCobros :CobroService, 
    private serivcioServi: ServiService, 
    private productoServicio : ProductosService,
    private rutaActiva: ActivatedRoute,
    private router:Router){}

    

  servicios:any;
  servicio={
    idServicio:"",
    nombreCliente:"",
    apellidoCliente:"",
    correo:""
  }
  productos:any;
  compras:any;
  cobro ={
    idCotizacion :"",
    precio:"",
    nombre:"",
    manoObra:"",
    totalFin:"",
    totalProd:"",
    cantidad:"",
    idServicio:"",
  }
  
  ngOnInit(): void {
    let folio =""+ this.rutaActiva.snapshot.paramMap.get('folio');
    
    this.serivcioServi.consultarUno(folio).subscribe(
      res=>{
        console.log(res);
        this.servicio.idServicio = res.idServicio,
        this.servicio.nombreCliente = res.nombreCliente,
        this.servicio.apellidoCliente = res.apellidoCliente,
        this.servicio.correo = res.correo
      },
      err=>{
        this.router.navigate(['/servInac']);
      });
      this.consultarTodoPro();
      this.consultarUl();
  }
  
  consultarUl(){
    this.servicioCobros.consultar().subscribe(
      res=>{
        console.log(res.ultimo[0].idCotizacion);
        this.cobro.idCotizacion = res.ultimo[0].idCotizacion;
      },
      err=>{
        Swal.fire({
          title: 'Algo salio mal',
          icon: 'error',
          timer: 2000,
        });
      }
    );
  }
  
  consultarTodoPro(){
    this.productos = this.productoServicio.consultarTodo();
    console.log(this.productos);
  }

  agregar(){
    this.servicioCobros.agregar(this.cobro).subscribe(
      res=>{
        Swal.fire({
          title: 'Producto agregado',
          icon: 'success',
          timer: 1000,
        });
        this.cobro.nombre ="";
        this.cobro.cantidad="";
        this.articulos();
      },
      err=>{
        Swal.fire({
          title: 'Error al agregar el producto',
          icon: 'error',
          timer: 2000,
        });
      }
    );
  }
  
  articulos(){
    this.compras=this.servicioCobros.articulos(this.cobro);
  }

  finalizar(){
    this.servicioCobros.finalizar(this.cobro).subscribe(
      res=>{
        this.cobro.totalFin = res.total.totalFin;
        this.cobro.totalProd = res.total.totalProd;
        Swal.fire({
          title: 'Cotizacion finalizada.',
          icon: 'success',
          timer: 2000,
        });
      },
      err=>{
          Swal.fire({
          title: 'Error al realizar el cobro',
          icon: 'error',
          timer: 2000,
        });
      }
    );
  }
  public generatePDF(): void {
    html2canvas(this.content.nativeElement).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 190;
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      pdf.save('cotización'+this.cobro.idCotizacion+'.pdf');
    });
  }
}
