import { Component, ViewChild, ElementRef } from '@angular/core';
import { ServiService } from '../servicios/servi.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Chart, registerables } from 'chart.js';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reporte-servicio',
  templateUrl: './reporte-servicio.component.html',
  styleUrls: ['./reporte-servicio.component.css']
})
export class ReporteServicioComponent {
  @ViewChild('content', { static: false }) content!: ElementRef;
  constructor(
    private serivcioServi: ServiService, 
    private router:Router
  ){}
  
  chart:any;
    
  consulta ={
    mes:"",
    anio:""
  }
    
  mayor:any;
  reporteServ={
    totalServis:"",
    totalCercas:"",
    totalCamaras:"",
    totalPortero:"",
    totalAcceso:"",
    totalOtro:"",
    mayor:""
  }

  buscar(){
    this.serivcioServi.reporteServicio(this.consulta).subscribe(
      res=>{
        console.log(res);
        Swal.fire({
          title: 'Reporte generado',
          icon: 'success',
          timer: 2000,
        });
        const data = res.totales;
        
        this.createChart(data);
        this.reporteServ.totalServis= res.totalServicios;
        this.reporteServ.totalCercas = res.totales.Cercas;
        this.reporteServ.totalCamaras = res.totales.Camaras;
        this.reporteServ.totalPortero = res.totales.Porteros;
        this.reporteServ.totalAcceso = res.totales.Accesos;
        this.reporteServ.totalOtro = res.totales.Otros;
        this.mayor = res.categoriasMayores;
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
  createChart(data: any) {
    Chart.register(...registerables);
    const labels = Object.keys(data);
    const values = Object.values(data);

    this.chart = new Chart('canvas', {
      type: 'bar', // Cambia a 'pie', 'line', etc. si lo deseas
      data: {
        labels: labels,
        datasets: [{
          label: 'Totales',
          data: values,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
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
      
      pdf.save('reporteServicios_'+this.consulta.mes+'_'+this.consulta.anio+'.pdf');
    });
  }
}
