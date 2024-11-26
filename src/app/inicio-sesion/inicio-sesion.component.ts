import { Component } from '@angular/core';
import { InicioSesionService } from '../servicios/inicio-sesion.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  usuario={
    email:"",
    password:""
  }
  constructor(private ServicioLogin : InicioSesionService, private router:Router){}

  inicioSesion(){
    this.ServicioLogin.login(this.usuario).subscribe(
      res=>{
        // alert("Bienvenido "+ res.env.nombre+ " "+res.env.apellido_paterno);
        Swal.fire({
          title: 'Bienvenido: '+ res.env.nombre+ ' '+ res.env.apellido_pat,
          icon: 'success',
          timer: 2000,
        });
        console.log(res);
        localStorage.setItem("email", res.env.email);
        localStorage.setItem("usuario", res.env.nombre);
        localStorage.setItem("perfil", res.env.apellido_pat);
        localStorage.setItem("token", res.env.jwtoken);
        this.router.navigate(['/dashboard']);
      },
      err=>{
        // alert("Usuario no autorizado");
        Swal.fire({
          title: 'Usuario no autorizado',
          icon: 'error',
          timer: 2000,
        });
        this.limpiar_campos();
      }

    );
  }
  // registrarUsuario(){
  //   this.ServicioLogin.registro(this.usuario).subscribe(
  //     res=>{
  //       alert("Empleado guardado");
  //       this.limpiar_campos();
  //     },
  //     err=>{
  //       alert("Ingrese sus datos correctamente");
  //     }
  //   );
  // }

  limpiar_campos(){
    this.usuario.password = "";
    this.usuario.email = "";   
  }

}
