//Listado de modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from "ngx-pagination"; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
//Listado de componentes
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarruselComponent } from './carrusel/carrusel.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CobroComponent } from './cobro/cobro.component';
import { AsesoriasComponent } from './asesorias/asesorias.component';
import { AsesoriasFormComponent } from './asesorias-form/asesorias-form.component';
import { ServiciosFormComponent } from './servicios-form/servicios-form.component';
import { ServicioInactivoComponent } from './servicio-inactivo/servicio-inactivo.component';
import { CotizacionRegistroComponent } from './cotizacion-registro/cotizacion-registro.component';
import { LeyendaComponent } from './leyenda/leyenda.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { ActualizarServicioComponent } from './actualizar-servicio/actualizar-servicio.component';
import { ActivosComponent } from './activos/activos.component';
import { ActivosDetalleComponent } from './activos-detalle/activos-detalle.component';
import { ReporteCotizacionComponent } from './reporte-cotizacion/reporte-cotizacion.component';
import { ReporteServicioComponent } from './reporte-servicio/reporte-servicio.component';
//listado de servicios
import { InicioSesionService } from './servicios/inicio-sesion.service';
import { ProductosService } from './servicios/productos.service';
import { ServiService } from './servicios/servi.service';
import { CobroService } from './servicios/cobro.service';
import { AsesoriasServiceService } from './servicios/asesorias-service.service';
import { AsesoriasConsComponent } from './asesorias-cons/asesorias-cons.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    EncabezadoComponent,
    InicioComponent,
    CarruselComponent,
    DashboardComponent,
    SidebarComponent,
    MenuComponent,
    ProductosComponent,
    ProductoDetalleComponent,
    PerfilComponent,
    CobroComponent,
    AsesoriasComponent,
    AsesoriasFormComponent,
    ServiciosFormComponent,
    ServicioInactivoComponent,
    CotizacionRegistroComponent,
    LeyendaComponent,
    CotizacionComponent,
    ActualizarServicioComponent,
    ActivosComponent,
    ActivosDetalleComponent,
    ReporteCotizacionComponent,
    ReporteServicioComponent,
    AsesoriasConsComponent
  ],
  imports: [
    //aqui van los API de Angular material
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    FontAwesomeModule,
    NgxPaginationModule
  ],
  providers: [
    InicioSesionService,
    ProductosService,
    ServiService,
    CobroService,
    AsesoriasServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
