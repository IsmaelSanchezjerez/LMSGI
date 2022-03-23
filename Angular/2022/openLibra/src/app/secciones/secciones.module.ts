import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeccionesRoutingModule } from './secciones-routing.module';
import { AutoresComponent } from './autores/autores.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { LibrosComponent } from './libros/libros.component';


@NgModule({
  declarations: [
    AutoresComponent,
    CategoriasComponent,
    LibrosComponent,
  ],
  imports: [
    CommonModule,
    SeccionesRoutingModule
  ]
})
export class SeccionesModule { }
