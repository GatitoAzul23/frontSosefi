import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//listado de componentes en la navegación

import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { AsesoriasComponent } from './asesorias/asesorias.component';
import { AsesoriasFormComponent } from './asesorias-form/asesorias-form.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ServiciosFormComponent } from './servicios-form/servicios-form.component';
import { CobroComponent } from './cobro/cobro.component';
import { ServicioInactivoComponent } from './servicio-inactivo/servicio-inactivo.component';
import { CotizacionRegistroComponent } from './cotizacion-registro/cotizacion-registro.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { ActualizarServicioComponent } from './actualizar-servicio/actualizar-servicio.component';
import { ActivosComponent } from './activos/activos.component';
import { ActivosDetalleComponent } from './activos-detalle/activos-detalle.component';
import { ReporteCotizacionComponent } from './reporte-cotizacion/reporte-cotizacion.component';
import { ReporteServicioComponent } from './reporte-servicio/reporte-servicio.component';
import { AsesoriasConsComponent } from './asesorias-cons/asesorias-cons.component';
//Listado de guardias
import { loginGuard } from './guardias/login.guard';

const routes: Routes = [
  {path: "login", component:InicioSesionComponent},
  {path: "inicio", component:InicioComponent},
  {path: "asesorias", component:AsesoriasComponent},
  {path: "asesoriasForm/:codigo", component:AsesoriasFormComponent},
  {path: "dashboard", component : DashboardComponent, canActivate:[loginGuard]},
  {path: "productos", component: ProductosComponent, canActivate:[loginGuard]},
  {path: 'productos/codigo/:codigo', component: ProductoDetalleComponent, canActivate:[loginGuard]},
  {path: "perfil", component: PerfilComponent, canActivate:[loginGuard]},
  {path: "serviciosForm", component: ServiciosFormComponent},
  {path: "cobros", component:CobroComponent, canActivate:[loginGuard]},
  {path: "servInac", component:ServicioInactivoComponent, canActivate:[loginGuard]},
  {path: "cotizar/:folio", component:CotizacionRegistroComponent, canActivate:[loginGuard]},
  {path: "cotizacion/:folio", component:CotizacionComponent, canActivate:[loginGuard]},
  {path: "agendar/:folio", component:ActualizarServicioComponent, canActivate:[loginGuard]},
  {path: "activos", component:ActivosComponent, canActivate:[loginGuard]},
  {path: "detalle/:folio", component:ActivosDetalleComponent, canActivate:[loginGuard]},
  {path: "reporte/ventas", component:ReporteCotizacionComponent, canActivate:[loginGuard]},
  {path: "reporte/instalaciones", component:ReporteServicioComponent, canActivate:[loginGuard]},
  {path: "asesoria/registradas", component:AsesoriasConsComponent, canActivate:[loginGuard]},
  {path: "**", redirectTo: "/inicio"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
