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

  terminarAsesoria(idAsesoria: number){

  }
}
