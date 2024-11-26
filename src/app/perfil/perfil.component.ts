import { Component, OnInit } from '@angular/core';
import { InicioSesionService } from '../servicios/inicio-sesion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{
  
  usuario ={
    nombre:"",
    apellido_pat:"",
    apellido_mat:"",
    password:"",
    password_ant:"",
    email: localStorage.getItem("email")
  }

  constructor(private servicioLogin: InicioSesionService){}

ngOnInit(): void {
  this.consultar();
}

  cambiarContra(){
    this.servicioLogin.cambiarContra(this.usuario).subscribe(
      res=>{
          Swal.fire({
          title: 'Se cambió la contraseña',
          icon: 'success',
          timer: 2000,
        });
        this.limpiarCampos();
      },
      err=>{
        Swal.fire({
        title: err.error.error[0].msg,
        icon: 'error',
        timer: 2000,
        });
        // alert(err.error.error[0].msg);
      }
    );
  }

  limpiarCampos(){
    this.usuario.password ="";
    this.usuario.password_ant ="";
  }

  consultar(){
    this.servicioLogin.consultarUno(this.usuario).subscribe(
      res=>{
        console.log("consulta");
        console.log(res);
        this.usuario.nombre = res.nombre;
        this.usuario.apellido_pat = res.apellido_pat;
        this.usuario.apellido_mat = res.apellido_mat;
        this.usuario.email = res.perfil.email;
        
      },
      err=>{
        Swal.fire({
          title: 'Usuario no encontrado',
          icon: 'success',
          timer: 2000,
        });
      }
    );
  }
}
