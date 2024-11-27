import { Component, ViewChild, ElementRef } from '@angular/core';
import { CobroService } from '../servicios/cobro.service';
import { ProductosService } from '../servicios/productos.service';
import { ServiService } from '../servicios/servi.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent {
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
    correo:"",
    idCotizacion:"",
  }
  productos: any[] = [];
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
  resultado: any;
  servicioNum:any;

  ngOnInit(): void {
    let folio =""+ this.rutaActiva.snapshot.paramMap.get('folio');
    
    this.serivcioServi.consultarCoti(folio).subscribe(
      
      res=>{
        console.log(res);
        this.servicio.idCotizacion = res.serv.idCotizacion,
        this.servicio.idServicio = res.serv.idServicio,
        this.servicio.nombreCliente = res.serv.nombreCliente,
        this.servicio.apellidoCliente = res.serv.apellidoCliente,
        this.servicio.correo = res.serv.correo,
        this.cobro.manoObra = res.coti.manoObra,
        this.cobro.totalProd = res.coti.totalProd,
        this.cobro.totalFin = res.coti.totalFin,
        this.productos = res.coti.productos 
      },
      err=>{
        this.router.navigate(['/servInac']);
      });
  }  

  cancelarServ() {
    //console.log(this.servicioNum);
    this.serivcioServi.cancelarPost(this.servicio).subscribe(
        res => {
          Swal.fire({
            title: 'Servicio cancelado correctamente',
            icon: 'success',
            timer: 2000,
          });
          this.router.navigate(['/servInac']);
        },
        err => {
          Swal.fire({
            title: 'Algo salio mal',
            icon: 'error',
            timer: 2000,
          });
        }
    );
}

agendar(){
  this.router.navigate(['/agendar', this.servicio.idServicio]);
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
    
    pdf.save('cotización'+this.servicio.idCotizacion+'.pdf');
  });
}
}
