import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AsesoriasServiceService } from '../servicios/asesorias-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-asesorias-cons',
  templateUrl: './asesorias-cons.component.html',
  styleUrls: ['./asesorias-cons.component.css']
})
export class AsesoriasConsComponent {
  asesorias:any;
  
  constructor(
    private router: Router,
    private asesoriasService: AsesoriasServiceService
  ){}


  ngOnInit():void{
    this.consultarTodo();
  }

  consultarTodo(){
    this.asesorias =this.asesoriasService.consultarTodo()
  }

  terminarAsesoria(idAsesoria: number) {
    this.asesoriasService.cancelar(idAsesoria).subscribe(
        res => {
          Swal.fire({
            title: 'Asesoria finalizada exitosamente',
            icon: 'success',
            timer: 2000,
          });
            this.consultarTodo(); // Llama a la función para actualizar la lista si es necesario
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
}
