import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdentificacionComponent } from './modulos/seguridad/identificacion/identificacion.component';
import { CambioClaveComponent } from './modulos/seguridad/cambio-clave/cambio-clave.component';
import { RecuperarClaveComponent } from './modulos/seguridad/recuperar-clave/recuperar-clave.component';
import { CrearProductoComponent } from './modulos/administracion/productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './modulos/administracion/productos/editar-producto/editar-producto.component';
import { BuscarProductoComponent } from './modulos/administracion/productos/buscar-producto/buscar-producto.component';
import { EliminarProductoComponent } from './modulos/administracion/productos/eliminar-producto/eliminar-producto.component';
import { CrearPersonaComponent } from './modulos/administracion/personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './modulos/administracion/personas/editar-persona/editar-persona.component';
import { BuscarPersonaComponent } from './modulos/administracion/personas/buscar-persona/buscar-persona.component';
import { EliminarPersonaComponent } from './modulos/administracion/personas/eliminar-persona/eliminar-persona.component';
import { BarraNavegacionComponent } from './plantilla/barra-navegacion/barra-navegacion.component';
import { BarraPiePaginaComponent } from './plantilla/barra-pie-pagina/barra-pie-pagina.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { ErrorComponent } from './plantilla/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    IdentificacionComponent,
    CambioClaveComponent,
    RecuperarClaveComponent,
    CrearProductoComponent,
    EditarProductoComponent,
    BuscarProductoComponent,
    EliminarProductoComponent,
    CrearPersonaComponent,
    EditarPersonaComponent,
    BuscarPersonaComponent,
    EliminarPersonaComponent,
    BarraNavegacionComponent,
    BarraPiePaginaComponent,
    InicioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
