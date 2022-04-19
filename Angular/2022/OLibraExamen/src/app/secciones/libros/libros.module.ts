import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { LibrosNavComponent } from './libros-nav/libros-nav.component';
import { LibrosCreateComponent } from './libros-create/libros-create.component';
import { LibrosShowComponent } from './libros-show/libros-show.component';


@NgModule({
  declarations: [
    LibrosComponent,
    LibrosNavComponent,
    LibrosCreateComponent,
    LibrosShowComponent
  ],
  imports: [
    CommonModule,
    LibrosRoutingModule,
  ]
})
export class LibrosModule { }
