import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListadoHomeComponent } from './home/listado-home/listado-home.component';
import { LibroHomeComponent } from './home/listado-home/libro-home/libro-home.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ListadoCarritoComponent } from './carrito/listado-carrito/listado-carrito.component';
import { LibroCarritoComponent } from './carrito/listado-carrito/libro-carrito/libro-carrito.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ListadoComentariosComponent } from './detalle/listado-comentarios/listado-comentarios.component';
import { ComentarioComponent } from './detalle/listado-comentarios/comentario/comentario.component';
import { LibroService } from './compartido/libros.service';
import { CarritoService } from './compartido/carrito.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListadoHomeComponent,
    LibroHomeComponent,
    CarritoComponent,
    ListadoCarritoComponent,
    LibroCarritoComponent,
    FormularioComponent,
    DetalleComponent,
    ListadoComentariosComponent,
    ComentarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LibroService, CarritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
