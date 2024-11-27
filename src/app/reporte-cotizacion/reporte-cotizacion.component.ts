import { Component, ViewChild, ElementRef } from '@angular/core';
import { ServiService } from '../servicios/servi.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reporte-cotizacion',
  templateUrl: './reporte-cotizacion.component.html',
  styleUrls: ['./reporte-cotizacion.component.css']
})
export class ReporteCotizacionComponent {
  @ViewChild('content', { static: false }) content!: ElementRef;
  constructor(
  private serivcioServi: ServiService, 
    private router:Router){}


  consulta ={
    mes:"",
    anio:""
  }

  reporteCoti ={
    numero:"",
    total:"",
    productos:"",
    ganancia:""
  }

  buscar(){
    this.serivcioServi.reporteCotizacion(this.consulta).subscribe(
      res=>{
        //console.log(res);
        Swal.fire({
          title: 'Reporte generado',
          icon: 'success',
          timer: 2000,
        });
        this.reporteCoti.numero = res.cantidadCotizaciones;
        this.reporteCoti.total = res.sumaTotalFin;
        this.reporteCoti.productos = res.sumaTotalProd;
        this.reporteCoti.ganancia = res.gananciaTotal;
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
      
      pdf.save('reporteVentas_'+this.consulta.mes+'_'+this.consulta.anio+'.pdf');
    });
  }
}

